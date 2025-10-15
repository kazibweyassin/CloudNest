'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Code, Terminal, Users, Globe, Zap, Shield, Smartphone, ArrowRight, ChevronDown, ChevronRight, ExternalLink, Download, Play, Clock, Star } from 'lucide-react'

export default function DocsPage() {
  const [openSections, setOpenSections] = useState<string[]>(['getting-started'])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      content: {
        overview: `Welcome to the Kubern Platform - Africa's premier Kubernetes learning platform! This comprehensive guide will help you master Kubernetes with real-world examples from African tech companies.

## What You'll Learn

- **Kubernetes Fundamentals**: Core concepts and architecture
- **Real-World Applications**: Mobile money APIs, e-commerce platforms
- **African Context**: Optimized for African markets and challenges
- **Hands-On Practice**: Interactive tutorials and exercises
- **Production Deployment**: From development to production

## Prerequisites

Before starting, you should have:
- Basic understanding of containers and Docker
- Familiarity with command-line interfaces
- Access to a computer with internet connection
- Willingness to learn and experiment!`,
        
        quickStart: `## Quick Start Guide

### 1. Choose Your Learning Path
- **Beginner**: Start with "Introduction to Kubernetes"
- **Intermediate**: Jump to "Services and Networking"
- **Advanced**: Focus on "Mobile Money API Deployment"

### 2. Set Up Your Environment
\`\`\`bash
# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Install Minikube for local practice
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start Minikube
minikube start
\`\`\`

### 3. Start Learning
1. Visit the [Tutorials](/tutorials) page
2. Choose your first tutorial
3. Follow the interactive lessons
4. Practice with the terminal environment
5. Complete quizzes to test your knowledge

### 4. Join the Community
- Ask questions in the [Community Forum](/community)
- Share your projects and experiences
- Help other learners grow`,
        
        learningPaths: `## Learning Paths

### 🚀 Beginner Path (2-3 weeks)
1. **Introduction to Kubernetes** - Core concepts
2. **Deploying Your First Pod** - Hands-on practice
3. **Basic kubectl Commands** - Command-line mastery

### 🎯 Intermediate Path (3-4 weeks)
1. **Services and Networking** - Communication patterns
2. **ConfigMaps and Secrets** - Configuration management
3. **Deployments and Scaling** - Application management

### 🏆 Advanced Path (4-6 weeks)
1. **Mobile Money API Deployment** - Real-world fintech
2. **E-commerce Platform Setup** - Scalable applications
3. **Production Best Practices** - Enterprise deployment`
      }
    },
    {
      id: 'tutorials',
      title: 'Tutorial Guide',
      icon: BookOpen,
      content: {
        overview: `Our tutorials are designed with African developers in mind, featuring real-world examples from companies like Flutterwave, Paystack, and M-Pesa.

## Tutorial Structure

Each tutorial follows this structure:
1. **Theory** - Understanding the concepts
2. **Practice** - Hands-on exercises
3. **Real-World Examples** - African context
4. **Assessment** - Knowledge validation

## Available Tutorials

### 1. Introduction to Kubernetes
**Duration**: 2 hours | **Difficulty**: Beginner
- What is Kubernetes?
- Architecture overview
- First kubectl commands
- Creating your first pod
- Understanding pods quiz

### 2. Deploying Your First Pod
**Duration**: 1.5 hours | **Difficulty**: Beginner
- Pod lifecycle
- Resource management
- Health checks
- Debugging pods

### 3. Services and Networking
**Duration**: 2.5 hours | **Difficulty**: Intermediate
- Service types
- Load balancing
- Network policies
- African fintech networking

### 4. Mobile Money API Deployment
**Duration**: 3 hours | **Difficulty**: Advanced
- Production deployment
- High availability
- Security considerations
- African banking compliance

### 5. ConfigMaps and Secrets
**Duration**: 2 hours | **Difficulty**: Intermediate
- Configuration management
- Secret handling
- Environment variables
- African fintech security

### 6. E-commerce Platform Setup
**Duration**: 3.5 hours | **Difficulty**: Advanced
- Scalable architecture
- Low-bandwidth optimization
- Cost optimization
- African market considerations`,
        
        bestPractices: `## Learning Best Practices

### 📚 Study Tips
- **Take Notes**: Document key concepts and commands
- **Practice Regularly**: Use the terminal environment daily
- **Ask Questions**: Engage with the community forum
- **Build Projects**: Apply knowledge to real projects

### 🎯 African Context Focus
- **Mobile-First**: Optimize for mobile users
- **Low Bandwidth**: Consider slow connections
- **Cost Optimization**: Maximize cloud efficiency
- **Local Compliance**: Understand regional regulations

### 🔧 Technical Tips
- **Version Control**: Use Git for your configurations
- **Documentation**: Document your deployments
- **Testing**: Test in staging before production
- **Monitoring**: Set up proper observability`
      }
    },
    {
      id: 'practice-environment',
      title: 'Practice Environment',
      icon: Terminal,
      content: {
        overview: `Our interactive practice environment lets you experiment with Kubernetes commands safely, without affecting real clusters.

## Features

- **Safe Sandbox**: Practice without consequences
- **Real Commands**: Use actual kubectl commands
- **African Examples**: Pre-configured African scenarios
- **Instant Feedback**: See results immediately

## Getting Started

### 1. Access the Environment
- Go to the [Practice](/practice) page
- Click "Start Terminal"
- Begin experimenting!

### 2. Available Commands
\`\`\`bash
# Basic commands
kubectl cluster-info
kubectl get nodes
kubectl get pods

# African fintech examples
kubectl get pods -l app=mobile-money-api
kubectl describe service ecommerce-frontend
kubectl logs deployment/payment-processor
\`\`\`

### 3. Practice Scenarios

#### Mobile Money API
\`\`\`bash
# Deploy mobile money API
kubectl create -f mobile-money-api.yaml

# Check deployment
kubectl get deployments
kubectl get services

# Monitor logs
kubectl logs -f deployment/mobile-money-api
\`\`\`

#### E-commerce Platform
\`\`\`bash
# Deploy e-commerce components
kubectl create -f ecommerce-frontend.yaml
kubectl create -f ecommerce-backend.yaml
kubectl create -f ecommerce-database.yaml

# Check all components
kubectl get all -l app=ecommerce
\`\`\``,
        
        troubleshooting: `## Troubleshooting

### Common Issues

#### Pod Not Starting
\`\`\`bash
# Check pod status
kubectl get pods
kubectl describe pod <pod-name>

# Check logs
kubectl logs <pod-name>

# Check events
kubectl get events
\`\`\`

#### Service Not Accessible
\`\`\`bash
# Check service
kubectl get services
kubectl describe service <service-name>

# Check endpoints
kubectl get endpoints
\`\`\`

#### Resource Issues
\`\`\`bash
# Check resource usage
kubectl top nodes
kubectl top pods

# Check resource limits
kubectl describe pod <pod-name>
\`\`\`

### Getting Help
- Check the [Community Forum](/community)
- Review the troubleshooting guides
- Ask questions with specific error messages`
      }
    },
    {
      id: 'african-context',
      title: 'African Context',
      icon: Globe,
      content: {
        overview: `Our platform is specifically designed for African developers, featuring real-world examples and considerations unique to African markets.

## African Tech Landscape

### Key Industries
- **Fintech**: Mobile money, digital banking, payments
- **E-commerce**: Online marketplaces, logistics
- **AgriTech**: Agricultural technology solutions
- **EdTech**: Educational technology platforms
- **HealthTech**: Healthcare technology solutions

### Regional Considerations
- **Infrastructure**: Varying internet connectivity
- **Regulations**: Different compliance requirements
- **Languages**: Multiple local languages
- **Currencies**: Diverse currency systems
- **Payment Methods**: Mobile money dominance

## Real-World Examples

### Mobile Money APIs
Companies like M-Pesa, MTN Mobile Money, and Airtel Money use Kubernetes to:
- Process millions of transactions daily
- Scale during peak periods
- Maintain high availability
- Comply with financial regulations

### E-commerce Platforms
African e-commerce companies like Jumia and Konga use Kubernetes for:
- Handling traffic spikes
- Optimizing for mobile users
- Managing multiple currencies
- Reducing infrastructure costs

### Banking Systems
African banks use Kubernetes to:
- Modernize legacy systems
- Improve customer experience
- Enhance security
- Reduce operational costs`,
        
        bestPractices: `## African-Specific Best Practices

### 🌍 Regional Deployment
- **Multi-Region**: Deploy across African regions
- **Edge Computing**: Use edge nodes for better performance
- **CDN**: Implement content delivery networks
- **Local Compliance**: Follow regional regulations

### 💰 Cost Optimization
- **Resource Limits**: Set appropriate resource limits
- **Auto-Scaling**: Implement horizontal pod autoscaling
- **Spot Instances**: Use spot instances for non-critical workloads
- **Reserved Instances**: Reserve instances for predictable workloads

### 📱 Mobile Optimization
- **Responsive Design**: Optimize for mobile devices
- **Image Compression**: Compress images for slow connections
- **Lazy Loading**: Implement lazy loading for better performance
- **Offline Support**: Provide offline functionality

### 🔒 Security Considerations
- **Data Residency**: Keep data within African borders
- **Encryption**: Encrypt data in transit and at rest
- **Access Control**: Implement proper RBAC
- **Compliance**: Follow local data protection laws

### 🌐 Connectivity
- **Low Bandwidth**: Optimize for slow connections
- **Offline Mode**: Provide offline functionality
- **Progressive Loading**: Load content progressively
- **Compression**: Use compression for all content`
      }
    },
    {
      id: 'community',
      title: 'Community & Support',
      icon: Users,
      content: {
        overview: `Join our vibrant community of African developers learning Kubernetes together!

## Community Features

### 🗣️ Discussion Forums
- **General Discussion**: Chat about Kubernetes topics
- **African Context**: Share African-specific experiences
- **Project Showcases**: Show off your Kubernetes projects
- **Job Opportunities**: Find Kubernetes-related jobs

### 🤝 Peer Support
- **Study Groups**: Join or create study groups
- **Mentorship**: Get help from experienced developers
- **Code Reviews**: Get feedback on your configurations
- **Collaboration**: Work on projects together

### 📚 Knowledge Sharing
- **Best Practices**: Share what works in Africa
- **Case Studies**: Document real-world deployments
- **Tutorials**: Create and share tutorials
- **Resources**: Share useful resources and tools

## Getting Involved

### 1. Join Discussions
- Visit the [Community Forum](/community)
- Introduce yourself
- Ask questions
- Share your experiences

### 2. Contribute Content
- Write tutorials
- Share case studies
- Create video content
- Document best practices

### 3. Help Others
- Answer questions
- Review code
- Provide mentorship
- Share resources

### 4. Stay Updated
- Follow community announcements
- Join our newsletter
- Connect on social media
- Attend virtual meetups`,
        
        support: `## Getting Support

### 📞 Support Channels
- **Community Forum**: Primary support channel
- **Email Support**: support@kubern-platform.africa
- **Discord Server**: Real-time chat support
- **Office Hours**: Weekly Q&A sessions

### 🆘 When to Ask for Help
- Stuck on a tutorial
- Configuration not working
- Need clarification on concepts
- Want to discuss African context

### 📝 How to Ask for Help
1. **Be Specific**: Describe your exact issue
2. **Provide Context**: Include relevant details
3. **Share Code**: Include your configurations
4. **Show Effort**: Explain what you've tried

### 🎯 Response Times
- **Community Forum**: Usually within 24 hours
- **Email Support**: Within 48 hours
- **Discord**: Real-time during active hours
- **Office Hours**: Immediate during sessions`
      }
    },
    {
      id: 'resources',
      title: 'Resources & Tools',
      icon: Code,
      content: {
        overview: `Essential resources and tools to help you master Kubernetes in African contexts.

## Essential Tools

### 🛠️ Development Tools
- **kubectl**: Kubernetes command-line tool
- **Minikube**: Local Kubernetes development
- **Docker**: Container platform
- **Helm**: Kubernetes package manager
- **k9s**: Terminal-based Kubernetes UI

### 📚 Learning Resources
- **Official Kubernetes Docs**: Comprehensive documentation
- **Kubernetes by Example**: Practical examples
- **Kubernetes Patterns**: Design patterns
- **African Tech Blogs**: Local insights and experiences

### 🔧 Configuration Tools
- **YAML Validators**: Validate Kubernetes manifests
- **Kustomize**: Configuration management
- **Skaffold**: Development workflow
- **Telepresence**: Local development with remote clusters

## African-Specific Resources

### 🌍 Regional Cloud Providers
- **AWS Africa**: Amazon Web Services in Africa
- **Azure Africa**: Microsoft Azure in Africa
- **Google Cloud Africa**: Google Cloud in Africa
- **Local Providers**: African cloud providers

### 💼 African Tech Companies
- **Flutterwave**: Payment infrastructure
- **Paystack**: Payment processing
- **M-Pesa**: Mobile money
- **Jumia**: E-commerce platform
- **Konga**: E-commerce platform

### 📖 Case Studies
- **Mobile Money Deployment**: Real-world fintech example
- **E-commerce Scaling**: Handling traffic spikes
- **Banking Modernization**: Legacy system migration
- **Startup Scaling**: From MVP to production`,
        
        downloads: `## Downloads & Templates

### 📥 Quick Start Templates
- **Basic Pod Template**: Simple pod configuration
- **Service Template**: Service configuration
- **Deployment Template**: Deployment configuration
- **ConfigMap Template**: Configuration management
- **Secret Template**: Secret management

### 🏗️ African Context Templates
- **Mobile Money API**: Complete fintech deployment
- **E-commerce Platform**: Full e-commerce stack
- **Banking System**: Financial services deployment
- **AgriTech Platform**: Agricultural technology stack

### 📋 Checklists
- **Pre-deployment Checklist**: Before going live
- **Security Checklist**: Security best practices
- **Performance Checklist**: Performance optimization
- **Compliance Checklist**: Regulatory compliance

### 🔧 Scripts
- **Setup Scripts**: Environment setup automation
- **Deployment Scripts**: Automated deployments
- **Monitoring Scripts**: Observability setup
- **Backup Scripts**: Data backup automation`
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Comprehensive Documentation
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn Kubernetes for
              <span className="block text-blue-600">Africa's Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to mastering Kubernetes with real-world examples from African tech companies. 
              From beginner concepts to production deployments.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-gray-600">Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">15h</div>
                <div className="text-sm text-gray-600">Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">African Context</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tutorials"
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Play className="h-4 w-4 mr-2" />
                Start Learning
              </Link>
              <Link
                href="/practice"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Terminal className="h-4 w-4 mr-2" />
                Practice Environment
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Users className="h-4 w-4 mr-2" />
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Documentation</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  const isOpen = openSections.includes(section.id)
                  return (
                    <button
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isOpen ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="h-4 w-4 mr-3" />
                        <span className="font-medium">{section.title}</span>
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        ) : (
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {sections.map((section) => {
              const isOpen = openSections.includes(section.id)
              if (!isOpen) return null

              return (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                  <div className="flex items-center mb-6">
                    <section.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  {section.id === 'getting-started' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Start Guide</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.quickStart}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Paths</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.learningPaths}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'tutorials' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tutorial Overview</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.bestPractices}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'practice-environment' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Environment Overview</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Troubleshooting</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.troubleshooting}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'african-context' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">African Tech Landscape</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.bestPractices}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'community' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Overview</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Support</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.support}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'resources' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources Overview</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.overview}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Downloads & Templates</h3>
                        <div className="prose prose-lg max-w-none">
                          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {section.content.downloads}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Kubernetes Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of African developers already mastering Kubernetes. 
              Start with our interactive tutorials and build the future of African tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tutorials"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Learning Now
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center px-8 py-3 border border-white text-lg font-semibold rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
