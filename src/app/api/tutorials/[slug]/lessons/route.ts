import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Add a lesson to a tutorial
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const { title, content, type, order, duration } = await request.json()

    // Find the tutorial
    const tutorial = await prisma.tutorial.findUnique({
      where: { slug }
    })

    if (!tutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    // Create lesson (we'll need to extend the schema for lessons)
    // For now, we'll store lessons as JSON in the tutorial content
    const lessons = JSON.parse(tutorial.content || '[]')
    const newLesson = {
      id: Date.now().toString(),
      title,
      content,
      type: type || 'text',
      order: order || lessons.length + 1,
      duration: duration || 10,
      completed: false,
      createdAt: new Date().toISOString()
    }

    lessons.push(newLesson)
    
    const updatedTutorial = await prisma.tutorial.update({
      where: { slug },
      data: {
        content: JSON.stringify(lessons)
      }
    })

    return NextResponse.json({
      message: 'Lesson added successfully',
      lesson: newLesson,
      tutorial: updatedTutorial
    })
  } catch (error) {
    console.error('Add lesson error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get all lessons for a tutorial
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const tutorial = await prisma.tutorial.findUnique({
      where: { slug }
    })

    if (!tutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    const lessons = JSON.parse(tutorial.content || '[]')

    return NextResponse.json({
      tutorial: {
        id: tutorial.id,
        title: tutorial.title,
        slug: tutorial.slug,
        difficulty: tutorial.difficulty,
        order: tutorial.order
      },
      lessons
    })
  } catch (error) {
    console.error('Get lessons error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
