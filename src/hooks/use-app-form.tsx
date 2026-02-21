import { createFormHook } from '@tanstack/react-form'
import { PasswordField, SubmitButton, TextField } from './form-components'

import { fieldContext, formContext } from './form-context'

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: {
    TextField,
    PasswordField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
})
