import type { LoginCredentials, RegisterData, User } from '@/types/auth'
import { createContext, useContext } from 'react'

export type { LoginCredentials, RegisterData, User }

export interface AuthContext {
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => Promise<void>
  register: (credentials: RegisterData) => Promise<void>
  user: User | null
  error: Error | null
}

export const AuthContext = createContext<AuthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth can only be used inside AuthProvider')
  return context
}
