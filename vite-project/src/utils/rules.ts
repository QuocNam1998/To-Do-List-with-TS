import { UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

export const getRules = (getValues?: UseFormGetValues<any>) => ({
  email: {
    required: 'Email is required',
    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email is not valid' },
    maxLength: {
      value: 160,
      message: 'overload characters '
    },
    minLength: { value: 6, message: 'At least 6 characters' }
  },
  password: {
    required: 'password is required',
    minLength: { value: 6, message: 'password must at least have 6 character' }
  },
  confirmpassword: {
    required: 'confirmpassword is required',
    minLength: { value: 6, message: 'password must at least have 6 character' },
    validate:
      typeof getValues === 'function'
        ? (value: string) => value === getValues('password') || 'confirmpassword is not match'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('email is required')
    .email('email is not valid')
    .min(6, 'at least 6 characters')
    .max(150, 'over 150 characters'),
  password: yup
    .string()
    .required('password is required')
    .min(6, 'at least 6 characters')
    .max(150, 'over 150 characters'),
  confirmpassword: yup
    .string()
    .required('confirm password is required')
    .oneOf([yup.ref('password')], 'password is not match')
    .min(6, 'at least 6 characters')
    .max(150, 'over 150 characters')
})

export const loginSchema = schema.omit(['confirmpassword'])

export type TlonginSchema = yup.InferType<typeof loginSchema>
export type TSchema = yup.InferType<typeof schema>
