import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import RegisterLayout from '~/layouts/RegisterLayout'
import { SInput } from '../Register/SInput'
import { getRules, loginSchema, TlonginSchema } from '~/utils/rules'
import { ILogin } from '~/@types/types'
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<TlonginSchema>({ resolver: yupResolver(loginSchema) })
  const rules = getRules()
  const onSubmit = handleSubmit(
    (data) => console.log(data),
    () => console.log('faild validation')
  )
  return (
    <div>
      <RegisterLayout>
        <div className='bg-orange'>
          <div className='max-w-7xl mx-auto p-4'>
            <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
              <div className='lg:col-span-2 lg:col-start-4'>
                <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm'>
                  <div className='text-2xl'>Đăng nhập</div>

                  <SInput
                    name='email'
                    register={register}
                    type='email'
                    className='mt-8'
                    placeholder='...input email'
                    errorMessage={errors.email?.message}
                  />

                  <SInput
                    name='password'
                    register={register}
                    type='password'
                    className='mt-8'
                    placeholder='...input password'
                    errorMessage={errors.password?.message}
                  />
                  <div className='mt-3'>
                    <button
                      type='submit'
                      className='w-full text-center bg-red-500 px-2 py-3 rounded text-white text-sm uppercase hover:bg-red-600'
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <div className='flex items-center justify-center mt-8'>
                    <span className='text-gray-400 mr-1'>Bạn chưa có tài khoản?</span>
                    <Link className='text-red-400' to='/register'>
                      Đăng ký
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
