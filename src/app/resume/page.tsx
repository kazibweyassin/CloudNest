'use client'

import { useState } from 'react'
import { 
  Download, 
  Eye, 
  Save, 
  Plus, 
  Trash2, 
  Edit, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Globe,
  FileText,
  Upload,
  CheckCircle,
  Star
} from 'lucide-react'

interface ResumeSection {
  id: string
  type: 'personal' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications'
  title: string
  data: any
}

interface ResumeData {
  personal: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    summary: string
    linkedin?: string
    github?: string
    website?: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
    achievements: string[]
  }>
  education: Array<{
    id: string
    institution: string
    degree: string
    field: string
    startDate: string
    endDate: string
    gpa?: string
    achievements: string[]
  }>
  skills: {
    technical: string[]
    soft: string[]
    languages: string[]
    tools: string[]
  }
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string[]
    url?: string
    github?: string
    achievements: string[]
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
    credentialId?: string
    url?: string
  }>
}

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState<'builder' | 'preview'>('builder')
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      linkedin: '',
      github: '',
      website: ''
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
      tools: []
    },
    projects: [],
    certifications: []
  })

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional' },
    { id: 'creative', name: 'Creative', description: 'Bold and innovative' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant' },
    { id: 'technical', name: 'Technical', description: 'Developer-focused' }
  ]

  const kubernetesSkills = [
    'Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP', 'Terraform', 'Helm', 'Prometheus',
    'Grafana', 'Istio', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Python',
    'Go', 'Bash', 'YAML', 'JSON', 'Linux', 'Ubuntu', 'CentOS', 'RHEL'
  ]

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: ['']
    }
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }))
  }

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      achievements: ['']
    }
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }))
  }

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      url: '',
      github: '',
      achievements: ['']
    }
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }))
  }

  const addCertification = () => {
    const newCertification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      url: ''
    }
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }))
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }))
  }

  const updateExperience = (id: string, field: string, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }))
  }

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }))
  }

  const addSkillToCategory = (category: keyof ResumeData['skills'], skill: string) => {
    if (skill && !resumeData.skills[category].includes(skill)) {
      setResumeData(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...prev.skills[category], skill]
        }
      }))
    }
  }

  const removeSkillFromCategory = (category: keyof ResumeData['skills'], skill: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter(s => s !== skill)
      }
    }))
  }

  const generateResume = () => {
    // In a real app, this would generate a PDF
    console.log('Generating resume with data:', resumeData)
    alert('Resume generated! In a real app, this would download a PDF.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
              <p className="text-gray-600 mt-1">Create a professional resume tailored for Kubernetes roles</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('builder')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'builder' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Edit className="h-4 w-4 mr-2 inline" />
                  Builder
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'preview' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Eye className="h-4 w-4 mr-2 inline" />
                  Preview
                </button>
              </div>
              
              <button
                onClick={generateResume}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'builder' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={resumeData.personal.firstName}
                      onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={resumeData.personal.lastName}
                      onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={resumeData.personal.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={resumeData.personal.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="e.g., Lagos, Nigeria"
                      value={resumeData.personal.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={resumeData.personal.linkedin}
                      onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourusername"
                      value={resumeData.personal.github}
                      onChange={(e) => updatePersonalInfo('github', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={resumeData.personal.website}
                      onChange={(e) => updatePersonalInfo('website', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Brief summary of your experience and career goals..."
                    value={resumeData.personal.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Skills
                </h2>
                
                <div className="space-y-6">
                  {/* Technical Skills */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {resumeData.skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkillFromCategory('technical', skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {kubernetesSkills.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => addSkillToCategory('technical', skill)}
                          disabled={resumeData.skills.technical.includes(skill)}
                          className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            resumeData.skills.technical.includes(skill)
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkillFromCategory('soft', skill)}
                            className="ml-2 text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Add soft skill..."
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addSkillToCategory('soft', e.currentTarget.value)
                            e.currentTarget.value = ''
                          }
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Work Experience
                  </h2>
                  <button
                    onClick={addExperience}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </button>
                </div>

                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                            <input
                              type="text"
                              value={exp.position}
                              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                              type="text"
                              value={exp.location}
                              onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                            <div className="flex space-x-2">
                              <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                              <input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                disabled={exp.current}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                              />
                            </div>
                            <label className="flex items-center mt-2">
                              <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                className="mr-2"
                              />
                              <span className="text-sm text-gray-700">Currently working here</span>
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="ml-4 p-2 text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Template Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Template</h3>
                <div className="space-y-3">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedTemplate === template.id
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{template.name}</div>
                      <div className="text-sm text-gray-600">{template.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={addEducation}
                    className="w-full flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Add Education
                  </button>
                  <button
                    onClick={addProject}
                    className="w-full flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Add Project
                  </button>
                  <button
                    onClick={addCertification}
                    className="w-full flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Add Certification
                  </button>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Pro Tips
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Use action verbs to describe your achievements</li>
                  <li>• Quantify your impact with numbers and metrics</li>
                  <li>• Tailor skills to match job requirements</li>
                  <li>• Keep descriptions concise and relevant</li>
                  <li>• Highlight Kubernetes and cloud experience</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Preview Tab */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="max-w-4xl mx-auto">
              {/* Resume Preview */}
              <div className="bg-white border border-gray-300 shadow-lg p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {resumeData.personal.firstName} {resumeData.personal.lastName}
                  </h1>
                  <div className="flex items-center justify-center space-x-4 text-gray-600 mt-2">
                    {resumeData.personal.email && (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        <span>{resumeData.personal.email}</span>
                      </div>
                    )}
                    {resumeData.personal.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>{resumeData.personal.phone}</span>
                      </div>
                    )}
                    {resumeData.personal.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{resumeData.personal.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-blue-600 mt-2">
                    {resumeData.personal.linkedin && (
                      <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    )}
                    {resumeData.personal.github && (
                      <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {resumeData.personal.website && (
                      <a href={resumeData.personal.website} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    )}
                  </div>
                </div>

                {resumeData.personal.summary && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
                    <p className="text-gray-700">{resumeData.personal.summary}</p>
                  </div>
                )}

                {resumeData.skills.technical.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Technical Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {resumeData.experience.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Work Experience</h2>
                    <div className="space-y-4">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                              <p className="text-gray-700">{exp.company}</p>
                            </div>
                            <div className="text-right text-sm text-gray-600">
                              <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                              <p>{exp.location}</p>
                            </div>
                          </div>
                          {exp.description && (
                            <p className="text-gray-700 mt-2">{exp.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
