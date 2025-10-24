import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prismaSocial } from '@/lib/db'
import { connectToDatabase } from '@/lib/mongoose/connection'
import Item from '@/lib/mongoose/models/Item'
import mongoose from 'mongoose'

export async function POST(request) {
  try {
    // 1. Validate user authentication
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse and validate request body
    let requestData
    try {
      const rawBody = await request.text()
      requestData = JSON.parse(rawBody)
    } catch (error) {
      console.error('Error parsing request body:', error.message)
      return NextResponse.json(
        {
          success: false,
          message: `Invalid JSON in request body: ${error.message}`,
          code: 'INVALID_JSON'
        },
        { status: 400 }
      )
    }

    // 3. Validate input data
    const { isValid, errors } = validateInput(requestData)
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
          code: 'VALIDATION_ERROR'
        },
        { status: 400 }
      )
    }

    const { itemType, title, description, price, currency, monetizationType, fileUrl, fileUrls, content, tags, category } = requestData

    // 4. Find user by email to get the user ID
    const dbUser = await prismaSocial.users.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    })

    if (!dbUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
          code: 'USER_NOT_FOUND'
        },
        { status: 404 }
      )
    }

    // 5. Create item metadata in PostgreSQL
    const itemMetadata = await prismaSocial.items_metadata.create({
      data: {
        user_id: dbUser.id,
        title,
        description: description || content?.slice(0, 200) || '',
        price: price || 0,
        currency: currency || 'USD',
        monetization_type: monetizationType || 'free',
        item_type: itemType,
        category,
        tags,
        visibility: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    })

    // 6. Create item content in MongoDB
    await connectToDatabase()
    const itemContent = await Item.create({
      _id: new mongoose.Types.ObjectId(),
      creatorId: dbUser.id,
      title,
      description,
      content,
      fileUrl,
      fileUrls,
      fileType: requestData.fileType || 'other',
      itemType,
      category,
      tags,
      price: price || 0,
      currency: currency || 'USD',
      monetizationType: monetizationType || 'free',
      views: 0,
      downloads: 0,
      likes: 0,
      comments: [],
      ratings: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublished: true
    })

    // 7. Return success response
    return NextResponse.json({
      success: true,
      message: 'Item created successfully',
      data: {
        itemId: itemMetadata.id,
        mongoId: itemContent._id,
        title: itemContent.title,
        itemType: itemContent.itemType,
        price: itemContent.price,
        createdAt: itemMetadata.created_at,
        user: {
          id: dbUser.id,
          name: session.user.name || '',
          email: session.user.email
        }
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Item creation error:', error)
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 })
  }
}

// Helper function to validate and sanitize input
function validateInput(data) {
  const errors = []

  if (!data.title || typeof data.title !== 'string' || data.title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string')
  }

  if (data.price && (typeof data.price !== 'number' || data.price < 0)) {
    errors.push('Price must be a non-negative number')
  }

  if (data.currency && typeof data.currency !== 'string') {
    errors.push('Currency must be a string')
  }

  if (data.itemType && !['art', 'music', 'video', 'writing', 'group', 'comic', 'other'].includes(data.itemType)) {
    errors.push('Invalid item type')
  }

  if (data.monetizationType && !['free', 'one-time', 'subscription'].includes(data.monetizationType)) {
    errors.push('Invalid monetization type')
  }

  if (data.fileType && !['image', 'video', 'audio', 'text', 'pdf', 'other'].includes(data.fileType)) {
    errors.push('Invalid file type')
  }

  return { isValid: errors.length === 0, errors }
}
