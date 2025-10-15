import { NextRequest, NextResponse } from 'next/server'
import mockJobAPI from '@/lib/mock-job-api'

// POST /api/jobs/[id]/apply - Submit job application
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id: jobId } = params
    const body = await request.json()
    
    const newApplication = await mockJobAPI.applyToJob(jobId, body)
    return NextResponse.json(newApplication, { status: 201 })
  } catch (error) {
    console.error(`Error submitting application for job ${params.id}:`, error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}