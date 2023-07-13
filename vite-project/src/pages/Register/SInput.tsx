import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface propsInput {
  register: UseFormRegister<any>
  type: React.HTMLInputTypeAttribute
  className?: string
  rules?: RegisterOptions
  errorMessage?: string
  placeholder?: string
  name: string
}

export const SInput = ({ register, type, className, rules, errorMessage, placeholder, name }: propsInput) => {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
