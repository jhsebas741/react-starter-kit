import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Spinner } from '@/components/ui/spinner'
import { useStore } from '@tanstack/react-form'
import { useFieldContext, useFormContext } from './form-context'

export function TextField({
  label,
  type,
  description,
  ...props
}: React.ComponentProps<typeof Input> & {
  label: string
  description?: string
}) {
  const field = useFieldContext<string>()

  const errors = useStore(field.store, (state) => state.meta.errors)

  const isInvalid = useStore(
    field.store,
    (state) => !state.meta.isValid && state.meta.isTouched,
  )

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        aria-invalid={isInvalid}
        type={type}
        {...props}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      {isInvalid && <FieldError errors={errors} />}
    </Field>
  )
}

export function PasswordField({
  label,
  ...props
}: React.ComponentProps<'input'> & {
  label: string
}) {
  const field = useFieldContext<string>()

  const errors = useStore(field.store, (state) => state.meta.errors)

  const isInvalid = useStore(
    field.store,
    (state) => !state.meta.isValid && state.meta.isTouched,
  )

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <PasswordInput
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        aria-invalid={isInvalid}
        {...props}
      />
      {isInvalid && <FieldError errors={errors} />}
    </Field>
  )
}

export function SubmitButton({
  label,
  type = 'submit',
  icon,
  ...props
}: React.ComponentProps<typeof Button> & {
  label: string
  icon?: React.ReactNode
}) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button type={type} disabled={!canSubmit || isSubmitting} {...props}>
          {isSubmitting ? <Spinner /> : icon}
          {label}
        </Button>
      )}
    </form.Subscribe>
  )
}
