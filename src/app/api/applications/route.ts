import { NextRequest, NextResponse } from 'next/server'
import mockJobAPI from '@/lib/mock-job-api'

// GET /api/applications - List user applications
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filters = {
      status: searchParams.get('status') || 'all'
    }

    const applications = await mockJobAPI.getApplications(filters)
    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}