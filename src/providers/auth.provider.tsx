import { AuthContext } from '@/hooks/use-auth'
import {
  loginMutation,
  logoutMutation,
  registerMutation,
  userQuery,
} from '@/queries/auth.queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useCallback } from 'react'
import type { LoginCredentials, RegisterData } from '../hooks/use-auth'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient()

  const { data: user, isLoading, isError, error } = useQuery(userQuery())

  const { mutateAsync: mutateLogin } = useMutation({
    ...loginMutation(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { mutateAsync: mutateRegister } = useMutation({
    ...registerMutation(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { mutateAsync: mutateLogout } = useMutation({
    ...logoutMutation(),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null)
      queryClient.clear()
    },
  })

  const isAuthenticated = !!user && !isError

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      await mutateLogin(credentials)
    },
    [mutateLogin],
  )

  const logout = useCallback(async () => {
    await mutateLogout()
  }, [mutateLogout])

  const register = useCallback(
    async (data: RegisterData) => {
      await mutateRegister(data)
    },
    [mutateRegister],
  )

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
        register,
        user: user || null,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
