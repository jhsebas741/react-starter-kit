import { AuthContext } from '@/hooks/use-auth'
import { authQueries } from '@/queries/auth.queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useCallback } from 'react'
import type { LoginCredentials, RegisterCredentials } from '../hooks/use-auth'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient()

  const { data: user, isLoading, isError, error } = useQuery(authQueries.me())

  const { mutateAsync: mutateLogin } = useMutation({
    ...authQueries.login(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { mutateAsync: mutateRegister } = useMutation({
    ...authQueries.register(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { mutateAsync: mutateLogout } = useMutation({
    ...authQueries.logout(),
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
    async (data: RegisterCredentials) => {
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
