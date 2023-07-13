import React from 'react'
import RegisterHeader from '~/components/RegisterHeader'
import Footer from '~/pages/Footer'
interface Props {
  children?: React.ReactNode
}
export const RegisterLayout = ({ children }: Props) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
