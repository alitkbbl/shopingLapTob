"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
export default function FooterHead() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

        
  return (
    <div className='flex justify-between mt-1 ml-2'>
      <Link href={"/"}>
      <Image className='mr-5 mt-1' fetchPriority="auto" loading="lazy" alt="" src="https://www.technolife.ir/image/static_white_logo_techno.svg" width="174" height="50"></Image>
      </Link>

        <button onClick={scrollToTop} className="bg-white text-gray-800 ml-6 px-6  shadow-md rounded-xl hover:bg-gray-200">
            <svg className="inline-block w-5 h-5 mr-2 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
                بازگشت به بالا
        </button>

    </div>
  )
}
