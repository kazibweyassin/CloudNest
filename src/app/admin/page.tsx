'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Users, BookOpen, MessageSquare, BarChart3, Settings, Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTutorials: 0,
    totalPosts: 0,
    activeUsers: 0
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    } else if (session?.user?.role !== 'ADMIN') {
      router.push('/dashboard')
    }
  }, [status, session, router])

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setStats({
      totalUsers: 127,
      totalTutorials: 6,
      totalPosts: 23,
      activeUsers: 45
    })
  }, [])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null
  }

  const adminStats = [
    {
      icon: Users,
      label: 'Total Users',
      value: stats.totalUsers,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: BookOpen,
      label: 'Tutorials',
      value: stats.totalTutorials,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: MessageSquare,
      label: 'Forum Posts',
      value: stats.totalPosts,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: BarChart3,
      label: 'Active Users',
      value: stats.activeUsers,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const adminActions = [
    {
      title: 'Manage Users',
      description: 'View, edit, and manage user accounts',
      href: '/admin/users',
      icon: Users,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Content Management',
      description: 'Create and edit tutorials and lessons',
      href: '/admin/content',
      icon: BookOpen,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Forum Moderation',
      description: 'Moderate community discussions',
      href: '/admin/forum',
      icon: MessageSquare,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Analytics',
      description: 'View platform analytics and reports',
      href: '/admin/analytics',
      icon: BarChart3,
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      title: 'System Settings',
      description: 'Configure platform settings',
      href: '/admin/settings',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage users, content, and platform settings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminActions.map((action, index) => {
              const Icon = action.icon
              return (
                <a
                  key={index}
                  href={action.href}
                  className={`${action.color} text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">{action.title}</h3>
                  </div>
                  <p className="text-blue-100">{action.description}</p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Users</h3>
              <a href="/admin/users" className="text-blue-600 hover:text-blue-700 text-sm">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {[
                { name: 'John Doe', email: 'john@example.com', role: 'Student', joined: '2 hours ago' },
                { name: 'Jane Smith', email: 'jane@example.com', role: 'Mentor', joined: '4 hours ago' },
                { name: 'Kwame Asante', email: 'kwame@example.com', role: 'Student', joined: '6 hours ago' }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {user.role}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Forum Posts</h3>
              <a href="/admin/forum" className="text-blue-600 hover:text-blue-700 text-sm">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {[
                { title: 'How to deploy Node.js app?', author: 'John Doe', category: 'Deployment', time: '1 hour ago' },
                { title: 'Best practices for African startups', author: 'Jane Smith', category: 'Best Practices', time: '3 hours ago' },
                { title: 'Mobile money API scaling', author: 'Kwame Asante', category: 'Scaling', time: '5 hours ago' }
              ].map((post, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{post.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>by {post.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-gray-200 rounded text-xs">{post.category}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">Database: Online</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">API: Healthy</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">CDN: Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
