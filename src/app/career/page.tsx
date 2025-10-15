'use client'

import { useState } from 'react'
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Building, 
  Smartphone,
  Target,
  Award,
  TrendingUp,
  BookOpen,
  Play
} from 'lucide-react'
import Link from 'next/link'

interface CareerPath {
  id: string
  title: string
  description: string
  level: 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD'
  salary: string
  duration: string
  skills: string[]
  requirements: string[]
  nextSteps: string[]
  jobs: number
  icon: any
  color: string
}

export default function CareerPathwaysPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  const careerPaths: CareerPath[] = [
    {
      id: 'kubernetes-engineer',
      title: 'Kubernetes Engineer',
      description: 'Specialize in container orchestration and cloud-native infrastructure',
      level: 'MID',
      salary: '$60,000 - $120,000',
      duration: '6-12 months',
      skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Prometheus', 'Helm'],
      requirements: [
        'Basic Linux knowledge',
        'Understanding of containers',
        'Cloud platform experience',
        'Scripting skills (Bash/Python)'
      ],
      nextSteps: [
        'Complete Kubernetes fundamentals course',
        'Practice with hands-on labs',
        'Get CKA certification',
        'Build portfolio projects',
        'Apply for mid-level positions'
      ],
      jobs: 45,
      icon: Zap,
      color: 'blue'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      description: 'Bridge development and operations with automation and infrastructure',
      level: 'MID',
      salary: '$55,000 - $110,000',
      duration: '8-15 months',
      skills: ['CI/CD', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Git'],
      requirements: [
        'Software development background',
        'Linux system administration',
        'Cloud platform knowledge',
        'Automation mindset'
      ],
      nextSteps: [
        'Learn CI/CD pipeline design',
        'Master Infrastructure as Code',
        'Practice with monitoring tools',
        'Build automation scripts',
        'Contribute to open-source projects'
      ],
      jobs: 38,
      icon: Shield,
      color: 'green'
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Architect',
      description: 'Design and implement scalable cloud solutions for African businesses',
      level: 'SENIOR',
      salary: '$80,000 - $150,000',
      duration: '12-24 months',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Architecture', 'Security'],
      requirements: [
        '5+ years cloud experience',
        'System design knowledge',
        'Security best practices',
        'Leadership skills'
      ],
      nextSteps: [
        'Master cloud architecture patterns',
        'Learn enterprise security',
        'Get cloud architect certification',
        'Lead technical projects',
        'Mentor junior engineers'
      ],
      jobs: 22,
      icon: Globe,
      color: 'purple'
    },
    {
      id: 'site-reliability-engineer',
      title: 'Site Reliability Engineer',
      description: 'Ensure high availability and performance of production systems',
      level: 'SENIOR',
      salary: '$70,000 - $130,000',
      duration: '10-18 months',
      skills: ['Monitoring', 'Kubernetes', 'Incident Response', 'Automation', 'Python', 'Go'],
      requirements: [
        'Strong troubleshooting skills',
        'Production system experience',
        'Programming knowledge',
        'On-call experience'
      ],
      nextSteps: [
        'Master monitoring and alerting',
        'Learn incident response',
        'Practice chaos engineering',
        'Build reliability tools',
        'Lead reliability initiatives'
      ],
      jobs: 28,
      icon: Target,
      color: 'orange'
    },
    {
      id: 'platform-engineer',
      title: 'Platform Engineer',
      description: 'Build and maintain internal platforms for development teams',
      level: 'SENIOR',
      salary: '$75,000 - $140,000',
      duration: '12-20 months',
      skills: ['Kubernetes', 'API Design', 'Developer Experience', 'Automation', 'Go', 'Python'],
      requirements: [
        'Strong engineering background',
        'API design experience',
        'Developer empathy',
        'Platform thinking'
      ],
      nextSteps: [
        'Learn platform design patterns',
        'Master API development',
        'Build developer tools',
        'Focus on user experience',
        'Lead platform initiatives'
      ],
      jobs: 15,
      icon: Building,
      color: 'indigo'
    },
    {
      id: 'cloud-native-developer',
      title: 'Cloud Native Developer',
      description: 'Build applications optimized for cloud-native environments',
      level: 'MID',
      salary: '$50,000 - $95,000',
      duration: '6-12 months',
      skills: ['Microservices', 'Kubernetes', 'Docker', 'API Design', 'Node.js', 'Python'],
      requirements: [
        'Software development experience',
        'Understanding of microservices',
        'Cloud platform knowledge',
        'API development skills'
      ],
      nextSteps: [
        'Learn microservices architecture',
        'Master containerization',
        'Practice with Kubernetes',
        'Build cloud-native apps',
        'Focus on scalability'
      ],
      jobs: 52,
      icon: Smartphone,
      color: 'teal'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'orange':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'indigo':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      case 'teal':
        return 'bg-teal-100 text-teal-800 border-teal-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Career Development
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Kubernetes
              <span className="block text-blue-600">Career Journey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover clear career pathways in Kubernetes and cloud-native technologies. 
              Find your next role and the skills you need to get there.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{careerPaths.length}</div>
                <div className="text-sm text-gray-600">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{careerPaths.reduce((sum, path) => sum + path.jobs, 0)}</div>
                <div className="text-sm text-gray-600">Available Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">6-24</div>
                <div className="text-sm text-gray-600">Months to Master</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">$50k-$150k</div>
                <div className="text-sm text-gray-600">Salary Range</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path) => (
            <div
              key={path.id}
              className={`bg-white rounded-xl shadow-sm border-2 transition-all cursor-pointer ${
                selectedPath === path.id ? 'border-blue-300 shadow-md' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(path.color)}`}>
                    <path.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(path.level)}`}>
                      {path.level} Level
                    </span>
                    <div className="text-sm text-gray-600 mt-1">{path.jobs} jobs</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {path.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {path.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{path.salary}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{path.duration} to master</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 4).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {path.skills.length > 4 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        +{path.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`/tutorials?category=${path.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Link>
                  <Link
                    href={`/jobs?category=${path.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    View Jobs
                  </Link>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedPath === path.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="space-y-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Prerequisites:</h4>
                      <ul className="space-y-2">
                        {path.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Next Steps */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Your Action Plan:</h4>
                      <div className="space-y-2">
                        {path.nextSteps.map((step, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                              {index + 1}
                            </div>
                            <span className="text-sm text-gray-700 pt-0.5">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* All Skills */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Complete Skill Set:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Career Progression Visualization */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Career Progression Path
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Entry Level */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Entry Level</h3>
              <p className="text-sm text-gray-600 mb-2">0-2 years</p>
              <p className="text-xs text-gray-500">$30k - $50k</p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            {/* Mid Level */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Mid Level</h3>
              <p className="text-sm text-gray-600 mb-2">2-5 years</p>
              <p className="text-xs text-gray-500">$50k - $95k</p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            {/* Senior Level */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Senior Level</h3>
              <p className="text-sm text-gray-600 mb-2">5-10 years</p>
              <p className="text-xs text-gray-500">$80k - $130k</p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            {/* Lead Level */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Lead Level</h3>
              <p className="text-sm text-gray-600 mb-2">10+ years</p>
              <p className="text-xs text-gray-500">$120k - $200k+</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose your path and start learning today. Our interactive tutorials will guide you 
            from beginner to expert in Kubernetes and cloud-native technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tutorials" className="inline-flex items-center px-6 py-3 border border-white text-lg font-semibold rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Link>
            <Link href="/jobs" className="inline-flex items-center px-6 py-3 border border-white text-lg font-semibold rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors">
              <Users className="h-5 w-5 mr-2" />
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
