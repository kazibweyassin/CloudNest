'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Users, Settings, Trophy, Clock, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const stats = [
    {
      icon: BookOpen,
      label: 'Tutorials Completed',
      value: '0',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Trophy,
      label: 'Quiz Score',
      value: '0%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Clock,
      label: 'Learning Hours',
      value: '0',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      label: 'Streak',
      value: '0 days',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const quickActions = [
    {
      title: 'Continue Learning',
      description: 'Pick up where you left off',
      href: '/tutorials',
      icon: BookOpen,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Join Community',
      description: 'Connect with other learners',
      href: '/community',
      icon: Users,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Practice Environment',
      description: 'Try Kubernetes commands',
      href: '/practice',
      icon: Settings,
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {session.user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to continue your Kubernetes learning journey?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Link
                  key={index}
                  href={action.href}
                  className={`${action.color} text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">{action.title}</h3>
                  </div>
                  <p className="text-blue-100">{action.description}</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h3>
            <p className="text-gray-600 mb-4">
              Start your learning journey by completing your first tutorial!
            </p>
            <Link
              href="/tutorials"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>

        {/* Role-specific content */}
        {session.user?.role === 'ADMIN' && (
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Admin Panel</h2>
            <p className="text-red-700 mb-4">
              You have admin access. Manage users, content, and platform settings.
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Go to Admin Panel
            </Link>
          </div>
        )}

        {session.user?.role === 'MENTOR' && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-800 mb-2">Mentor Tools</h2>
            <p className="text-green-700 mb-4">
              Help other students learn Kubernetes. Access mentor resources and tools.
            </p>
            <Link
              href="/mentor"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Mentor Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
