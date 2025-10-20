import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose/connection'
import Writing from '@/lib/mongoose/models/Writing'
import DigitalArt from '@/lib/mongoose/models/DigitalArt'
import Comic from '@/lib/mongoose/models/Comic'
import Item from '@/lib/mongoose/models/Item'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const itemType = searchParams.get('type') || 'item'

    let item

    switch (itemType) {
      case 'writing':
        item = await Writing.findById(params.id)
        break
      case 'digital-art':
        item = await DigitalArt.findById(params.id)
        break
      case 'comic':
        item = await Comic.findById(params.id)
        break
      default:
        item = await Item.findById(params.id)
        break
    }

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    return NextResponse.json({ item }, { status: 200 })
  } catch (error) {
    console.error('Fetch item error:', error)
    return NextResponse.json({ error: 'Failed to fetch item' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase()

    const data = await request.json()
    const { itemType, ...updateData } = data

    let updatedItem

    switch (itemType) {
      case 'writing':
        updatedItem = await Writing.findByIdAndUpdate(params.id, updateData, { new: true })
        break
      case 'digital-art':
        updatedItem = await DigitalArt.findByIdAndUpdate(params.id, updateData, { new: true })
        break
      case 'comic':
        updatedItem = await Comic.findByIdAndUpdate(params.id, updateData, { new: true })
        break
      default:
        updatedItem = await Item.findByIdAndUpdate(params.id, updateData, { new: true })
        break
    }

    if (!updatedItem) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, item: updatedItem }, { status: 200 })
  } catch (error) {
    console.error('Update item error:', error)
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const itemType = searchParams.get('type') || 'item'

    let deletedItem

    switch (itemType) {
      case 'writing':
        deletedItem = await Writing.findByIdAndDelete(params.id)
        break
      case 'digital-art':
        deletedItem = await DigitalArt.findByIdAndDelete(params.id)
        break
      case 'comic':
        deletedItem = await Comic.findByIdAndDelete(params.id)
        break
      default:
        deletedItem = await Item.findByIdAndDelete(params.id)
        break
    }

    if (!deletedItem) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Delete item error:', error)
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 })
  }
}
