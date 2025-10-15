#!/usr/bin/env node

/**
 * Quick Tutorial Lesson Adder
 * 
 * This script adds detailed lessons to existing tutorials.
 * Run this after the dev server is running.
 */

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Sample lesson for Introduction to Kubernetes
const sampleLesson = {
  title: "Advanced Pod Management",
  description: "Learn advanced pod management techniques for African applications",
  content: `# Advanced Pod Management

## Pod Affinity and Anti-Affinity

Control where pods are scheduled using affinity rules.

### Pod Affinity Example
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: mobile-money-api
spec:
  affinity:
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
          - key: app
            operator: In
            values:
            - mobile-money-api
        topologyKey: kubernetes.io/hostname
  containers:
  - name: api
    image: mobile-money-api:latest
\`\`\`

## African Context: Multi-Region Deployment

For African applications, you might want pods to be:
- **Co-located**: For better performance
- **Distributed**: For high availability
- **Isolated**: For security compliance

## Resource Quotas

Limit resource usage per namespace:

\`\`\`yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: african-finance-quota
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
\`\`\`

This ensures fair resource allocation across African teams.`,
  type: "text",
  duration: 25
};

async function addSampleLesson() {
  console.log('🚀 Adding sample lesson to Introduction to Kubernetes...');
  
  try {
    const response = await fetch('http://localhost:3000/api/tutorials/introduction-to-kubernetes/lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sampleLesson),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Successfully added lesson!');
      console.log('Lesson ID:', data.lesson.id);
      console.log('Title:', data.lesson.title);
    } else {
      console.log('❌ Failed to add lesson');
      const error = await response.text();
      console.log('Error:', error);
    }
  } catch (error) {
    console.log('❌ Error:', error.message);
    console.log('Make sure the dev server is running on http://localhost:3000');
  }
}

// Function to add multiple lessons
async function addMultipleLessons() {
  const lessons = [
    {
      title: "Pod Security Context",
      description: "Implement security contexts for African applications",
      content: `# Pod Security Context

## Security Context Example
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-mobile-money-api
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  containers:
  - name: api
    image: mobile-money-api:latest
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop:
        - ALL
\`\`\`

## African Context: Banking Security

For African banking applications, security contexts ensure:
- Non-root execution
- Read-only root filesystem
- Minimal capabilities
- Compliance with financial regulations`,
      type: "code",
      duration: 20
    },
    {
      title: "Pod Disruption Budgets",
      description: "Ensure high availability during updates",
      content: `# Pod Disruption Budgets

## PDB Example
\`\`\`yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: mobile-money-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: mobile-money-api
\`\`\`

## African Context: Financial Services

For African fintech applications, PDBs ensure:
- Minimum availability during updates
- Graceful handling of node maintenance
- Compliance with uptime requirements`,
      type: "text",
      duration: 15
    }
  ];

  console.log('📚 Adding multiple lessons...');
  
  for (const lesson of lessons) {
    try {
      const response = await fetch('http://localhost:3000/api/tutorials/introduction-to-kubernetes/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lesson),
      });

      if (response.ok) {
        console.log(`✅ Added lesson: ${lesson.title}`);
      } else {
        console.log(`❌ Failed to add lesson: ${lesson.title}`);
      }
    } catch (error) {
      console.log(`❌ Error adding lesson ${lesson.title}:`, error.message);
    }
  }
}

// Function to create lessons for other tutorials
async function createLessonsForOtherTutorials() {
  const tutorials = [
    {
      slug: 'deploying-first-pod',
      lessons: [
        {
          title: "Pod Resource Optimization",
          description: "Optimize resources for African applications",
          content: `# Pod Resource Optimization

## Resource Optimization for Africa

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: optimized-ecommerce-pod
spec:
  containers:
  - name: frontend
    image: ecommerce-frontend:latest
    resources:
      requests:
        memory: "64Mi"
        cpu: "50m"
      limits:
        memory: "128Mi"
        cpu: "100m"
    env:
    - name: NODE_ENV
      value: "production"
    - name: OPTIMIZE_FOR_MOBILE
      value: "true"
\`\`\`

## African Context: Mobile Optimization

For African users with limited bandwidth:
- Smaller resource requests
- Mobile-optimized configurations
- Efficient image handling
- Progressive loading`,
          type: "code",
          duration: 25
        }
      ]
    },
    {
      slug: 'services-and-networking',
      lessons: [
        {
          title: "Service Mesh for African Applications",
          description: "Implement service mesh for microservices",
          content: `# Service Mesh for African Applications

## Istio Service Mesh

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: mobile-money-vs
spec:
  hosts:
  - mobile-money-api
  http:
  - match:
    - headers:
        region:
          exact: west-africa
    route:
    - destination:
        host: mobile-money-api
        subset: west-africa
\`\`\`

## African Context: Regional Routing

Service mesh enables:
- Regional traffic routing
- Load balancing across regions
- Circuit breaking for reliability
- Observability across services`,
          type: "terminal",
          duration: 30
        }
      ]
    }
  ];

  for (const tutorial of tutorials) {
    console.log(`\n📖 Adding lessons to ${tutorial.slug}...`);
    
    for (const lesson of tutorial.lessons) {
      try {
        const response = await fetch(`http://localhost:3000/api/tutorials/${tutorial.slug}/lessons`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lesson),
        });

        if (response.ok) {
          console.log(`✅ Added lesson: ${lesson.title}`);
        } else {
          console.log(`❌ Failed to add lesson: ${lesson.title}`);
        }
      } catch (error) {
        console.log(`❌ Error adding lesson ${lesson.title}:`, error.message);
      }
    }
  }
}

// Main execution
async function main() {
  console.log('🚀 Kubern Platform - Tutorial Lesson Creator');
  console.log('===========================================\n');
  
  console.log('📋 Available Commands:');
  console.log('1. Add sample lesson to Introduction to Kubernetes');
  console.log('2. Add multiple lessons to Introduction to Kubernetes');
  console.log('3. Create lessons for other tutorials');
  console.log('4. Run all operations\n');
  
  const args = process.argv.slice(2);
  
  if (args.includes('--all') || args.length === 0) {
    await addSampleLesson();
    await addMultipleLessons();
    await createLessonsForOtherTutorials();
  } else if (args.includes('--sample')) {
    await addSampleLesson();
  } else if (args.includes('--multiple')) {
    await addMultipleLessons();
  } else if (args.includes('--other')) {
    await createLessonsForOtherTutorials();
  } else {
    console.log('Usage:');
    console.log('  node scripts/add-lessons.js --sample    # Add sample lesson');
    console.log('  node scripts/add-lessons.js --multiple  # Add multiple lessons');
    console.log('  node scripts/add-lessons.js --other     # Add lessons to other tutorials');
    console.log('  node scripts/add-lessons.js --all       # Run all operations');
  }
  
  console.log('\n🎉 Tutorial lesson creation complete!');
  console.log('Visit http://localhost:3000/tutorials to see your tutorials!');
}

if (require.main === module) {
  main().catch(console.error);
}
