import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import RegisterLayout from '~/layouts/RegisterLayout'
import { TSchema, getRules, schema } from '~/utils/rules'
import { SInput } from './SInput'
import { registerAccount } from '~/apis/auth.api'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TSchema>({ resolver: yupResolver(schema) })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<TSchema, 'confirmpassword'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    registerAccountMutation.mutate(data, {
      onSuccess: (success) => {
        console.log(success)
      },
      onError: (error) => {
        console.log('ahihi sai roi')
      }
    })
  })
  console.log('errors', errors)
  return (
    <div>
      <RegisterLayout>
        <div className='bg-orange'>
          <div className=' container'>
            <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
              <div className='lg:col-span-2 lg:col-start-4'>
                <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
                  <div className='text-2xl'>Đăng ký</div>
                  <SInput
                    name='email'
                    register={register}
                    type='email'
                    className='mt-8'
                    errorMessage={errors?.email?.message}
                    placeholder='...email'
                  />

                  <SInput
                    name='password'
                    register={register}
                    type='password'
                    className='mt-3'
                    errorMessage={errors?.password?.message}
                    placeholder='...password'
                  />
                  <SInput
                    name='confirmpassword'
                    register={register}
                    type='password'
                    className='mt-3'
                    errorMessage={errors?.confirmpassword?.message}
                    placeholder='...confirm password'
                  />
                  <div className='mt-3'>
                    <button
                      type='submit'
                      className='w-full text-center bg-red-500 px-2 py-3 rounded text-white text-sm uppercase hover:bg-red-600'
                    >
                      Đăng ký
                    </button>
                  </div>

                  <div className='flex items-center justify-center mt-8'>
                    <span className='text-gray-400 mr-1'>Bạn đã có tài khoản?</span>
                    <Link className='text-red-400' to='/login'>
                      Đăng nhập
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RegisterLayout>
    </div>
  )
}
