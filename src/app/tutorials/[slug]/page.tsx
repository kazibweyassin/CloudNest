'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { BookOpen, Clock, CheckCircle, Play, ArrowLeft, ArrowRight, Code, Terminal, FileText, ChevronRight, ChevronDown, Copy, Check, Star, Users, Globe, Zap, Shield, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { Tutorial, Progress } from '@/types'
import { ALL_TUTORIALS } from '@/data/tutorials'

interface Lesson {
  id: string
  title: string
  content: string
  type: 'text' | 'code' | 'terminal' | 'quiz'
  order: number
  duration: number
  completed?: boolean
  description?: string
}

export default function TutorialPage() {
  const params = useParams()
  const slug = params.slug as string
  const [tutorial, setTutorial] = useState<Tutorial | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [currentLesson, setCurrentLesson] = useState(0)
  const [progress, setProgress] = useState<Progress | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    // Find tutorial from comprehensive data
    const foundTutorial = ALL_TUTORIALS.find(t => t.slug === slug)
    if (foundTutorial) {
      const tutorialData: Tutorial = {
        id: foundTutorial.id,
        title: foundTutorial.title,
        slug: foundTutorial.slug,
        content: foundTutorial.content,
        difficulty: foundTutorial.difficulty,
        order: foundTutorial.order,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      setTutorial(tutorialData)
      setLessons(foundTutorial.lessons || [])
    }
    setLoading(false)
  }, [slug])

  const markLessonComplete = (lessonId: string) => {
    setLessons(prev => prev.map(lesson => 
      lesson.id === lessonId ? { ...lesson, completed: true } : lesson
    ))
  }

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
    }
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <FileText className="h-4 w-4" />
      case 'code':
        return <Code className="h-4 w-4" />
      case 'terminal':
        return <Terminal className="h-4 w-4" />
      case 'quiz':
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'text':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'code':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'terminal':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'quiz':
        return 'bg-orange-50 text-orange-700 border-orange-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutorial Not Found</h1>
          <p className="text-gray-600 mb-4">The tutorial you're looking for doesn't exist.</p>
          <Link
            href="/tutorials"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tutorials
          </Link>
        </div>
      </div>
    )
  }

  const currentLessonData = lessons[currentLesson]
  const completedLessons = lessons.filter(l => l.completed).length
  const progressPercentage = (completedLessons / lessons.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/tutorials"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Tutorials
              </Link>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">{tutorial.title}</h1>
                  <p className="text-sm text-gray-500">
                    {completedLessons} of {lessons.length} lessons completed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{lessons.reduce((total, lesson) => total + lesson.duration, 0)} min</span>
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
              >
                {sidebarOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Lessons</h3>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      currentLesson === index
                        ? 'bg-blue-50 border border-blue-200 shadow-sm'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg mr-3 ${getLessonTypeColor(lesson.type)}`}>
                          {getLessonIcon(lesson.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {lesson.description}
                          </p>
                          <div className="flex items-center mt-2 space-x-2">
                            <span className="text-xs text-gray-400">{lesson.duration} min</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-400">Lesson {index + 1}</span>
                          </div>
                        </div>
                      </div>
                      {lesson.completed && (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Lesson Header */}
              <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLessonTypeColor(currentLessonData?.type || 'text')}`}>
                        {getLessonIcon(currentLessonData?.type || 'text')}
                        <span className="ml-2 capitalize">{currentLessonData?.type} Lesson</span>
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{currentLessonData?.duration} min</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentLessonData?.title}
                    </h2>
                    <p className="text-gray-600">
                      {currentLessonData?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="p-8">
                {currentLessonData?.type === 'text' && (
                  <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {currentLessonData.content}
                    </div>
                  </div>
                )}

                {currentLessonData?.type === 'code' && (
                  <div>
                    <div className="prose prose-lg max-w-none mb-8">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {currentLessonData.content}
                      </div>
                    </div>
                    
                    {/* Interactive Code Blocks */}
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                          <span className="text-sm text-gray-300">Terminal</span>
                          <button
                            onClick={() => copyCode('kubectl cluster-info')}
                            className="flex items-center text-gray-400 hover:text-gray-200"
                          >
                            {copiedCode === 'kubectl cluster-info' ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <div className="p-4 font-mono text-sm">
                          <div className="text-green-400">$ kubectl cluster-info</div>
                          <div className="text-gray-300 mt-2">Kubernetes control plane is running at https://kubernetes.docker.internal:6443</div>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                          <span className="text-sm text-gray-300">Terminal</span>
                          <button
                            onClick={() => copyCode('kubectl get nodes')}
                            className="flex items-center text-gray-400 hover:text-gray-200"
                          >
                            {copiedCode === 'kubectl get nodes' ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <div className="p-4 font-mono text-sm">
                          <div className="text-green-400">$ kubectl get nodes</div>
                          <div className="text-gray-300 mt-2">NAME           STATUS   ROLES           AGE   VERSION</div>
                          <div className="text-gray-300">minikube       Ready    control-plane   5m    v1.28.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentLessonData?.type === 'terminal' && (
                  <div>
                    <div className="prose prose-lg max-w-none mb-8">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {currentLessonData.content}
                      </div>
                    </div>
                    
                    {/* Interactive Terminal */}
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-300">Practice Environment</span>
                      </div>
                      <div className="p-4 font-mono text-sm min-h-[300px]">
                        <div className="text-blue-400 mb-4">Welcome to Kubernetes Practice Environment!</div>
                        <div className="text-gray-300 mb-2">Try these commands:</div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <span className="text-green-400 mr-2">$</span>
                            <span className="text-gray-300">kubectl create -f nginx-pod.yaml</span>
                          </div>
                          <div className="text-gray-500 text-xs ml-4">pod/nginx-pod created</div>
                          
                          <div className="flex items-center mt-4">
                            <span className="text-green-400 mr-2">$</span>
                            <span className="text-gray-300">kubectl get pods</span>
                          </div>
                          <div className="text-gray-300 text-xs ml-4">NAME        READY   STATUS    RESTARTS   AGE</div>
                          <div className="text-gray-300 text-xs ml-4">nginx-pod   1/1     Running   0          30s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentLessonData?.type === 'quiz' && (
                  <div>
                    <div className="prose prose-lg max-w-none mb-8">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {currentLessonData.content}
                      </div>
                    </div>
                  </div>
                )}

                {/* Lesson Actions */}
                <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    {!currentLessonData?.completed && (
                      <button
                        onClick={() => markLessonComplete(currentLessonData?.id || '')}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Mark Complete
                      </button>
                    )}
                    {currentLessonData?.completed && (
                      <span className="inline-flex items-center px-6 py-3 text-sm font-medium text-green-700 bg-green-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Completed
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={prevLesson}
                      disabled={currentLesson === 0}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={nextLesson}
                      disabled={currentLesson === lessons.length - 1}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}