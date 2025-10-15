'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Plus, Save, X, FileText, Code, Terminal, BookOpen } from 'lucide-react'

interface Lesson {
  id: string
  title: string
  content: string
  type: 'text' | 'code' | 'terminal' | 'quiz'
  order: number
  duration: number
  completed?: boolean
}

export default function AddLessonPage() {
  const params = useParams()
  const slug = params.slug as string
  const [tutorial, setTutorial] = useState<any>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const [newLesson, setNewLesson] = useState({
    title: '',
    content: '',
    type: 'text' as 'text' | 'code' | 'terminal' | 'quiz',
    duration: 10
  })

  useEffect(() => {
    fetchTutorialData()
  }, [slug])

  const fetchTutorialData = async () => {
    try {
      const response = await fetch(`/api/tutorials/${slug}/lessons`)
      if (response.ok) {
        const data = await response.json()
        setTutorial(data.tutorial)
        setLessons(data.lessons)
      }
    } catch (error) {
      console.error('Error fetching tutorial:', error)
    } finally {
      setLoading(false)
    }
  }

  const addLesson = async () => {
    if (!newLesson.title || !newLesson.content) {
      alert('Please fill in all required fields')
      return
    }

    setSaving(true)
    try {
      const response = await fetch(`/api/tutorials/${slug}/lessons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newLesson,
          order: lessons.length + 1
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setLessons([...lessons, data.lesson])
        setNewLesson({
          title: '',
          content: '',
          type: 'text',
          duration: 10
        })
        setShowAddForm(false)
        alert('Lesson added successfully!')
      } else {
        alert('Error adding lesson')
      }
    } catch (error) {
      console.error('Error adding lesson:', error)
      alert('Error adding lesson')
    } finally {
      setSaving(false)
    }
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
        return 'bg-blue-100 text-blue-800'
      case 'code':
        return 'bg-green-100 text-green-800'
      case 'terminal':
        return 'bg-purple-100 text-purple-800'
      case 'quiz':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Manage Lessons: {tutorial?.title}
          </h1>
          <p className="text-gray-600">
            Add and organize lessons for this tutorial
          </p>
        </div>

        {/* Add Lesson Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Lesson
          </button>
        </div>

        {/* Add Lesson Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Lesson</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lesson Title
                </label>
                <input
                  type="text"
                  value={newLesson.title}
                  onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter lesson title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lesson Type
                </label>
                <select
                  value={newLesson.type}
                  onChange={(e) => setNewLesson({ ...newLesson, type: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="text">Text Lesson</option>
                  <option value="code">Code Example</option>
                  <option value="terminal">Terminal Practice</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  value={newLesson.duration}
                  onChange={(e) => setNewLesson({ ...newLesson, duration: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lesson Content (Markdown)
                </label>
                <textarea
                  value={newLesson.content}
                  onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter lesson content in Markdown format..."
                />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={addLesson}
                  disabled={saving}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Lesson'}
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Existing Lessons */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Existing Lessons ({lessons.length})
            </h2>
          </div>

          <div className="p-6">
            {lessons.length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No lessons yet</h3>
                <p className="text-gray-600 mb-4">
                  Add your first lesson to get started with this tutorial.
                </p>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add First Lesson
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg mr-3 ${getLessonTypeColor(lesson.type)}`}>
                          {getLessonIcon(lesson.type)}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {lesson.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLessonTypeColor(lesson.type)}`}>
                              {lesson.type}
                            </span>
                            <span>Order: {lesson.order}</span>
                            <span>{lesson.duration} min</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <div className="line-clamp-2">
                        {lesson.content.substring(0, 200)}...
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
