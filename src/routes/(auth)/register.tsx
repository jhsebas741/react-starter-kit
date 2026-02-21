import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
} from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/hooks/use-auth'
import { revalidateLogic } from '@tanstack/react-form'
import { createFileRoute, Link } from '@tanstack/react-router'
import { registerFormSchema } from './-schemas/register-form.schema'
import { useAppForm } from '@/hooks/use-app-form'

export const Route = createFileRoute('/(auth)/register')({
  component: RouteComponent,
})

function RouteComponent() {
  const { register } = useAuth()
  const form = useAppForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: registerFormSchema,
    },
    onSubmit: ({ value }) => register(value),
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
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to create your account
          </p>
        </div>
        <form.AppField name="name">
          {(field) => (
            <field.TextField label="Name" placeholder="Full Name" autoFocus />
          )}
        </form.AppField>
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
            />
          )}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <field.PasswordField label="Password" placeholder="password" />
          )}
        </form.AppField>
        <form.AppField name="passwordConfirmation">
          {(field) => (
            <field.PasswordField label="Password" placeholder="password" />
          )}
        </form.AppField>

        <Field>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit || isSubmitting}>
                {isSubmitting && <Spinner />}
                Register
              </Button>
            )}
          </form.Subscribe>
          <FieldDescription className="text-center">
            Already have an account?{' '}
            <Link to="/login" className="underline underline-offset-4">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
