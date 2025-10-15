'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Users, 
  Star, 
  Filter, 
  Search, 
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Smartphone,
  Heart,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react'
import { JobApplicationModal } from '@/components/job-application-modal'

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE'
  salary?: string
  description: string
  requirements: string[]
  benefits: string[]
  postedAt: string
  experience: 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD'
  category: 'KUBERNETES' | 'DEVOPS' | 'CLOUD' | 'BACKEND' | 'FRONTEND' | 'FULLSTACK'
  companyLogo?: string
  featured: boolean
  africanCompany: boolean
  remote: boolean
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE'>('all')
  const [filterExperience, setFilterExperience] = useState<'all' | 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD'>('all')
  const [filterCategory, setFilterCategory] = useState<'all' | 'KUBERNETES' | 'DEVOPS' | 'CLOUD' | 'BACKEND' | 'FRONTEND' | 'FULLSTACK'>('all')
  const [showAfricanOnly, setShowAfricanOnly] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const params = new URLSearchParams()
        if (filterType !== 'all') params.append('type', filterType)
        if (filterExperience !== 'all') params.append('experience', filterExperience)
        if (filterCategory !== 'all') params.append('category', filterCategory)
        if (showAfricanOnly) params.append('africanOnly', 'true')
        if (searchTerm) params.append('search', searchTerm)

        const response = await fetch(`/api/jobs?${params.toString()}`)
        const data = await response.json()
        
        if (response.ok) {
          setJobs(data.jobs || [])
        } else {
          console.error('Failed to fetch jobs:', data.error)
        }
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filterType, filterExperience, filterCategory, showAfricanOnly, searchTerm])

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setIsApplicationModalOpen(true)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'FULL_TIME': return 'bg-green-100 text-green-800'
      case 'PART_TIME': return 'bg-blue-100 text-blue-800'
      case 'CONTRACT': return 'bg-purple-100 text-purple-800'
      case 'REMOTE': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'ENTRY': return 'bg-green-100 text-green-800'
      case 'MID': return 'bg-blue-100 text-blue-800'
      case 'SENIOR': return 'bg-purple-100 text-purple-800'
      case 'LEAD': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'KUBERNETES': return 'bg-blue-100 text-blue-800'
      case 'DEVOPS': return 'bg-green-100 text-green-800'
      case 'CLOUD': return 'bg-purple-100 text-purple-800'
      case 'BACKEND': return 'bg-orange-100 text-orange-800'
      case 'FRONTEND': return 'bg-pink-100 text-pink-800'
      case 'FULLSTACK': return 'bg-indigo-100 text-indigo-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Kubernetes Job
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with top African tech companies and advance your career in cloud-native technologies
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="REMOTE">Remote</option>
              </select>
            </div>

            {/* Experience Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <select
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value as any)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="ENTRY">Entry Level</option>
                <option value="MID">Mid Level</option>
                <option value="SENIOR">Senior Level</option>
                <option value="LEAD">Lead Level</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value as any)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="KUBERNETES">Kubernetes</option>
                <option value="DEVOPS">DevOps</option>
                <option value="CLOUD">Cloud</option>
                <option value="BACKEND">Backend</option>
                <option value="FRONTEND">Frontend</option>
                <option value="FULLSTACK">Full Stack</option>
              </select>
            </div>

            {/* African Companies Only */}
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showAfricanOnly}
                  onChange={(e) => setShowAfricanOnly(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">African Companies Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {job.featured && (
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          <Link href={`/jobs/${job.id}`} className="hover:text-blue-600 transition-colors">
                            {job.title}
                          </Link>
                        </h3>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="mr-4">{job.company}</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="mr-4">{job.location}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.postedAt}</span>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
                          {job.type.replace('_', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getExperienceColor(job.experience)}`}>
                          {job.experience}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(job.category)}`}>
                          {job.category}
                        </span>
                        {job.africanCompany && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            African Company
                          </span>
                        )}
                        {job.remote && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Remote
                          </span>
                        )}
                      </div>

                      {job.salary && (
                        <div className="flex items-center text-green-600 mb-4">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">{job.salary}</span>
                        </div>
                      )}
                    </div>

                    <div className="ml-6 flex flex-col space-y-2">
                      <button
                        onClick={() => handleApply(job)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Kubernetes Revolution in Africa</h2>
            <p className="text-xl mb-8">Be part of the growing ecosystem of cloud-native professionals</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-200">African Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-200">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={() => {
            setIsApplicationModalOpen(false)
            setSelectedJob(null)
          }}
          job={selectedJob}
        />
      )}
    </div>
  )
}