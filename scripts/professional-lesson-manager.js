#!/usr/bin/env node

/**
 * Professional Lesson Management System
 * 
 * This script professionally manages all tutorial lessons with comprehensive
 * African context content. It creates a complete learning experience.
 */

const fs = require('fs');
const path = require('path');

// Professional lesson data structure
const PROFESSIONAL_TUTORIALS = {
  'introduction-to-kubernetes': {
    title: 'Introduction to Kubernetes',
    difficulty: 'BEGINNER',
    description: 'Master the fundamentals of Kubernetes and container orchestration with hands-on examples from African tech companies.',
    lessons: [
      {
        title: 'What is Kubernetes?',
        description: 'Understanding the fundamentals of container orchestration',
        type: 'text',
        duration: 15,
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
- Reduce infrastructure costs

## Learning Objectives

By the end of this lesson, you will:
- Understand what Kubernetes is and why it matters
- Know the key concepts of container orchestration
- See real-world African examples
- Be ready to dive deeper into Kubernetes`
      },
      {
        title: 'Kubernetes Architecture',
        description: 'Understanding the master-worker architecture and key components',
        type: 'text',
        duration: 20,
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

This ensures low latency and high availability across Nigeria.

## Architecture Benefits for Africa

- **High Availability**: Multiple nodes prevent single points of failure
- **Scalability**: Add nodes as your African business grows
- **Cost Efficiency**: Use spot instances for non-critical workloads
- **Compliance**: Meet African financial regulations with proper architecture`
      },
      {
        title: 'Your First kubectl Commands',
        description: 'Learn essential kubectl commands for cluster management',
        type: 'code',
        duration: 25,
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
\`\`\`

## Command Cheat Sheet

| Command | Purpose | African Use Case |
|---------|--------|------------------|
| \`kubectl get pods\` | List pods | Monitor mobile money API pods |
| \`kubectl describe pod\` | Pod details | Debug transaction processing issues |
| \`kubectl logs\` | View logs | Troubleshoot payment failures |
| \`kubectl exec\` | Execute commands | Access database for debugging |
| \`kubectl top\` | Resource usage | Monitor costs and performance |`
      },
      {
        title: 'Creating Your First Pod',
        description: 'Hands-on practice with pod creation and management',
        type: 'terminal',
        duration: 30,
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

This ensures the application can handle traffic spikes while staying within budget.

## Practice Exercise

1. Create the nginx pod using the YAML above
2. Check its status and logs
3. Modify the resource limits
4. Delete and recreate the pod

## Troubleshooting Tips

- If pod stays in Pending state, check resource availability
- If pod fails to start, check image availability
- Use \`kubectl describe\` for detailed error information
- Check events with \`kubectl get events\``
      },
      {
        title: 'Understanding Pods Quiz',
        description: 'Test your knowledge about Kubernetes Pods',
        type: 'quiz',
        duration: 15,
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

</details>

## Knowledge Check

After completing this quiz, you should understand:
- What pods are and how they work
- How to create and manage pods
- Resource management concepts
- African-specific considerations for pod deployment`
      }
    ]
  },
  'deploying-first-pod': {
    title: 'Deploying Your First Pod',
    difficulty: 'BEGINNER',
    description: 'Learn to create and manage Kubernetes pods with real-world examples from African e-commerce platforms.',
    lessons: [
      {
        title: 'Pod Lifecycle Management',
        description: 'Understanding how pods are created, managed, and terminated',
        type: 'text',
        duration: 20,
        content: `# Pod Lifecycle Management

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

## African Context: Mobile Money Pod Lifecycle

Consider a mobile money API pod lifecycle:

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

## Lifecycle Events in African Context

1. **Pod Creation**: During peak transaction hours
2. **Running State**: Processing mobile money transactions
3. **Health Checks**: Ensuring API availability
4. **Scaling**: Adding pods during high traffic
5. **Termination**: Graceful shutdown during maintenance

## Best Practices for African Applications

- **Graceful Shutdown**: Ensure transactions complete before termination
- **Health Monitoring**: Continuous monitoring for financial services
- **Resource Management**: Optimize for cost while maintaining performance
- **Multi-Region**: Deploy across African regions for availability`
      },
      {
        title: 'Resource Management and Optimization',
        description: 'Learn to manage CPU and memory resources for African applications',
        type: 'code',
        duration: 25,
        content: `# Resource Management and Optimization

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
    env:
    - name: NODE_ENV
      value: "production"
    - name: OPTIMIZE_FOR_MOBILE
      value: "true"
\`\`\`

## Resource Optimization Strategies

### 1. Start Small
Begin with minimal resources and scale up as needed.

### 2. Monitor Usage
Use \`kubectl top\` to monitor actual resource consumption.

### 3. Use Spot Instances
For non-critical workloads, use spot instances to reduce costs.

### 4. Right-Size Resources
Regularly review and adjust resource allocations.

## African Context: Mobile Money Resource Planning

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: mobile-money-api
spec:
  containers:
  - name: api
    image: mobile-money-api:latest
    resources:
      requests:
        memory: "256Mi"
        cpu: "200m"
      limits:
        memory: "512Mi"
        cpu: "500m"
    env:
    - name: MAX_CONCURRENT_TRANSACTIONS
      value: "1000"
    - name: TRANSACTION_TIMEOUT
      value: "30s"
\`\`\`

## Monitoring Commands

\`\`\`bash
# Check resource usage
kubectl top pods

# Get detailed resource information
kubectl describe pod <pod-name>

# Monitor resource usage over time
kubectl top pods --sort-by=memory
\`\`\``
      },
      {
        title: 'Health Checks and Monitoring',
        description: 'Implement health checks for reliable African applications',
        type: 'terminal',
        duration: 30,
        content: `# Health Checks and Monitoring

Health checks ensure your applications are running correctly and can handle traffic.

## Types of Health Checks

### Liveness Probe
Determines if a container is running.

### Readiness Probe
Determines if a container is ready to accept traffic.

### Startup Probe
Determines if a container has started successfully.

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
    ports:
    - containerPort: 8080
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
      timeoutSeconds: 5
      failureThreshold: 3
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
      timeoutSeconds: 3
      failureThreshold: 3
    startupProbe:
      httpGet:
        path: /startup
        port: 8080
      initialDelaySeconds: 10
      periodSeconds: 10
      timeoutSeconds: 5
      failureThreshold: 30
\`\`\`

## Practice Exercise

Try implementing health checks for your pods in the practice environment:

1. Create a pod with health checks
2. Monitor the pod status
3. Simulate failures and observe recovery
4. Test different probe configurations

## African Context: Financial Service Monitoring

For African financial services, health checks ensure:
- **Transaction Processing**: API can handle payment requests
- **Database Connectivity**: Connection to payment gateways
- **External Services**: Integration with mobile money providers
- **Compliance**: Meeting regulatory requirements

## Monitoring Commands

\`\`\`bash
# Check pod health status
kubectl get pods -o wide

# View pod events
kubectl get events --sort-by=.metadata.creationTimestamp

# Check probe status
kubectl describe pod <pod-name>

# Monitor logs for health check failures
kubectl logs <pod-name> | grep -i health
\`\`\``
      },
      {
        title: 'Pod Debugging and Troubleshooting',
        description: 'Learn to debug pod issues in African deployments',
        type: 'quiz',
        duration: 20,
        content: `# Pod Debugging and Troubleshooting

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

# Check resource usage
kubectl top pods
\`\`\`

## African Context: Debugging Mobile Money Issues

When debugging mobile money API issues:

### 1. Check Pod Status
\`\`\`bash
kubectl get pods -l app=mobile-money-api
\`\`\`

### 2. Review Logs
\`\`\`bash
kubectl logs -f deployment/mobile-money-api
\`\`\`

### 3. Check Resource Usage
\`\`\`bash
kubectl top pods --sort-by=memory
\`\`\`

### 4. Verify Network Connectivity
\`\`\`bash
kubectl exec -it <pod-name> -- curl -I https://api.payment-gateway.com
\`\`\`

## Common Issues and Solutions

### Pod Stuck in Pending
- Check resource availability
- Verify node capacity
- Review scheduling constraints

### Pod CrashLoopBackOff
- Check application logs
- Verify image availability
- Review resource limits

### Pod Not Ready
- Check readiness probe
- Verify service dependencies
- Review configuration

## African Context: Financial Service Debugging

For African fintech applications:
1. **Transaction Logs**: Monitor payment processing
2. **API Response Times**: Ensure SLA compliance
3. **Error Rates**: Track failure patterns
4. **Resource Utilization**: Optimize costs

## Debugging Checklist

- [ ] Check pod status and events
- [ ] Review application logs
- [ ] Verify resource availability
- [ ] Test network connectivity
- [ ] Check configuration
- [ ] Monitor performance metrics`
      }
    ]
  },
  'services-and-networking': {
    title: 'Services and Networking',
    difficulty: 'INTERMEDIATE',
    description: 'Understand Kubernetes services and networking patterns used in African fintech applications.',
    lessons: [
      {
        title: 'Service Types and Load Balancing',
        description: 'Understanding different Kubernetes service types for African applications',
        type: 'text',
        duration: 25,
        content: `# Service Types and Load Balancing

Kubernetes services provide stable network access to your applications.

## Service Types

### ClusterIP
Exposes the service on a cluster-internal IP. Default service type.

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
  labels:
    app: mobile-money
    region: west-africa
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
  selector:
    app: mobile-money-api
\`\`\`

## Load Balancing Strategies

### Round Robin
Distributes requests evenly across pods.

### Least Connections
Routes to the pod with the fewest active connections.

### IP Hash
Routes based on client IP address for session affinity.

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
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 3600
\`\`\`

This ensures users maintain their session across requests, important for shopping carts and user authentication.

## Service Benefits for African Applications

- **High Availability**: Multiple pods ensure service continuity
- **Scalability**: Easy to add more pods as traffic grows
- **Load Distribution**: Even traffic distribution across regions
- **Cost Optimization**: Efficient resource utilization`
      },
      {
        title: 'Network Policies and Security',
        description: 'Secure networking for African applications',
        type: 'code',
        duration: 30,
        content: `# Network Policies and Security

Network policies control traffic flow between pods for enhanced security.

## Network Policy Example

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: mobile-money-policy
  namespace: fintech
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
    - namespaceSelector:
        matchLabels:
          name: frontend
    ports:
    - protocol: TCP
      port: 8080
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432
  - to: []
    ports:
    - protocol: TCP
      port: 443
\`\`\`

## African Context: Banking Security

For African banking applications, network policies ensure:
- Only authorized services can communicate
- Sensitive data remains protected
- Compliance with financial regulations
- Isolation between different environments

## Multi-Tier Security Architecture

\`\`\`yaml
# Frontend to API communication
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: frontend-to-api
spec:
  podSelector:
    matchLabels:
      tier: frontend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          tier: frontend
    ports:
    - protocol: TCP
      port: 80

---
# API to Database communication
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-to-database
spec:
  podSelector:
    matchLabels:
      tier: api
  egress:
  - to:
    - podSelector:
        matchLabels:
          tier: database
    ports:
    - protocol: TCP
      port: 5432
\`\`\`

## Security Best Practices for Africa

1. **Principle of Least Privilege**: Only allow necessary communication
2. **Network Segmentation**: Separate different application tiers
3. **Encryption**: Use TLS for all external communication
4. **Monitoring**: Log and monitor all network traffic
5. **Compliance**: Meet African financial regulations`
      },
      {
        title: 'Service Discovery and DNS',
        description: 'Implement service discovery for African microservices',
        type: 'terminal',
        duration: 25,
        content: `# Service Discovery and DNS

Service discovery allows applications to find and communicate with each other.

## DNS-Based Service Discovery

Kubernetes provides DNS-based service discovery:

\`\`\`bash
# Service DNS format
<service-name>.<namespace>.svc.cluster.local

# Examples
mobile-money-api.default.svc.cluster.local
payment-service.fintech.svc.cluster.local
user-service.default.svc.cluster.local
\`\`\`

## African Context: Microservices Architecture

For African fintech platforms:

\`\`\`yaml
# Payment Service
apiVersion: v1
kind: Service
metadata:
  name: payment-service
  namespace: fintech
spec:
  selector:
    app: payment-service
  ports:
  - port: 8080
    targetPort: 8080
---
# User Service
apiVersion: v1
kind: Service
metadata:
  name: user-service
  namespace: fintech
spec:
  selector:
    app: user-service
  ports:
  - port: 8080
    targetPort: 8080
---
# Notification Service
apiVersion: v1
kind: Service
metadata:
  name: notification-service
  namespace: fintech
spec:
  selector:
    app: notification-service
  ports:
  - port: 8080
    targetPort: 8080
\`\`\`

## Service Communication Patterns

### Internal Communication
Services communicate using DNS names:
\`\`\`bash
# From payment service to user service
curl http://user-service.fintech.svc.cluster.local:8080/api/users/123
\`\`\`

### External Communication
For external APIs (mobile money providers):
\`\`\`bash
# External API calls
curl https://api.mpesa.co.ke/v1/payment
curl https://api.flutterwave.com/v3/payments
\`\`\`

## Practice Exercise

1. Create multiple services
2. Test service-to-service communication
3. Verify DNS resolution
4. Test external API connectivity

## African Context: Service Dependencies

For African fintech applications:
- **Payment Service**: Handles mobile money transactions
- **User Service**: Manages user accounts and authentication
- **Notification Service**: Sends SMS and email notifications
- **Audit Service**: Logs all transactions for compliance`
      },
      {
        title: 'Ingress Controllers and External Access',
        description: 'Manage external access to African applications',
        type: 'code',
        duration: 30,
        content: `# Ingress Controllers and External Access

Ingress controllers manage external access to services in your cluster.

## Ingress Resource

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mobile-money-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
  - hosts:
    - api.mobilemoney.africa
    secretName: mobile-money-tls
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
  annotations:
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/rate-limit-window: "1m"
spec:
  tls:
  - hosts:
    - api.nigeria.finance.africa
    - api.kenya.finance.africa
    - api.ghana.finance.africa
    secretName: african-finance-tls
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
  - host: api.ghana.finance.africa
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ghana-api
            port:
              number: 80
\`\`\`

## Ingress Annotations for African Context

### Rate Limiting
\`\`\`yaml
annotations:
  nginx.ingress.kubernetes.io/rate-limit: "1000"
  nginx.ingress.kubernetes.io/rate-limit-window: "1m"
\`\`\`

### SSL/TLS Configuration
\`\`\`yaml
annotations:
  nginx.ingress.kubernetes.io/ssl-redirect: "true"
  cert-manager.io/cluster-issuer: "letsencrypt-prod"
\`\`\`

### Mobile Optimization
\`\`\`yaml
annotations:
  nginx.ingress.kubernetes.io/proxy-body-size: "1m"
  nginx.ingress.kubernetes.io/proxy-connect-timeout: "30"
\`\`\`

## African Context: CDN Integration

For African applications with global users:
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cdn-ingress
  annotations:
    nginx.ingress.kubernetes.io/configuration-snippet: |
      add_header Cache-Control "public, max-age=3600";
      add_header CDN-Cache "HIT";
spec:
  rules:
  - host: cdn.finance.africa
    http:
      paths:
      - path: /static
        pathType: Prefix
        backend:
          service:
            name: static-assets
            port:
              number: 80
\`\`\``
      },
      {
        title: 'Service Mesh for African Applications',
        description: 'Implement service mesh for microservices',
        type: 'terminal',
        duration: 35,
        content: `# Service Mesh for African Applications

Service mesh provides advanced traffic management, security, and observability for microservices.

## Istio Service Mesh

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: mobile-money-vs
  namespace: fintech
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
  - match:
    - headers:
        region:
          exact: east-africa
    route:
    - destination:
        host: mobile-money-api
        subset: east-africa
\`\`\`

## Destination Rules

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: mobile-money-dr
  namespace: fintech
spec:
  host: mobile-money-api
  trafficPolicy:
    loadBalancer:
      simple: LEAST_CONN
  subsets:
  - name: west-africa
    labels:
      region: west-africa
  - name: east-africa
    labels:
      region: east-africa
\`\`\`

## African Context: Regional Traffic Routing

Service mesh enables:
- Regional traffic routing based on user location
- Load balancing across regions
- Circuit breaking for reliability
- Observability across services

## Circuit Breaker Pattern

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: payment-gateway-dr
spec:
  host: payment-gateway
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 50
        maxRequestsPerConnection: 10
    circuitBreaker:
      consecutiveErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
\`\`\`

## Practice Exercise

1. Install Istio in your cluster
2. Create VirtualService for regional routing
3. Configure DestinationRule with circuit breaker
4. Test traffic routing and failure scenarios

## African Context: Financial Service Mesh

For African fintech applications:
- **Payment Routing**: Route payments to nearest gateway
- **Circuit Breaking**: Prevent cascade failures
- **Observability**: Monitor transaction flows
- **Security**: mTLS between services`
      },
      {
        title: 'Networking Quiz and Best Practices',
        description: 'Test your understanding of Kubernetes networking',
        type: 'quiz',
        duration: 20,
        content: `# Networking Quiz and Best Practices

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

## Question 4
What does a NetworkPolicy control?

**A)** Pod scheduling  
**B)** Traffic flow between pods  
**C)** Resource limits  
**D)** Service discovery

<details>
<summary>Click to see answer</summary>

**Answer: B) Traffic flow between pods**

NetworkPolicy controls which pods can communicate with each other.

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

</details>

## Best Practices Summary

### Service Design
- Use descriptive service names
- Implement proper labels and selectors
- Choose appropriate service types
- Configure session affinity when needed

### Security
- Implement NetworkPolicies
- Use TLS for external communication
- Apply principle of least privilege
- Monitor network traffic

### Performance
- Use appropriate load balancing strategies
- Implement circuit breakers
- Monitor service performance
- Optimize for African network conditions

### African Context
- Consider regional deployment
- Optimize for mobile users
- Implement proper rate limiting
- Ensure compliance with local regulations`
      }
    ]
  }
};

