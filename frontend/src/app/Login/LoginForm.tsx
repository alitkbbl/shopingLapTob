'use client'
import React, { useState } from 'react';
import LogoLogin from './LogoLogin';
import axios from 'axios';
import  Router  from 'next/router';
import { usePathname } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [cli, setClic] = useState(false);
  const pathName = usePathname()
  console.log(pathName);
  

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    Router.back()
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email });

      console.log(response.data);

      if (response.data.message === 'User exists') {
        
      } else if (response.data.message === 'New user created') {
        console.log('کاربر جدید ساخته شد:', response.data.newUser);
        
      }

    } catch (error) {
      console.error('خطا در ارسال درخواست:', error);
    }

  };

  
  const handleClick =() => {
      setClic(true)
  }

  const handleBlur =() => {
      setClic(false)  
  }

  return (
    <div className='flex flex-col mx-14 mt-4'>

      <div className='flex justify-center p-5'>
        <LogoLogin />
      </div>

      <div className='flex justify-center text-gray-900 text-2xl gap-4 mt-8 mb-8'>
        <h2 >ورود</h2>
        <h2  className='text-base font-thin text-gray-500 mt-1'>|</h2>
        <h2 >ثبت نام</h2>
      </div>
      <div className='flex justify-center text-gray-900 text-lg mb-6'>
        <h2>خوش اومدی  :)</h2>
      </div>
      {cli && <p className='text-sm text-gray-700 mr-1'>ایمیل خود را وارد کنید</p>}
      <form onSubmit={handleSubmit} >
          <input
            type="email"
            id="email"
            value={email}
            onFocus={handleClick}
            onBlur={handleBlur}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='ایمیل خود را وارد کنید'
            className='border-2 border-gray-200 rounded-lg py-3 px-14 mt-2 text-sm focus:border-0 focus:mb-0.5'
          />

        <div className='flex justify-center mt-8'>
          <button className='mx-3 py-2 rounded-md text-lg bg-slate-700 text-white flex-grow' >ادامه</button>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
