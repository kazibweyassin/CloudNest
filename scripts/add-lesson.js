#!/usr/bin/env node

/**
 * Lesson Management Script
 * 
 * This script helps you add lessons to tutorials programmatically.
 * Usage: node scripts/add-lesson.js <tutorial-slug> <lesson-title> <lesson-type>
 */

const fs = require('fs')
const path = require('path')

// Sample lesson templates
const lessonTemplates = {
  text: `# {{title}}

## Learning Objectives
- Understand the key concepts
- Learn best practices
- Apply knowledge in practice

## Content

Write your lesson content here using Markdown.

### Key Points
- Point 1
- Point 2
- Point 3

## Summary
Summarize the key takeaways from this lesson.`,

  code: `# {{title}}

## Overview
This lesson covers practical code examples and implementations.

## Code Examples

### Example 1: Basic Implementation
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
\`\`\`

### Example 2: Advanced Configuration
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
\`\`\`

## Practice Exercise
Try implementing these examples in your practice environment.`,

  terminal: `# {{title}}

## Commands to Practice

### Basic Commands
\`\`\`bash
# Check cluster status
kubectl cluster-info

# List all resources
kubectl get all

# Get detailed information
kubectl describe <resource-type> <resource-name>
\`\`\`

### Advanced Commands
\`\`\`bash
# Create resources from file
kubectl create -f resource.yaml

# Apply configuration changes
kubectl apply -f resource.yaml

# Delete resources
kubectl delete -f resource.yaml
\`\`\`

## Practice Instructions
1. Open the practice environment
2. Try each command
3. Observe the output
4. Experiment with variations`,

  quiz: `# {{title}}

## Quiz Questions

Test your understanding with these questions.

### Question 1
What is the smallest deployable unit in Kubernetes?

**Options:**
- A) Container
- B) Pod
- C) Node
- D) Service

**Answer:** B) Pod

**Explanation:** A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers.

### Question 2
Which component is responsible for scheduling pods?

**Options:**
- A) API Server
- B) Scheduler
- C) Controller Manager
- D) etcd

**Answer:** B) Scheduler

**Explanation:** The Scheduler watches for newly created Pods and selects a node for them to run on.

### Question 3
What does kubectl get all display?

**Options:**
- A) All pods
- B) All services
- C) All deployments
- D) All of the above

**Answer:** D) All of the above

**Explanation:** kubectl get all displays pods, services, deployments, and other resources.`
}

function createLesson(tutorialSlug, title, type = 'text', duration = 15) {
  const template = lessonTemplates[type] || lessonTemplates.text
  const content = template.replace('{{title}}', title)
  
  const lesson = {
    id: Date.now().toString(),
    title,
    content,
    type,
    order: 1, // This will be set by the API
    duration,
    completed: false,
    createdAt: new Date().toISOString()
  }

  return lesson
}

function addLessonToTutorial(tutorialSlug, lesson) {
  const apiUrl = `http://localhost:3000/api/tutorials/${tutorialSlug}/lessons`
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lesson),
  })
  .then(response => response.json())
  .then(data => {
    console.log('✅ Lesson added successfully!')
    console.log('Lesson ID:', data.lesson.id)
    console.log('Title:', data.lesson.title)
    console.log('Type:', data.lesson.type)
  })
  .catch(error => {
    console.error('❌ Error adding lesson:', error)
  })
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2)
  
  if (args.length < 2) {
    console.log('Usage: node scripts/add-lesson.js <tutorial-slug> <lesson-title> [lesson-type] [duration]')
    console.log('')
    console.log('Example:')
    console.log('  node scripts/add-lesson.js introduction-to-kubernetes "Understanding Pods" text 20')
    console.log('  node scripts/add-lesson.js introduction-to-kubernetes "kubectl Commands" terminal 15')
    console.log('  node scripts/add-lesson.js introduction-to-kubernetes "Pods Quiz" quiz 10')
    console.log('')
    console.log('Available lesson types: text, code, terminal, quiz')
    process.exit(1)
  }

  const [tutorialSlug, title, type = 'text', duration = 15] = args
  
  if (!lessonTemplates[type]) {
    console.error(`❌ Invalid lesson type: ${type}`)
    console.log('Available types:', Object.keys(lessonTemplates).join(', '))
    process.exit(1)
  }

  console.log(`📝 Creating lesson: "${title}"`)
  console.log(`📚 Tutorial: ${tutorialSlug}`)
  console.log(`🎯 Type: ${type}`)
  console.log(`⏱️  Duration: ${duration} minutes`)
  console.log('')

  const lesson = createLesson(tutorialSlug, title, type, parseInt(duration))
  addLessonToTutorial(tutorialSlug, lesson)
}

module.exports = { createLesson, addLessonToTutorial }
