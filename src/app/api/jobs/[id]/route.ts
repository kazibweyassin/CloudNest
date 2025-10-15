import { NextRequest, NextResponse } from 'next/server'
import mockJobAPI from '@/lib/mock-job-api'

// GET /api/jobs/[id] - Get a specific job
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const result = await mockJobAPI.getJob(id)
    return NextResponse.json(result)
  } catch (error) {
    console.error(`Error fetching job ${params.id}:`, error)
    return NextResponse.json(
      { error: 'Job not found' },
      { status: 404 }
    )
  }
}

// PUT /api/jobs/[id] - Update a specific job
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const body = await request.json()
    const updatedJob = await mockJobAPI.updateJob(id, body)
    return NextResponse.json(updatedJob)
  } catch (error) {
    console.error(`Error updating job ${params.id}:`, error)
    return NextResponse.json(
      { error: 'Failed to update job' },
      { status: 500 }
    )
  }
}

// DELETE /api/jobs/[id] - Delete a specific job
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    await mockJobAPI.deleteJob(id)
    return NextResponse.json({ message: 'Job deleted successfully' })
  } catch (error) {
    console.error(`Error deleting job ${params.id}:`, error)
    return NextResponse.json(
      { error: 'Failed to delete job' },
      { status: 500 }
    )
  }
}