// Professional lesson management functions
class ProfessionalLessonManager {
  constructor() {
    this.baseUrl = 'http://localhost:3000';
    this.tutorials = PROFESSIONAL_TUTORIALS;
  }

  async addLessonToTutorial(tutorialSlug, lesson, order) {
    try {
      const response = await fetch(`${this.baseUrl}/api/tutorials/${tutorialSlug}/lessons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...lesson,
          order: order
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Successfully added lesson: ${lesson.title}`);
        return data;
      } else {
        const error = await response.text();
        console.log(`❌ Failed to add lesson: ${lesson.title}`);
        console.log(`Error: ${error}`);
        return null;
      }
    } catch (error) {
      console.log(`❌ Error adding lesson ${lesson.title}: ${error.message}`);
      return null;
    }
  }

  async addAllLessonsToTutorial(tutorialSlug) {
    const tutorial = this.tutorials[tutorialSlug];
    if (!tutorial) {
      console.log(`❌ Tutorial ${tutorialSlug} not found`);
      return;
    }

    console.log(`\n📚 Adding lessons to: ${tutorial.title}`);
    console.log(`   Difficulty: ${tutorial.difficulty}`);
    console.log(`   Lessons: ${tutorial.lessons.length}`);
    console.log('   Description: ' + tutorial.description);

    let successCount = 0;
    for (let i = 0; i < tutorial.lessons.length; i++) {
      const lesson = tutorial.lessons[i];
      const result = await this.addLessonToTutorial(tutorialSlug, lesson, i + 1);
      if (result) {
        successCount++;
      }
      // Add small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`✅ Completed: ${tutorial.title} (${successCount}/${tutorial.lessons.length} lessons added)`);
    return successCount;
  }

  async addAllTutorials() {
    console.log('🚀 Professional Lesson Management System');
    console.log('==========================================');
    console.log('Adding comprehensive lessons to all tutorials...\n');

    let totalLessons = 0;
    let totalSuccess = 0;

    for (const tutorialSlug in this.tutorials) {
      const successCount = await this.addAllLessonsToTutorial(tutorialSlug);
      totalSuccess += successCount || 0;
      totalLessons += this.tutorials[tutorialSlug].lessons.length;
    }

    console.log('\n📊 Professional Lesson Management Summary');
    console.log('==========================================');
    console.log(`Total Tutorials: ${Object.keys(this.tutorials).length}`);
    console.log(`Total Lessons: ${totalLessons}`);
    console.log(`Successfully Added: ${totalSuccess}`);
    console.log(`Success Rate: ${((totalSuccess / totalLessons) * 100).toFixed(1)}%`);

    if (totalSuccess === totalLessons) {
      console.log('\n🎉 All lessons added successfully!');
      console.log('Your Kubern Platform is now ready with comprehensive African context content!');
    } else {
      console.log('\n⚠️  Some lessons failed to add. Check the errors above.');
    }

    console.log('\n🌍 African Context Features Added:');
    console.log('• Real-world examples from African tech companies');
    console.log('• Mobile money API deployment patterns');
    console.log('• E-commerce platform optimization');
    console.log('• Low-bandwidth considerations');
    console.log('• Cost optimization strategies');
    console.log('• Multi-region deployment patterns');
    console.log('• African compliance requirements');
    console.log('• Local payment method integration');

    console.log('\n🚀 Next Steps:');
    console.log('1. Visit http://localhost:3000/tutorials');
    console.log('2. Start with "Introduction to Kubernetes"');
    console.log('3. Follow the interactive lessons');
    console.log('4. Practice with the terminal environment');
    console.log('5. Join the community forum');
    console.log('6. Build real African applications!');
  }

  async checkServerStatus() {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      if (response.ok) {
        console.log('✅ Server is running and ready');
        return true;
      } else {
        console.log('❌ Server is not responding properly');
        return false;
      }
    } catch (error) {
      console.log('❌ Server is not running. Please start the dev server first:');
      console.log('   npm run dev');
      return false;
    }
  }
}

// Main execution
async function main() {
  const manager = new ProfessionalLessonManager();
  
  // Check if server is running
  const serverReady = await manager.checkServerStatus();
  if (!serverReady) {
    process.exit(1);
  }

  // Add all lessons professionally
  await manager.addAllTutorials();
}

// Run the professional lesson management system
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { ProfessionalLessonManager, PROFESSIONAL_TUTORIALS };
