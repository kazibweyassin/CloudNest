// Mock API service for CRUD operations
// This simulates database operations without requiring a real database

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE'
  salary?: string
  description: string
  requirements: string[]
  benefits: string[]
  postedAt: string
  experience: 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD'
  category: 'KUBERNETES' | 'DEVOPS' | 'CLOUD' | 'BACKEND' | 'FRONTEND' | 'FULLSTACK'
  companyLogo?: string
  featured: boolean
  africanCompany: boolean
  remote: boolean
  fullDescription?: string
  companyInfo?: {
    description: string
    website: string
    size: string
    founded: string
    techStack: string[]
    culture: string[]
  }
  skills: string[]
  responsibilities: string[]
  qualifications: string[]
  applicationProcess: string[]
}

interface JobApplication {
  id: string
  jobId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  location: string
  experience: string
  coverLetter: string
  resumeUrl?: string
  portfolioUrl?: string
  status: 'SUBMITTED' | 'REVIEWED' | 'INTERVIEW_SCHEDULED' | 'INTERVIEWED' | 'REJECTED' | 'ACCEPTED'
  createdAt: string
}

// Mock data storage (in real app, this would be a database)
let jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Kubernetes Engineer',
    company: 'Flutterwave',
    location: 'Lagos, Nigeria',
    type: 'FULL_TIME',
    salary: '$80,000 - $120,000',
    description: 'Join Flutterwave\'s platform team to build and scale our Kubernetes infrastructure supporting millions of transactions across Africa.',
    fullDescription: `# Senior Kubernetes Engineer - Flutterwave

## About the Role

Flutterwave is looking for a Senior Kubernetes Engineer to join our platform team. You'll be responsible for designing, implementing, and maintaining our Kubernetes infrastructure that powers millions of transactions across Africa.

## What You'll Do

- Design and implement scalable Kubernetes clusters for our payment infrastructure
- Automate deployment processes using GitOps and CI/CD pipelines
- Monitor and optimize cluster performance and resource utilization
- Implement security best practices and compliance requirements
- Mentor junior engineers and contribute to technical documentation
- Collaborate with product teams to ensure reliable service delivery

## Impact You'll Make

Your work will directly impact millions of users across Africa, enabling seamless payment experiences and supporting the growth of African businesses. You'll be part of a team that's building the financial infrastructure for the continent.

## Growth Opportunities

- Lead technical initiatives and architectural decisions
- Contribute to open-source projects and industry conferences
- Develop expertise in cloud-native technologies
- Build a strong network in the African tech ecosystem`,
    requirements: [
      '5+ years experience with Kubernetes in production environments',
      'Strong knowledge of container orchestration and microservices',
      'Experience with AWS, GCP, or Azure cloud platforms',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of monitoring and observability tools (Prometheus, Grafana)',
      'Experience with CI/CD pipelines and GitOps workflows',
      'Strong problem-solving and debugging skills',
      'Excellent communication and collaboration abilities'
    ],
    responsibilities: [
      'Design and implement Kubernetes clusters for production workloads',
      'Automate deployment and scaling processes',
      'Monitor cluster health and performance metrics',
      'Implement security policies and compliance measures',
      'Troubleshoot and resolve infrastructure issues',
      'Collaborate with development teams on application deployment',
      'Document infrastructure processes and best practices',
      'Mentor junior team members'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      'Kubernetes certification (CKA, CKAD, or CKS) preferred',
      'Experience with payment systems or fintech preferred',
      'Knowledge of African regulatory requirements a plus',
      'Strong understanding of networking and security concepts',
      'Experience with service mesh technologies (Istio, Linkerd)',
      'Proficiency in scripting languages (Python, Bash)',
      'Experience with database technologies (PostgreSQL, Redis)'
    ],
    skills: [
      'Kubernetes',
      'Docker',
      'AWS',
      'Terraform',
      'Prometheus',
      'Grafana',
      'GitOps',
      'CI/CD',
      'Microservices',
      'Python',
      'Bash',
      'PostgreSQL',
      'Redis',
      'Istio',
      'Helm'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health insurance',
      '$2,000 annual learning and development budget',
      'Flexible working hours and remote work options',
      'Top-tier equipment and tools',
      'Team building events and company retreats',
      'Mentorship and career development programs',
      'Opportunity to work with cutting-edge technologies'
    ],
    applicationProcess: [
      'Submit your application with resume and cover letter',
      'Initial phone screening with HR team',
      'Technical interview with engineering team',
      'System design and architecture discussion',
      'Final interview with engineering leadership',
      'Reference checks and background verification',
      'Job offer and onboarding process'
    ],
    postedAt: '2 days ago',
    experience: 'SENIOR',
    category: 'KUBERNETES',
    featured: true,
    africanCompany: true,
    remote: true,
    companyInfo: {
      description: 'Flutterwave is Africa\'s leading payments technology company, enabling businesses across the continent to accept payments from anywhere in the world. We process millions of transactions and serve thousands of businesses.',
      website: 'https://flutterwave.com',
      size: '500-1000 employees',
      founded: '2016',
      techStack: ['Kubernetes', 'AWS', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker'],
      culture: ['Innovation', 'Collaboration', 'Growth', 'Impact', 'Diversity', 'Excellence']
    }
  },
  {
    id: '2',
    title: 'DevOps Engineer - Kubernetes Specialist',
    company: 'Paystack',
    location: 'Lagos, Nigeria',
    type: 'FULL_TIME',
    salary: '$60,000 - $90,000',
    description: 'Help Paystack scale their payment infrastructure using Kubernetes and modern DevOps practices.',
    requirements: [
      '3+ years DevOps experience',
      'Kubernetes certification preferred',
      'Experience with Terraform',
      'Knowledge of monitoring tools (Prometheus, Grafana)',
      'Strong scripting skills (Python/Bash)'
    ],
    benefits: [
      'Stock options',
      'Comprehensive health coverage',
      'Professional development',
      'Team building events',
      'Mentorship opportunities'
    ],
    postedAt: '1 week ago',
    experience: 'MID',
    category: 'DEVOPS',
    featured: true,
    africanCompany: true,
    remote: false,
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Prometheus', 'Grafana', 'Python', 'Bash'],
    responsibilities: ['Manage Kubernetes clusters', 'Automate deployments', 'Monitor system performance'],
    qualifications: ['Bachelor\'s degree', 'DevOps certification', 'Cloud experience'],
    applicationProcess: ['Apply online', 'Technical interview', 'Final interview']
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Engineer',
    company: 'Jumia',
    location: 'Cairo, Egypt',
    type: 'FULL_TIME',
    salary: '$50,000 - $80,000',
    description: 'Design and implement cloud infrastructure solutions for Jumia\'s e-commerce platform across Africa.',
    requirements: [
      '4+ years cloud experience',
      'Kubernetes and Docker expertise',
      'AWS/Azure certifications',
      'Infrastructure as Code (Terraform)',
      'Experience with large-scale systems'
    ],
    benefits: [
      'Performance bonuses',
      'Health and dental insurance',
      'Transportation allowance',
      'Annual leave',
      'Training programs'
    ],
    postedAt: '3 days ago',
    experience: 'MID',
    category: 'CLOUD',
    featured: false,
    africanCompany: true,
    remote: true,
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Python'],
    responsibilities: ['Design cloud architecture', 'Implement infrastructure', 'Monitor performance'],
    qualifications: ['Cloud certifications', 'Large-scale experience', 'Infrastructure knowledge'],
    applicationProcess: ['Online application', 'Technical assessment', 'Interview process']
  }
]

