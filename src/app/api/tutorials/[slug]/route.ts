import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const tutorial = await prisma.tutorial.findUnique({
      where: { slug },
      include: {
        quizzes: true
      }
    })

    if (!tutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(tutorial)
  } catch (error) {
    console.error('Tutorial fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const body = await request.json()

    const tutorial = await prisma.tutorial.update({
      where: { slug },
      data: body
    })

    return NextResponse.json(tutorial)
  } catch (error) {
    console.error('Tutorial update error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    await prisma.tutorial.delete({
      where: { slug }
    })

    return NextResponse.json({ message: 'Tutorial deleted successfully' })
  } catch (error) {
    console.error('Tutorial delete error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
