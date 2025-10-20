import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { connectToDatabase } from '@/lib/mongoose/connection'
import Writing from '@/lib/mongoose/models/Writing'
import DigitalArt from '@/lib/mongoose/models/DigitalArt'
import Comic from '@/lib/mongoose/models/Comic'
import Item from '@/lib/mongoose/models/Item'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()

    const data = await request.json()
    const { itemType, ...itemData } = data

    let createdItem

    switch (itemType) {
      case 'writing':
        createdItem = await Writing.create({
          ...itemData,
          creatorId: session.user.email,
        })
        break

      case 'digital-art':
        createdItem = await DigitalArt.create({
          ...itemData,
          creatorId: session.user.email,
        })
        break

      case 'comic':
        createdItem = await Comic.create({
          ...itemData,
          creatorId: session.user.email,
        })
        break

      default:
        createdItem = await Item.create({
          ...itemData,
          creatorId: session.user.email,
        })
        break
    }

    return NextResponse.json({ success: true, item: createdItem }, { status: 201 })
  } catch (error) {
    console.error('Item creation error:', error)
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 })
  }
}
