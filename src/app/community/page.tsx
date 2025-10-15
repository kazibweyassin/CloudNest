'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageSquare, Plus, Users, Clock, ThumbsUp, Reply } from 'lucide-react'
import { ForumPost } from '@/types'

export default function CommunityPage() {
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'unanswered'>('recent')

  useEffect(() => {
    // Mock data for now - in real app, fetch from API
    const mockPosts: ForumPost[] = [
      {
        id: '1',
        userId: 'user1',
        title: 'How to deploy a Node.js app on Kubernetes?',
        content: 'I\'m trying to deploy my Node.js application on Kubernetes but I\'m having issues with the container...',
        category: 'Deployment',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        updatedAt: new Date(),
        user: {
          name: 'John Doe',
          email: 'john@example.com'
        },
        replies: [
          {
            id: 'reply1',
            postId: '1',
            userId: 'user2',
            content: 'Make sure your Dockerfile is properly configured...',
            createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
            updatedAt: new Date(),
            user: {
              name: 'Jane Smith',
              email: 'jane@example.com'
            }
          }
        ]
      },
      {
        id: '2',
        userId: 'user3',
        title: 'Best practices for Kubernetes in African startups',
        content: 'What are the best practices for using Kubernetes in African startup environments?',
        category: 'Best Practices',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        updatedAt: new Date(),
        user: {
          name: 'Kwame Asante',
          email: 'kwame@example.com'
        },
        replies: []
      },
      {
        id: '3',
        userId: 'user4',
        title: 'Mobile money API scaling with Kubernetes',
        content: 'Has anyone successfully scaled a mobile money API using Kubernetes? Looking for real-world examples...',
        category: 'Scaling',
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        updatedAt: new Date(),
        user: {
          name: 'Aisha Mohammed',
          email: 'aisha@example.com'
        },
        replies: []
      }
    ]

    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  const getTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'deployment':
        return 'bg-blue-100 text-blue-800'
      case 'best practices':
        return 'bg-green-100 text-green-800'
      case 'scaling':
        return 'bg-purple-100 text-purple-800'
      case 'troubleshooting':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
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
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Community Forum
              </h1>
              <p className="text-gray-600">
                Connect with fellow Kubernetes learners across Africa. Ask questions, share knowledge, and learn together.
              </p>
            </div>
            <Link
              href="/community/new-post"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <ThumbsUp className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Helpful Answers</p>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { key: 'recent', label: 'Recent' },
              { key: 'popular', label: 'Popular' },
              { key: 'unanswered', label: 'Unanswered' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        by {post.user.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link 
                        href={`/community/posts/${post.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{getTimeAgo(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <Reply className="h-4 w-4 mr-1" />
                      <span>{post.replies.length} replies</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Helpful</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600 mb-4">
              Be the first to start a discussion in the community!
            </p>
            <Link
              href="/community/new-post"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create First Post
            </Link>
          </div>
        )}

        {/* Community Guidelines */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            Community Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <h3 className="font-medium mb-2">Be Respectful</h3>
              <p>Treat all community members with respect and kindness.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Share Knowledge</h3>
              <p>Help others learn by sharing your experiences and solutions.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Stay On Topic</h3>
              <p>Keep discussions focused on Kubernetes and cloud-native technologies.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">African Context</h3>
              <p>Share examples and solutions relevant to African tech environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
