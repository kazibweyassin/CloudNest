'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Users, 
  Star, 
  Share2, 
  Bookmark, 
  Heart,
  Globe,
  Zap,
  Shield,
  Smartphone,
  CheckCircle,
  ExternalLink,
  Calendar,
  Briefcase,
  Award,
  Target,
  Lightbulb
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
  fullDescription?: string
  companyInfo?: {
    description: string
    website: string
    size: string
    founded: string
    techStack: string[]
    culture: string[]
  }
  skills: string[]
  responsibilities: string[]
  qualifications: string[]
  applicationProcess: string[]
}

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = params.id as string
  
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [similarJobs, setSimilarJobs] = useState<Job[]>([])
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`)
        const data = await response.json()
        
        if (response.ok) {
          setJob(data.job)
          setSimilarJobs(data.similarJobs || [])
        } else {
          console.error('Failed to fetch job:', data.error)
        }
      } catch (error) {
        console.error('Error fetching job:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [jobId])

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'FULL_TIME':
        return 'bg-green-100 text-green-800'
      case 'PART_TIME':
        return 'bg-blue-100 text-blue-800'
      case 'CONTRACT':
        return 'bg-purple-100 text-purple-800'
      case 'REMOTE':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'ENTRY':
        return 'bg-green-100 text-green-800'
      case 'MID':
        return 'bg-blue-100 text-blue-800'
      case 'SENIOR':
        return 'bg-purple-100 text-purple-800'
      case 'LEAD':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'KUBERNETES':
        return <Zap className="h-4 w-4" />
      case 'DEVOPS':
        return <Shield className="h-4 w-4" />
      case 'CLOUD':
        return <Globe className="h-4 w-4" />
      case 'BACKEND':
        return <Building className="h-4 w-4" />
      case 'FRONTEND':
        return <Smartphone className="h-4 w-4" />
      case 'FULLSTACK':
        return <Users className="h-4 w-4" />
      default:
        return <Briefcase className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-4">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/jobs" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link 
              href="/jobs" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked ? 'text-blue-500 bg-blue-50' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                {job.featured && (
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </span>
                )}
                {job.africanCompany && (
                  <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    <Globe className="h-3 w-3 mr-1" />
                    African Company
                  </span>
                )}
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getJobTypeColor(job.type)}`}>
                  {job.type.replace('_', ' ')}
                </span>
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getExperienceColor(job.experience)}`}>
                  {job.experience} Level
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {job.title}
              </h1>

              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  <span className="font-medium">{job.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{job.postedAt}</span>
                </div>
                {job.salary && (
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span className="font-medium">{job.salary}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  {getCategoryIcon(job.category)}
                  <span className="ml-2">{job.category}</span>
                </div>
                {job.remote && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>Remote OK</span>
                  </div>
                )}
              </div>
            </div>

            <div className="ml-8">
              <button
                onClick={() => setIsApplicationModalOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Apply Now
                <ExternalLink className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <div dangerouslySetInnerHTML={{ __html: job.fullDescription?.replace(/\n/g, '<br>') || job.description }} />
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Requirements & Qualifications
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Required Skills:</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Preferred Qualifications:</h3>
                  <ul className="space-y-2">
                    {job.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <Lightbulb className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Application Process
              </h2>
              <div className="space-y-3">
                {job.applicationProcess.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.company}</h3>
              {job.companyInfo && (
                <div className="space-y-4">
                  <p className="text-gray-700">{job.companyInfo.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company Size:</span>
                      <span className="font-medium">{job.companyInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founded:</span>
                      <span className="font-medium">{job.companyInfo.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Website:</span>
                      <a href={job.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Visit Website
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.companyInfo.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {similarJobs.slice(0, 3).map((similarJob) => (
                    <Link
                      key={similarJob.id}
                      href={`/jobs/${similarJob.id}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">{similarJob.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{similarJob.company}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{similarJob.location}</span>
                        {similarJob.salary && (
                          <>
                            <span className="mx-2">•</span>
                            <DollarSign className="h-3 w-3 mr-1" />
                            <span>{similarJob.salary}</span>
                          </>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Application Modal */}
      {job && (
        <JobApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={() => setIsApplicationModalOpen(false)}
          job={job}
        />
      )}
    </div>
  )
}
