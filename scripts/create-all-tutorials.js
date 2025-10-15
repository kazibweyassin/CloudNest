#!/usr/bin/env node

/**
 * Complete Tutorial Creation Script
 * 
 * This script creates all tutorials with comprehensive African context content.
 * Run this to populate the platform with detailed learning content.
 */

const tutorials = [
  {
    slug: 'introduction-to-kubernetes',
    title: 'Introduction to Kubernetes',
    difficulty: 'BEGINNER',
    lessons: [
      {
        title: 'What is Kubernetes?',
        description: 'Understanding the fundamentals of container orchestration',
        content: `# What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

## Why Kubernetes Matters for Africa

In Africa's rapidly growing tech ecosystem, Kubernetes provides:

- **Scalability**: Handle traffic spikes during mobile money transactions
- **Reliability**: Ensure 99.9% uptime for critical financial services
- **Cost Efficiency**: Optimize cloud spending for African startups
- **Global Reach**: Deploy applications across multiple African regions

## Key Concepts

### Containers
Containers package applications and their dependencies into lightweight, portable units that run consistently across different environments.

### Pods
A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage and network resources.

### Nodes
Nodes are worker machines that run your applications. They can be physical or virtual machines.

## Real-World Example: Mobile Money API

Imagine deploying a mobile money API that needs to:
- Handle millions of transactions daily
- Scale automatically during peak hours
- Maintain high availability across Africa
- Optimize costs for different regions

Kubernetes makes this possible with features like auto-scaling, load balancing, and multi-region deployment.

## African Tech Context

Companies like Flutterwave, Paystack, and M-Pesa use Kubernetes to:
- Process millions of transactions
- Scale during peak periods
- Maintain compliance across regions
- Reduce infrastructure costs`,
        type: 'text',
        duration: 15
      },
      {
        title: 'Kubernetes Architecture',
        description: 'Understanding the master-worker architecture and key components',
        content: `# Kubernetes Architecture

Kubernetes follows a master-worker architecture designed for high availability and scalability.

## Control Plane Components

### API Server
The API server is the front-end for the Kubernetes control plane. It exposes the Kubernetes API and handles all API requests.

### etcd
etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.

### Scheduler
The scheduler watches for newly created Pods with no assigned node and selects a node for them to run on.

### Controller Manager
Runs controller processes that regulate the state of the cluster.

## Node Components

### kubelet
An agent that runs on each node and ensures containers are running in a Pod.

### kube-proxy
Maintains network rules on nodes and handles network communication.

### Container Runtime
The software responsible for running containers (e.g., Docker, containerd).

## African Context: Multi-Region Deployment

For African applications, you might deploy:
- **Control Plane**: In a major city like Lagos or Nairobi
- **Worker Nodes**: Distributed across multiple African regions
- **Load Balancers**: Route traffic to the nearest region

## Real-World Example: African Banking

A Nigerian bank might deploy:
- **Primary Cluster**: Lagos (main operations)
- **DR Cluster**: Abuja (disaster recovery)
- **Edge Nodes**: Port Harcourt, Kano (local services)

This ensures low latency and high availability across Nigeria.`,
        type: 'text',
        duration: 20
      },
      {
        title: 'Your First kubectl Commands',
        description: 'Learn essential kubectl commands for cluster management',
        content: `# Your First kubectl Commands

kubectl is the command-line tool for interacting with Kubernetes clusters. Let's start with the essentials.

## Essential Commands

### Check Cluster Status
\`\`\`bash
kubectl cluster-info
\`\`\`

### List All Nodes
\`\`\`bash
kubectl get nodes
\`\`\`

### Get All Resources
\`\`\`bash
kubectl get all
\`\`\`

### Get Detailed Information
\`\`\`bash
kubectl describe node <node-name>
\`\`\`

## Practice Exercise

Try these commands in the practice environment below. Notice how kubectl provides different levels of detail for different resources.

## Pro Tips for African Developers

- Use \`kubectl get pods -o wide\` to see which nodes your pods are running on
- Monitor resource usage with \`kubectl top nodes\` and \`kubectl top pods\`
- Use \`kubectl logs\` to debug application issues
- Set up \`kubectl autocomplete\` for faster command entry

## African Context: Monitoring Commands

For African fintech applications, you'll often use:
\`\`\`bash
# Monitor pod health
kubectl get pods -w

# Check resource usage
kubectl top pods --sort-by=memory

# View logs for debugging
kubectl logs -f deployment/mobile-money-api

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
\`\`\``,
        type: 'code',
        duration: 25
      },
      {
        title: 'Creating Your First Pod',
        description: 'Hands-on practice with pod creation and management',
        content: `# Creating Your First Pod

Let's create a simple nginx pod and learn how to manage it.

## Pod Definition

Create a file called \`nginx-pod.yaml\`:

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    region: africa
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
\`\`\`

## Commands to Practice

\`\`\`bash
# Create the pod
kubectl create -f nginx-pod.yaml

# Check pod status
kubectl get pods

# Get detailed pod information
kubectl describe pod nginx-pod

# View pod logs
kubectl logs nginx-pod

# Delete the pod
kubectl delete pod nginx-pod
\`\`\`

## African Context: Resource Optimization

Notice the resource requests and limits. For African deployments:
- **Requests**: Minimum resources needed
- **Limits**: Maximum resources allowed
- **CPU**: Measured in millicores (1000m = 1 CPU)
- **Memory**: Measured in Mi (MiB) or Gi (GiB)

This helps optimize costs while ensuring performance.

## Real-World Example: African E-commerce

An African e-commerce platform might use:
\`\`\`yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "200m"
\`\`\`

This ensures the application can handle traffic spikes while staying within budget.`,
        type: 'terminal',
        duration: 30
      },
      {
        title: 'Understanding Pods Quiz',
        description: 'Test your knowledge about Kubernetes Pods',
        content: `# Understanding Pods Quiz

Test your knowledge about Kubernetes Pods with these questions.

## Question 1
What is the smallest deployable unit in Kubernetes?

**A)** Container  
**B)** Pod  
**C)** Node  
**D)** Service

<details>
<summary>Click to see answer</summary>

**Answer: B) Pod**

A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage and network resources.

</details>

## Question 2
Can a Pod contain multiple containers?

**A)** Yes, always  
**B)** No, never  
**C)** Yes, but they must share resources  
**D)** Only in special cases

<details>
<summary>Click to see answer</summary>

**Answer: C) Yes, but they must share resources**

Pods can contain multiple containers, but they share the same network namespace, storage volumes, and IP address.

</details>

## Question 3
What happens when a Pod is deleted?

**A)** It's moved to another node  
**B)** It's recreated automatically  
**C)** It's permanently removed  
**D)** It goes into a paused state

<details>
<summary>Click to see answer</summary>

**Answer: C) It's permanently removed**

When a Pod is deleted, it's permanently removed from the cluster. If you need persistence, use Deployments or StatefulSets.

</details>

## Question 4
Which command shows detailed Pod information?

**A)** \`kubectl get pods\`  
**B)** \`kubectl describe pod <name>\`  
**C)** \`kubectl logs <name>\`  
**D)** \`kubectl exec <name>\`

<details>
<summary>Click to see answer</summary>

**Answer: B) \`kubectl describe pod <name>\`**

\`kubectl describe\` provides detailed information about a specific resource, including events, conditions, and configuration.

</details>

## African Context Question
Why might an African fintech company use resource limits on Pods?

**A)** To increase performance  
**B)** To reduce costs and ensure fair resource allocation  
**C)** To make debugging easier  
**D)** To improve security

<details>
<summary>Click to see answer</summary>

**Answer: B) To reduce costs and ensure fair resource allocation**

Resource limits help African companies optimize cloud costs while ensuring all applications get fair access to resources.

</details>`,
        type: 'quiz',
        duration: 15
      }
    ]
  },
  {
    slug: 'deploying-first-pod',
    title: 'Deploying Your First Pod',
    difficulty: 'BEGINNER',
    lessons: [
      {
        title: 'Pod Lifecycle',
        description: 'Understanding how pods are created, managed, and terminated',
        content: `# Pod Lifecycle

Understanding the pod lifecycle is crucial for managing applications in Kubernetes.

## Pod States

### Pending
The pod has been accepted by the Kubernetes system, but one or more of the containers has not been created.

### Running
The pod has been bound to a node, and all containers have been created.

### Succeeded
All containers in the pod have terminated in success.

### Failed
All containers in the pod have terminated, and at least one container has terminated in failure.

### Unknown
The state of the pod could not be obtained.

## African Context: Mobile Money Pod

Consider a mobile money API pod:
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: mobile-money-api
  labels:
    app: mobile-money
    region: west-africa
spec:
  containers:
  - name: api
    image: mobile-money-api:v1.0
    ports:
    - containerPort: 8080
    env:
    - name: REGION
      value: "west-africa"
    - name: CURRENCY
      value: "NGN"
\`\`\`

This pod handles mobile money transactions across West Africa.`,
        type: 'text',
        duration: 20
      },
      {
        title: 'Resource Management',
        description: 'Learn to manage CPU and memory resources for African applications',
        content: `# Resource Management

Proper resource management is crucial for cost-effective deployments in Africa.

## Resource Requests and Limits

### Requests
Minimum resources guaranteed to the container.

### Limits
Maximum resources the container can use.

## African Context: Cost Optimization

For African startups, resource management is critical:

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: ecommerce-frontend
spec:
  containers:
  - name: frontend
    image: ecommerce-frontend:latest
    resources:
      requests:
        memory: "128Mi"
        cpu: "100m"
      limits:
        memory: "256Mi"
        cpu: "200m"
\`\`\`

## Best Practices for Africa

1. **Start Small**: Begin with minimal resources
2. **Monitor Usage**: Use \`kubectl top\` to monitor
3. **Scale Gradually**: Increase resources as needed
4. **Use Spot Instances**: For non-critical workloads`,
        type: 'code',
        duration: 25
      },
      {
        title: 'Health Checks',
        description: 'Implement health checks for reliable African applications',
        content: `# Health Checks

Health checks ensure your applications are running correctly and can handle traffic.

## Types of Health Checks

### Liveness Probe
Determines if a container is running.

### Readiness Probe
Determines if a container is ready to accept traffic.

## African Context: Mobile Money Health Checks

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: mobile-money-api
spec:
  containers:
  - name: api
    image: mobile-money-api:latest
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
\`\`\`

## Practice Exercise

Try implementing health checks for your pods in the practice environment.`,
        type: 'terminal',
        duration: 30
      },
      {
        title: 'Pod Debugging',
        description: 'Learn to debug pod issues in African deployments',
        content: `# Pod Debugging

Debugging is essential for maintaining reliable applications in Africa.

## Common Debugging Commands

\`\`\`bash
# Check pod status
kubectl get pods

# Get detailed pod information
kubectl describe pod <pod-name>

# View pod logs
kubectl logs <pod-name>

# Execute commands in pod
kubectl exec -it <pod-name> -- /bin/bash

# Check events
kubectl get events
\`\`\`

## African Context: Debugging Mobile Money Issues

When debugging mobile money API issues:

1. **Check Logs**: Look for transaction errors
2. **Monitor Resources**: Ensure sufficient CPU/memory
3. **Verify Network**: Check connectivity to payment gateways
4. **Review Events**: Look for scheduling issues

## Practice Exercise

Use the practice environment to debug common pod issues.`,
        type: 'quiz',
        duration: 20
      }
    ]
  },
  {
    slug: 'services-and-networking',
    title: 'Services and Networking',
    difficulty: 'INTERMEDIATE',
    lessons: [
      {
        title: 'Service Types',
        description: 'Understanding different Kubernetes service types for African applications',
        content: `# Service Types

Kubernetes services provide stable network access to your applications.

## Service Types

### ClusterIP
Exposes the service on a cluster-internal IP.

### NodePort
Exposes the service on each node's IP at a static port.

### LoadBalancer
Exposes the service externally using a cloud provider's load balancer.

### ExternalName
Maps the service to the contents of the externalName field.

## African Context: Fintech Services

For African fintech applications:

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: mobile-money-api
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8080
  selector:
    app: mobile-money-api
\`\`\`

This service exposes the mobile money API to external clients.`,
        type: 'text',
        duration: 25
      },
      {
        title: 'Load Balancing',
        description: 'Implement load balancing for African applications',
        content: `# Load Balancing

Load balancing distributes traffic across multiple pods for better performance and reliability.

## Load Balancing Strategies

### Round Robin
Distributes requests evenly across pods.

### Least Connections
Routes to the pod with the fewest active connections.

### IP Hash
Routes based on client IP address.

## African Context: E-commerce Load Balancing

For African e-commerce platforms:

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: ecommerce-frontend
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 3000
  selector:
    app: ecommerce-frontend
  sessionAffinity: ClientIP
\`\`\`

This ensures users maintain their session across requests.`,
        type: 'code',
        duration: 30
      },
      {
        title: 'Network Policies',
        description: 'Secure networking for African applications',
        content: `# Network Policies

Network policies control traffic flow between pods for enhanced security.

## Network Policy Example

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: mobile-money-policy
spec:
  podSelector:
    matchLabels:
      app: mobile-money-api
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: ecommerce-frontend
    ports:
    - protocol: TCP
      port: 8080
\`\`\`

## African Context: Banking Security

For African banking applications, network policies ensure:
- Only authorized services can communicate
- Sensitive data remains protected
- Compliance with financial regulations`,
        type: 'terminal',
        duration: 35
      },
      {
        title: 'Service Discovery',
        description: 'Implement service discovery for African microservices',
        content: `# Service Discovery

Service discovery allows applications to find and communicate with each other.

## DNS-Based Service Discovery

Kubernetes provides DNS-based service discovery:

\`\`\`bash
# Service DNS format
<service-name>.<namespace>.svc.cluster.local

# Example
mobile-money-api.default.svc.cluster.local
\`\`\`

## African Context: Microservices Architecture

For African fintech platforms:

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: payment-service
spec:
  selector:
    app: payment-service
  ports:
  - port: 8080
    targetPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 8080
    targetPort: 8080
\`\`\`

Services can communicate using DNS names.`,
        type: 'code',
        duration: 25
      },
      {
        title: 'Ingress Controllers',
        description: 'Manage external access to African applications',
        content: `# Ingress Controllers

Ingress controllers manage external access to services in your cluster.

## Ingress Resource

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mobile-money-ingress
spec:
  rules:
  - host: api.mobilemoney.africa
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: mobile-money-api
            port:
              number: 80
\`\`\`

## African Context: Multi-Domain Setup

For African applications serving multiple countries:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: african-finance-ingress
spec:
  rules:
  - host: api.nigeria.finance.africa
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nigeria-api
            port:
              number: 80
  - host: api.kenya.finance.africa
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: kenya-api
            port:
              number: 80
\`\`\``,
        type: 'terminal',
        duration: 30
      },
      {
        title: 'Networking Quiz',
        description: 'Test your understanding of Kubernetes networking',
        content: `# Networking Quiz

Test your knowledge about Kubernetes services and networking.

## Question 1
Which service type exposes a service on each node's IP?

**A)** ClusterIP  
**B)** NodePort  
**C)** LoadBalancer  
**D)** ExternalName

<details>
<summary>Click to see answer</summary>

**Answer: B) NodePort**

NodePort exposes the service on each node's IP at a static port.

</details>

## Question 2
What is the default service type in Kubernetes?

**A)** NodePort  
**B)** LoadBalancer  
**C)** ClusterIP  
**D)** ExternalName

<details>
<summary>Click to see answer</summary>

**Answer: C) ClusterIP**

ClusterIP is the default service type, exposing the service on a cluster-internal IP.

</details>

## Question 3
How do pods communicate with services?

**A)** Using IP addresses directly  
**B)** Using DNS names  
**C)** Using MAC addresses  
**D)** Using hostnames

<details>
<summary>Click to see answer</summary>

**Answer: B) Using DNS names**

Pods communicate with services using DNS names like service-name.namespace.svc.cluster.local.

</details>

## African Context Question
Why might an African fintech company use LoadBalancer service type?

**A)** To reduce costs  
**B)** To expose services to external clients  
**C)** To improve performance  
**D)** To simplify configuration

<details>
<summary>Click to see answer</summary>

**Answer: B) To expose services to external clients**

LoadBalancer service type exposes services externally, which is essential for fintech APIs that need to be accessible from mobile apps and web applications.

</details>`,
        type: 'quiz',
        duration: 20
      }
    ]
  }
];

