import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Zap, Globe, Shield, Smartphone, Briefcase } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Tutorials',
      description: 'Step-by-step Kubernetes lessons with hands-on practice and real-world examples.'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with fellow learners, ask questions, and share knowledge.'
    },
    {
      icon: Zap,
      title: 'Practice Environment',
      description: 'Safe sandbox environment to experiment with Kubernetes commands.'
    },
    {
      icon: Globe,
      title: 'African Context',
      description: 'Examples tailored for African tech companies and use cases.'
    },
    {
      icon: Shield,
      title: 'Low Bandwidth Optimized',
      description: 'Designed for students with limited internet connectivity.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Learn on any device, anywhere in Africa.'
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Find Kubernetes jobs with African tech companies and advance your career.'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Students Learning' },
    { number: '50+', label: 'Tutorials Available' },
    { number: '15+', label: 'African Countries' },
    { number: '24/7', label: 'Community Support' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Kubernetes for
              <span className="text-blue-600 block">Africa's Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master cloud-native technologies with our comprehensive platform designed specifically 
              for African students. Low-bandwidth optimized, mobile-friendly, and packed with 
              real-world examples from African tech companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/tutorials"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kubern Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for African students with unique challenges and opportunities in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* African Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real African Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn with examples that matter to African businesses and developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mobile Money API Deployment
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to deploy and scale mobile money APIs using Kubernetes, 
                handling millions of transactions across Africa.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• High availability configurations</li>
                <li>• Auto-scaling for peak times</li>
                <li>• Multi-region deployment</li>
                <li>• Security best practices</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Build a lightweight e-commerce platform optimized for African markets 
                with limited bandwidth and varying connectivity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Image optimization strategies</li>
                <li>• CDN configuration</li>
                <li>• Offline-first approaches</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Kubernetes Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of African students already learning cloud-native technologies. 
            Start free, learn at your own pace, and build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/community"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}