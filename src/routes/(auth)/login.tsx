import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/hooks/use-auth'
import { useForm } from '@tanstack/react-form'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PasswordInput } from './-components/password-input'
import { loginFormSchema } from './-schemas/login-form.schema'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const { login, isLoading } = useAuth()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    validators: {
      onSubmit: loginFormSchema,
    },
    onSubmit: ({ value }) => login(value),
  })

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  type="email"
                  placeholder="email@example.com"
                  tabIndex={1}
                  autoFocus
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
        <form.Field name="password">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <PasswordInput
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  placeholder="Password"
                  tabIndex={2}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
        <form.Field name="remember">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field orientation={'horizontal'} data-invalid={isInvalid}>
                <Checkbox
                  id={field.name}
                  name={field.name}
                  aria-invalid={isInvalid}
                  checked={field.state.value}
                  onCheckedChange={(checked) => field.handleChange(!!checked)}
                  onBlur={field.handleBlur}
                  tabIndex={3}
                />
                <FieldLabel htmlFor={field.name}>Remember me</FieldLabel>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
        <Field>
          <Button type="submit" tabIndex={4} disabled={isLoading}>
            {isLoading && <Spinner />}
            Login
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="underline underline-offset-4"
              tabIndex={5}
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
