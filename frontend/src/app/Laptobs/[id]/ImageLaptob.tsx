"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface images {
    image:string,
    image2 :string
}
export default function ImageLaptob({image , image2}:images) {
    const [imagez, setImage] = useState(image);

  return (
    <div className=' my-5 mx-10'>
        <Image
            src={imagez}
            alt="baner"
            height={410}
            width={410}
            className="mx-2 mt-1 rounded-lg border-2 border-gray-200"
            onMouseEnter={() => setImage(image2)} // تغییر به تصویر دوم هنگام قرار گرفتن موس
            onMouseLeave={() => setImage(image)} // بازگشت به تصویر اصلی هنگام برداشتن موس
          />
        
    </div>
  )
}