// Function to add lessons to a tutorial
async function addLessonsToTutorial(tutorialSlug, lessons) {
  console.log(`📚 Adding lessons to ${tutorialSlug}...`);
  
  for (const lesson of lessons) {
    try {
      const response = await fetch(`http://localhost:3000/api/tutorials/${tutorialSlug}/lessons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...lesson,
          order: lessons.indexOf(lesson) + 1
        }),
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

// Main function to create all tutorials
async function createAllTutorials() {
  console.log('🚀 Creating all tutorials with comprehensive content...\n');
  
  for (const tutorial of tutorials) {
    console.log(`\n📖 Creating tutorial: ${tutorial.title}`);
    console.log(`   Difficulty: ${tutorial.difficulty}`);
    console.log(`   Lessons: ${tutorial.lessons.length}`);
    
    await addLessonsToTutorial(tutorial.slug, tutorial.lessons);
    
    console.log(`✅ Completed: ${tutorial.title}\n`);
  }
  
  console.log('🎉 All tutorials created successfully!');
  console.log('\n📊 Summary:');
  console.log(`• Total Tutorials: ${tutorials.length}`);
  console.log(`• Total Lessons: ${tutorials.reduce((sum, t) => sum + t.lessons.length, 0)}`);
  console.log('• All content includes African context');
  console.log('• Ready for African developers to learn!');
}

// Run the script
if (require.main === module) {
  createAllTutorials().catch(console.error);
}

module.exports = { createAllTutorials, tutorials };
