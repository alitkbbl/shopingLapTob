import React from 'react'
import bannerNew from '../../../public/62524e2f1d31fbfd0f68cc3e5928cba4faddd6d6_1703507126.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerNew() {
  return (
    <div className='bg-white'>
        <br />
        <Link href={"#"}>
        <div className='mx-6 rounded-2xl'>
            <Image src={bannerNew} alt='banner' className='rounded-2xl' />
        </div>
        </Link>
        
        <br />
    </div>
  )
}
