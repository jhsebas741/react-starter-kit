import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { useAppForm } from '@/hooks/use-app-form'
import { useAuth } from '@/hooks/use-auth'
import { revalidateLogic } from '@tanstack/react-form'
import { createFileRoute, Link } from '@tanstack/react-router'
import { loginFormSchema } from './-schemas/login-form.schema'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const { login } = useAuth()

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: loginFormSchema,
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
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
              tabIndex={1}
              autoFocus
            />
          )}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <field.PasswordField
              label="Password"
              placeholder="password"
              tabIndex={2}
            />
          )}
        </form.AppField>
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
          <form.AppForm>
            <form.SubmitButton label="Login" tabIndex={4} />
          </form.AppForm>
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
