import type { LoginCredentials, RegisterCredentials, User } from '@/types/auth'
import { mutationOptions, queryOptions } from '@tanstack/react-query'

const USER_STORAGE_KEY = 'auth_user'

const getStoredUser = (): User | null => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const setStoredUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(USER_STORAGE_KEY)
  }
}

export const userQuery = () =>
  queryOptions({
    queryKey: ['user'],
    queryFn: async (): Promise<User | null> => {
      return getStoredUser()
    },
    initialData: null,
    retry: false,
  })

export const loginMutation = () =>
  mutationOptions({
    mutationKey: ['login'],
    mutationFn: async (credentials: LoginCredentials) => {
      const user: User = {
        id: 1,
        name: credentials.email.split('@')[0],
        email: credentials.email,
      }
      setStoredUser(user)
      return user
    },
  })

export const registerMutation = () =>
  mutationOptions({
    mutationKey: ['register'],
    mutationFn: async (credentials: RegisterCredentials) => {
      const user: User = {
        id: 1,
        name: credentials.name,
        email: credentials.email,
      }
      setStoredUser(user)
      return user
    },
  })

export const logoutMutation = () =>
  mutationOptions({
    mutationKey: ['logout'],
    mutationFn: async (): Promise<void> => {
      setStoredUser(null)
    },
  })
