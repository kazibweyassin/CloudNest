import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string
  }
}

export interface Tutorial {
  id: string
  title: string
  slug: string
  content: string
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Progress {
  id: string
  userId: string
  tutorialId: string
  completed: boolean
  score?: number
  completedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface ForumPost {
  id: string
  userId: string
  title: string
  content: string
  category: string
  createdAt: Date
  updatedAt: Date
  user: {
    name: string
    email: string
  }
  replies: ForumReply[]
}

export interface ForumReply {
  id: string
  postId: string
  userId: string
  content: string
  createdAt: Date
  updatedAt: Date
  user: {
    name: string
    email: string
  }
}

export interface Quiz {
  id: string
  tutorialId: string
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}
