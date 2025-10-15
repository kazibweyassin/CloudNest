import Link from 'next/link'
import { Github, Twitter, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="ml-2 text-xl font-bold">Kubern Platform</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering African students with Kubernetes and cloud-native technologies. 
              Learn, practice, and build the future of technology in Africa.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Made for Africa, by Africans</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-white transition-colors">
                  Practice Environment
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
                  Setup Guides
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-300 hover:text-white transition-colors">
                  African Examples
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/kubern-platform"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/kubernplatform"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@kubernplatform.africa"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              © 2024 Kubern Platform. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
