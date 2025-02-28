import React from 'react'

import Image from 'next/image'
import banner from '../../../public/static_loginBg1.webp'
import LoginForm from './LoginForm'
export default function LoginPage() {
  return (
    <div className='bg-white'>
      <div className='flex justify-center'>
        <LoginForm />
        <div className='hidden lg:block'>
          <Image alt='registerBanner' src={banner} />
        </div>
        
      </div>
    </div>
  )
}
