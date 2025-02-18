"use client"
import Laptop from '@/MyTypes/laptob';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function ElementShowLapToHomeScrean(laptob: Laptop) {
  const [image, setImage] = useState(laptob.image);
  
  return (
    <div className="mb-2 mt-3 mx-3 rounded-lg py-2 border-l-gray-300 border-t-white border-2 border-r-white hover:scale-105 hover:shadow-lg">
      <Link href={`/Laptobs/${laptob._id}`}>
        <Image
          src={image}
          alt="baner"
          height={195}
          width={195}
          className="mx-2 mt-1 rounded-lg"
          onMouseEnter={() => setImage(laptob.image2)} // تغییر به تصویر دوم هنگام قرار گرفتن موس
          onMouseLeave={() => setImage(laptob.image)} // بازگشت به تصویر اصلی هنگام برداشتن موس
        />
        <div className="flex justify-center flex-col text-gray-700 text-base mt-6 mr-4">
          <p className='text-gray-500'>{laptob.name}</p>
          <p>{laptob.brand}</p>
          <p className="mt-4 mb-2 font-bold text-gray-900">{laptob.price}</p>
        </div>
      </Link>
    </div>
  );
}
