import Laptop from '@/MyTypes/laptob'
import React from 'react'
import banner from '../../../public/laptop1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function ElementShowLapTobHomeScrean(laptob : Laptop) {
  return (
    <div className=' mb-5 mt-1 mx-3 rounded-lg py-2 border-l-gray-300 border-t-white border-2 border-r-white border-b-white hover:border-b-gray-300  hover:scale-105 hover:shadow-lg'>
        <Link href={"#"}>
            <Image src={banner} alt={"baner"} height={195} width={195} className='mx-2 mt-1 rounded-lg'/>
            <div className='flex justify-center flex-col text-gray-700 text-base mt-6 mr-4'>
                <p>{laptob.name}</p>
                <p>{laptob.brand}</p>
                <p className='mt-4 mb-2 font-bold text-gray-900'>{laptob.price}</p>
                </div>
            </Link>
    </div>
  )
}
