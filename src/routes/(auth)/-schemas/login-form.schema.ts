import { z } from 'zod/v4'

export const loginFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string(),
  remember: z.boolean(),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
