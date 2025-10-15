import { NextRequest, NextResponse } from 'next/server'
import mockJobAPI from '@/lib/mock-job-api'

// GET /api/jobs - List all jobs with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filters = {
      type: searchParams.get('type') || 'all',
      experience: searchParams.get('experience') || 'all',
      category: searchParams.get('category') || 'all',
      africanOnly: searchParams.get('africanOnly') === 'true',
      search: searchParams.get('search') || ''
    }

    const result = await mockJobAPI.getJobs(filters)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

// POST /api/jobs - Create a new job
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newJob = await mockJobAPI.createJob(body)
    return NextResponse.json(newJob, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    )
  }
}