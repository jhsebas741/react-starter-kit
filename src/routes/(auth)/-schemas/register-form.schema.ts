import { z } from 'zod/v4'

export const registerFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
