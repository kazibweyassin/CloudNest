'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Star, 
  Globe, 
  Briefcase, 
  FileText, 
  Plus, 
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface JobFormData {
  title: string
  company: string
  location: string
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE'
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  experience: 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD'
  category: 'KUBERNETES' | 'DEVOPS' | 'CLOUD' | 'BACKEND' | 'FRONTEND' | 'FULLSTACK'
  africanCompany: boolean
  remote: boolean
  featured: boolean
  skills: string[]
  responsibilities: string[]
  qualifications: string[]
  applicationProcess: string[]
  companyInfo: {
    description: string
    website: string
    size: string
    founded: string
    techStack: string[]
    culture: string[]
  }
}

export default function PostJobPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    company: '',
    location: '',
    type: 'FULL_TIME',
    salary: '',
    description: '',
    requirements: [''],
    benefits: [''],
    experience: 'ENTRY',
    category: 'KUBERNETES',
    africanCompany: false,
    remote: false,
    featured: false,
    skills: [''],
    responsibilities: [''],
    qualifications: [''],
    applicationProcess: [''],
    companyInfo: {
      description: '',
      website: '',
      size: '',
      founded: '',
      techStack: [''],
      culture: ['']
    }
  })

  const steps = [
    { id: 1, title: 'Basic Information', description: 'Job title, company, and location' },
    { id: 2, title: 'Job Details', description: 'Description, requirements, and benefits' },
    { id: 3, title: 'Company Information', description: 'About your company and culture' },
    { id: 4, title: 'Review & Publish', description: 'Review and submit your job posting' }
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.title.trim()) newErrors.title = 'Job title is required'
        if (!formData.company.trim()) newErrors.company = 'Company name is required'
        if (!formData.location.trim()) newErrors.location = 'Location is required'
        break
      case 2:
        if (!formData.description.trim()) newErrors.description = 'Job description is required'
        if (formData.requirements.every(req => !req.trim())) newErrors.requirements = 'At least one requirement is needed'
        if (formData.benefits.every(ben => !ben.trim())) newErrors.benefits = 'At least one benefit is needed'
        break
      case 3:
        if (!formData.companyInfo.description.trim()) newErrors.companyDescription = 'Company description is required'
        if (!formData.companyInfo.website.trim()) newErrors.companyWebsite = 'Company website is required'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleArrayFieldChange = (field: keyof JobFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const addArrayFieldItem = (field: keyof JobFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayFieldItem = (field: keyof JobFormData, index: number) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }))
    }
  }

  const handleCompanyInfoChange = (field: keyof JobFormData['companyInfo'], value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      companyInfo: {
        ...prev.companyInfo,
        [field]: value
      }
    }))
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          router.push('/jobs')
        }, 3000)
      } else {
        const errorData = await response.json()
        console.error('Failed to post job:', errorData.error)
        alert('Failed to post job. Please try again.')
      }
    } catch (error) {
      console.error('Error posting job:', error)
      alert('An error occurred while posting your job. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Posted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your job posting has been submitted and is now live on our platform.
          </p>
          <div className="space-y-3">
            <Link
              href="/jobs"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Jobs
            </Link>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setCurrentStep(1)
                setFormData({
                  title: '',
                  company: '',
                  location: '',
                  type: 'FULL_TIME',
                  salary: '',
                  description: '',
                  requirements: [''],
                  benefits: [''],
                  experience: 'ENTRY',
                  category: 'KUBERNETES',
                  africanCompany: false,
                  remote: false,
                  featured: false,
                  skills: [''],
                  responsibilities: [''],
                  qualifications: [''],
                  applicationProcess: [''],
                  companyInfo: {
                    description: '',
                    website: '',
                    size: '',
                    founded: '',
                    techStack: [''],
                    culture: ['']
                  }
                })
              }}
              className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Post Another Job
            </button>
          </div>
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
            
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Post a Job</h1>
              <p className="text-gray-600">Find the perfect Kubernetes talent for your team</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Job Information</h2>
                <p className="text-gray-600 mb-6">Let's start with the essential details about your job posting.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Senior Kubernetes Engineer"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.title ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="e.g., Flutterwave"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.company ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g., Lagos, Nigeria"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.location ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="FULL_TIME">Full Time</option>
                    <option value="PART_TIME">Part Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="REMOTE">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={formData.salary}
                    onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
                    placeholder="e.g., $80,000 - $120,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ENTRY">Entry Level</option>
                    <option value="MID">Mid Level</option>
                    <option value="SENIOR">Senior Level</option>
                    <option value="LEAD">Lead Level</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="KUBERNETES">Kubernetes</option>
                    <option value="DEVOPS">DevOps</option>
                    <option value="CLOUD">Cloud</option>
                    <option value="BACKEND">Backend</option>
                    <option value="FRONTEND">Frontend</option>
                    <option value="FULLSTACK">Full Stack</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.africanCompany}
                    onChange={(e) => setFormData(prev => ({ ...prev, africanCompany: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">African Company</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.remote}
                    onChange={(e) => setFormData(prev => ({ ...prev, remote: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remote Work Available</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Job</span>
                </label>
              </div>
            </div>
          )}

          {/* Step 2: Job Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h2>
                <p className="text-gray-600 mb-6">Describe the role, requirements, and what you offer.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the role, what the candidate will do, and the impact they'll make..."
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.description ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements *
                </label>
                {formData.requirements.map((req, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleArrayFieldChange('requirements', index, e.target.value)}
                      placeholder="e.g., 5+ years experience with Kubernetes"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayFieldItem('requirements', index)}
                        className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayFieldItem('requirements')}
                  className="inline-flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Requirement
                </button>
                {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Benefits & Perks *
                </label>
                {formData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleArrayFieldChange('benefits', index, e.target.value)}
                      placeholder="e.g., Competitive salary and equity package"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.benefits.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayFieldItem('benefits', index)}
                        className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayFieldItem('benefits')}
                  className="inline-flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Benefit
                </button>
                {errors.benefits && <p className="mt-1 text-sm text-red-600">{errors.benefits}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Skills
                </label>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleArrayFieldChange('skills', index, e.target.value)}
                      placeholder="e.g., Kubernetes, Docker, AWS"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayFieldItem('skills', index)}
                        className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayFieldItem('skills')}
                  className="inline-flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Skill
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Company Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
                <p className="text-gray-600 mb-6">Tell candidates about your company and culture.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.companyInfo.description}
                  onChange={(e) => handleCompanyInfoChange('description', e.target.value)}
                  placeholder="Describe your company, mission, and what makes it special..."
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.companyDescription ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.companyDescription && <p className="mt-1 text-sm text-red-600">{errors.companyDescription}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Website *
                  </label>
                  <input
                    type="url"
                    value={formData.companyInfo.website}
                    onChange={(e) => handleCompanyInfoChange('website', e.target.value)}
                    placeholder="https://yourcompany.com"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.companyWebsite ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.companyWebsite && <p className="mt-1 text-sm text-red-600">{errors.companyWebsite}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <input
                    type="text"
                    value={formData.companyInfo.size}
                    onChange={(e) => handleCompanyInfoChange('size', e.target.value)}
                    placeholder="e.g., 50-100 employees"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Founded Year
                  </label>
                  <input
                    type="text"
                    value={formData.companyInfo.founded}
                    onChange={(e) => handleCompanyInfoChange('founded', e.target.value)}
                    placeholder="e.g., 2016"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tech Stack
                </label>
                {formData.companyInfo.techStack.map((tech, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => {
                        const newTechStack = [...formData.companyInfo.techStack]
                        newTechStack[index] = e.target.value
                        handleCompanyInfoChange('techStack', newTechStack)
                      }}
                      placeholder="e.g., Kubernetes, React, Node.js"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.companyInfo.techStack.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newTechStack = formData.companyInfo.techStack.filter((_, i) => i !== index)
                          handleCompanyInfoChange('techStack', newTechStack)
                        }}
                        className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newTechStack = [...formData.companyInfo.techStack, '']
                    handleCompanyInfoChange('techStack', newTechStack)
                  }}
                  className="inline-flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Technology
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Review & Publish */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Your Job Posting</h2>
                <p className="text-gray-600 mb-6">Please review all details before publishing your job.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{formData.title}</h3>
                    <p className="text-gray-600">{formData.company} • {formData.location}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {formData.type.replace('_', ' ')}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {formData.experience}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        {formData.category}
                      </span>
                    </div>
                  </div>
                  {formData.salary && (
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">{formData.salary}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Job Description</h4>
                  <p className="text-gray-700">{formData.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {formData.requirements.filter(req => req.trim()).map((req, index) => (
                        <li key={index}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {formData.benefits.filter(ben => ben.trim()).map((benefit, index) => (
                        <li key={index}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">About {formData.company}</h4>
                  <p className="text-gray-700">{formData.companyInfo.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center space-x-4">
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Publish Job
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
