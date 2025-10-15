'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, Star, Play, CheckCircle, Lock, Users, Globe } from 'lucide-react'
import { Tutorial } from '@/types'
import { ALL_TUTORIALS } from '@/data/tutorials'

export default function TutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all')

  useEffect(() => {
    // Use comprehensive tutorial data with African context
    const tutorialData: Tutorial[] = ALL_TUTORIALS.map(tutorial => ({
      id: tutorial.id,
      title: tutorial.title,
      slug: tutorial.slug,
      content: tutorial.content,
      difficulty: tutorial.difficulty,
      order: tutorial.order,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    setTimeout(() => {
      setTutorials(tutorialData)
      setLoading(false)
    }, 500)
  }, [])

  const filteredTutorials = tutorials.filter(tutorial => 
    filter === 'all' || tutorial.difficulty.toLowerCase() === filter
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER':
        return 'bg-green-100 text-green-800'
      case 'INTERMEDIATE':
        return 'bg-yellow-100 text-yellow-800'
      case 'ADVANCED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER':
        return '🟢'
      case 'INTERMEDIATE':
        return '🟡'
      case 'ADVANCED':
        return '🔴'
      default:
        return '⚪'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            Interactive Learning Platform
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master Kubernetes for
            <span className="block text-blue-600">Africa's Tech Future</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn Kubernetes with hands-on tutorials designed specifically for African developers. 
            Build real-world applications with examples from mobile money APIs, e-commerce platforms, and more.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60+</div>
              <div className="text-gray-600">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15h</div>
              <div className="text-gray-600">Total Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">African Context</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { key: 'all', label: 'All Tutorials', icon: BookOpen },
              { key: 'beginner', label: 'Beginner', icon: Star },
              { key: 'intermediate', label: 'Intermediate', icon: Users },
              { key: 'advanced', label: 'Advanced', icon: Globe }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === tab.key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <div key={tutorial.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tutorial.difficulty)}`}>
                        <span className="mr-1">{getDifficultyIcon(tutorial.difficulty)}</span>
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    #{tutorial.order}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {tutorial.content}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">~15 min</span>
                  </div>
                  
                  <div className="flex items-center">
                    {index < 2 ? (
                      <Link
                        href={`/tutorials/${tutorial.slug}`}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Learning
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-semibold rounded-lg text-gray-400 bg-gray-100 cursor-not-allowed"
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="h-1 bg-gray-100">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tutorials found</h3>
            <p className="text-gray-600">
              Try adjusting your filter or check back later for new content.
            </p>
          </div>
        )}

        {/* Learning Path */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Recommended Learning Path
          </h2>
          <p className="text-gray-600 mb-6">
            Follow our structured learning path designed for African developers. 
            Start with basics and progress to advanced topics.
          </p>
          <div className="flex flex-wrap gap-2">
            {tutorials.slice(0, 4).map((tutorial, index) => (
              <div
                key={tutorial.id}
                className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm"
              >
                <span className="text-sm font-medium text-gray-900 mr-2">
                  {index + 1}.
                </span>
                <span className="text-sm text-gray-700">{tutorial.title}</span>
                {index < 2 && (
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
