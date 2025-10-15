# CloudNest - Kubernetes Learning Platform for Africa

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
</div>

## 🌍 Overview

CloudNest is a comprehensive Kubernetes learning platform specifically designed for African students and developers. Built with modern web technologies, it provides interactive tutorials, community forums, job opportunities, and hands-on practice environments optimized for low-bandwidth connections and mobile devices.

## ✨ Features

### 🎓 Learning Platform
- **Interactive Tutorials**: Step-by-step Kubernetes lessons with hands-on practice
- **Progressive Learning**: Beginner to advanced difficulty levels
- **Real-world Examples**: African tech company use cases and scenarios
- **Mobile Money APIs**: Learn to deploy and scale financial services
- **E-commerce Platforms**: Build lightweight solutions for African markets

### 🌐 Community & Support
- **Discussion Forums**: Connect with fellow learners across Africa
- **Mentorship Program**: Get guidance from experienced professionals
- **24/7 Community Support**: Always available help and resources
- **Multi-language Support**: Content in multiple African languages

### 💼 Career Development
- **Job Board**: Find Kubernetes opportunities with African tech companies
- **Resume Builder**: Create professional profiles
- **Application Tracking**: Manage job applications efficiently
- **Career Guidance**: Industry insights and career paths

### 🚀 Technical Features
- **Low Bandwidth Optimized**: Efficient for limited internet connectivity
- **Mobile-First Design**: Learn on any device, anywhere
- **Offline Capabilities**: Continue learning without internet
- **Progressive Web App**: Native app-like experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma** - Database ORM
- **NextAuth.js** - Authentication system
- **PostgreSQL** - Primary database

### Infrastructure
- **Kubernetes** - Container orchestration
- **Helm Charts** - Package management
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

### Database Schema
- **Users & Authentication** - Role-based access control
- **Tutorials & Lessons** - Structured learning content
- **Progress Tracking** - Learning analytics
- **Job Management** - Career opportunities
- **Community Forums** - Discussion platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kazibweyassin/CloudNest.git
   cd CloudNest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/cloudnest"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Build the Docker image
```bash
docker build -t cloudnest .
```

### Run with Docker Compose
```bash
docker-compose up -d
```

## ☸️ Kubernetes Deployment

### Using Helm Charts
```bash
# Install the Helm chart
helm install cloudnest ./helm/kubern-platform

# Upgrade the deployment
helm upgrade cloudnest ./helm/kubern-platform
```

### Direct Kubernetes Deployment
```bash
# Apply the Kubernetes manifests
kubectl apply -f k8s/deployment.yaml

# Check deployment status
kubectl get pods -l app=kubern-platform
```

### Environment Configuration
Create the required secrets and config maps:
```bash
# Create database secret
kubectl create secret generic kubern-platform-secrets \
  --from-literal=database-url="your-database-url" \
  --from-literal=nextauth-secret="your-nextauth-secret"

# Create config map
kubectl create configmap kubern-platform-config \
  --from-literal=nextauth-url="https://your-domain.com"
```

## 📊 Database Management

### Prisma Commands
```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Create and run migrations
npx prisma migrate dev

# Seed the database
npx prisma db seed

# Open Prisma Studio
npx prisma studio
```

### Database Schema Overview
- **Users**: Authentication and user profiles
- **Tutorials**: Learning content structure
- **Lessons**: Individual learning modules
- **Progress**: User learning analytics
- **Jobs**: Career opportunities
- **Applications**: Job application tracking
- **Forum**: Community discussions

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── auth/           # Authentication pages
│   ├── tutorials/      # Learning content
│   └── jobs/           # Job board
├── components/         # Reusable UI components
├── lib/               # Utility functions and configurations
├── types/             # TypeScript type definitions
└── styles/            # Global styles and CSS

helm/                  # Helm charts for Kubernetes deployment
k8s/                   # Kubernetes manifests
prisma/               # Database schema and migrations
scripts/               # Database seeding and utility scripts
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌍 African Context Features

### Mobile Money Integration
- Learn to deploy financial APIs
- Handle high-volume transactions
- Implement security best practices
- Multi-region deployment strategies

### E-commerce Optimization
- Low-bandwidth optimization
- Image compression techniques
- CDN configuration
- Offline-first approaches

### Local Examples
- African tech company case studies
- Regional deployment patterns
- Cost optimization for African markets
- Mobile-first design principles

## 🤝 Contributing

We welcome contributions from the African developer community! Here's how you can help:

### Ways to Contribute
1. **Content Creation**: Add tutorials and lessons
2. **Bug Fixes**: Report and fix issues
3. **Feature Development**: Implement new features
4. **Documentation**: Improve documentation
5. **Translation**: Add content in local languages

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📈 Roadmap

### Phase 1: Core Platform ✅
- [x] User authentication and profiles
- [x] Tutorial system with lessons
- [x] Community forums
- [x] Job board integration

### Phase 2: Enhanced Learning 🚧
- [ ] Interactive coding challenges
- [ ] Video tutorials integration
- [ ] Mobile app development
- [ ] Offline learning capabilities

### Phase 3: Advanced Features 📋
- [ ] AI-powered learning paths
- [ ] Certification programs
- [ ] Enterprise training solutions
- [ ] Multi-language support

### Phase 4: Ecosystem Expansion 🔮
- [ ] Partner integrations
- [ ] Marketplace for courses
- [ ] Mentorship matching
- [ ] Career coaching services

## 🆘 Support

### Getting Help
- **Documentation**: Check our comprehensive docs
- **Community Forum**: Ask questions in the community
- **GitHub Issues**: Report bugs and request features
- **Email**: Contact us at support@cloudnest.africa

### Resources
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [African Tech Community](https://african-tech.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **African Tech Community** - For inspiration and support
- **Kubernetes Community** - For excellent documentation
- **Next.js Team** - For the amazing framework
- **Contributors** - All the developers who make this possible

## 📞 Contact

- **Website**: [https://cloudnest.africa](https://cloudnest.africa)
- **Email**: kazibweusama@gmail.com
- **GitHub**: [@kazibweyassin](https://github.com/kazibweyassin)
- **LinkedIn**: [Kazibwe Yassin](https://linkedin.com/in/kazibweyassin)

---

<div align="center">
  <p><strong>Empowering Africa's Future Through Cloud-Native Education</strong></p>
  <p>Made with ❤️ for African developers</p>
</div>