let applications: JobApplication[] = []

// Mock API functions
export const mockJobAPI = {
  // GET /api/jobs
  getJobs: async (filters: any = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay
    
    let filteredJobs = [...jobs]
    
    if (filters.type && filters.type !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.type === filters.type)
    }
    
    if (filters.experience && filters.experience !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.experience === filters.experience)
    }
    
    if (filters.category && filters.category !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.category === filters.category)
    }
    
    if (filters.africanOnly) {
      filteredJobs = filteredJobs.filter(job => job.africanCompany)
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm)
      )
    }
    
    return {
      jobs: filteredJobs,
      pagination: {
        page: 1,
        limit: 10,
        total: filteredJobs.length,
        pages: Math.ceil(filteredJobs.length / 10)
      }
    }
  },

  // GET /api/jobs/[id]
  getJob: async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const job = jobs.find(j => j.id === id)
    if (!job) {
      throw new Error('Job not found')
    }
    
    const similarJobs = jobs.filter(j => j.category === job.category && j.id !== job.id).slice(0, 3)
    
    return { job, similarJobs }
  },

  // POST /api/jobs
  createJob: async (jobData: Partial<Job>) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newJob: Job = {
      id: Date.now().toString(),
      title: jobData.title || '',
      company: jobData.company || '',
      location: jobData.location || '',
      type: jobData.type || 'FULL_TIME',
      salary: jobData.salary,
      description: jobData.description || '',
      requirements: jobData.requirements || [],
      benefits: jobData.benefits || [],
      postedAt: 'Just now',
      experience: jobData.experience || 'ENTRY',
      category: jobData.category || 'KUBERNETES',
      featured: jobData.featured || false,
      africanCompany: jobData.africanCompany || false,
      remote: jobData.remote || false,
      skills: jobData.skills || [],
      responsibilities: jobData.responsibilities || [],
      qualifications: jobData.qualifications || [],
      applicationProcess: jobData.applicationProcess || [],
      companyInfo: jobData.companyInfo
    }
    
    jobs.push(newJob)
    return newJob
  },

  // PUT /api/jobs/[id]
  updateJob: async (id: string, jobData: Partial<Job>) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const jobIndex = jobs.findIndex(j => j.id === id)
    if (jobIndex === -1) {
      throw new Error('Job not found')
    }
    
    jobs[jobIndex] = { ...jobs[jobIndex], ...jobData }
    return jobs[jobIndex]
  },

  // DELETE /api/jobs/[id]
  deleteJob: async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const jobIndex = jobs.findIndex(j => j.id === id)
    if (jobIndex === -1) {
      throw new Error('Job not found')
    }
    
    jobs.splice(jobIndex, 1)
    return { message: 'Job deleted successfully' }
  },

  // POST /api/jobs/[id]/apply
  applyToJob: async (jobId: string, applicationData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const job = jobs.find(j => j.id === jobId)
    if (!job) {
      throw new Error('Job not found')
    }
    
    const newApplication: JobApplication = {
      id: Date.now().toString(),
      jobId,
      firstName: applicationData.firstName,
      lastName: applicationData.lastName,
      email: applicationData.email,
      phone: applicationData.phone,
      location: applicationData.location,
      experience: applicationData.experience,
      coverLetter: applicationData.coverLetter,
      resumeUrl: applicationData.resumeUrl,
      portfolioUrl: applicationData.portfolioUrl,
      status: 'SUBMITTED',
      createdAt: new Date().toISOString()
    }
    
    applications.push(newApplication)
    return newApplication
  },

  // GET /api/applications
  getApplications: async (filters: any = {}) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let filteredApplications = [...applications]
    
    if (filters.status && filters.status !== 'all') {
      filteredApplications = filteredApplications.filter(app => app.status === filters.status)
    }
    
    return filteredApplications.map(app => {
      const job = jobs.find(j => j.id === app.jobId)
      return { ...app, job }
    })
  }
}

export default mockJobAPI
