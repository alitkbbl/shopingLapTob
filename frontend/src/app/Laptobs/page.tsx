/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Footer from '@/components/footer/Footer';
import ElementShowLapTobHomeScrean from '@/components/HomeScream/ElementShowLapTobHomeScrean';
import Header from '@/components/Navbar/Header';
import Laptop from '@/MyTypes/laptob';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [laptops, setLaptops] = useState<Laptop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/laptops')
      .then(response => {
        setLaptops(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching laptops:', error);
        setError('Error fetching laptops');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className='bg-white'>
      <Header />
      <hr />
          <div className=' mx-4 my-3 '>
            <div className='flex'>

            <div className='bg-slate-100 border-2 border-gray-100 py-1.5 rounded-md ml-3 mb-5 mt-4 flex-grow mr-4 flex gap-x-10'>
              <p className='text-gray-900 font-bold text-sm mr-4 '>ترتیب :</p>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>مرتبط ترین</button>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>پرفروش ترین</button>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>گران ترین</button>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>ارزان ترین</button>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>پرفروش ترین</button>
              <button className='text-gray-800 text-sm font-thin mb-1 hover:text-blue-800'>جدیدترین</button>
   
            </div>
            <div className='bg-indigo-500 py-1.5 rounded-md ml-48 mb-5 mt-4 px-6 text-white font-bold' >
              <button>
                مقایسه
              </button>
            </div>
            </div>
            <div className="grid grid-cols-6 border-x-2 border-gray-200 rounded-xl mt-1 mx-1">
              {laptops.map((laptop: { brand: string; model: string; name: string; price: number; image: string; image2: string; _id: React.Key | string; }) => <ElementShowLapTobHomeScrean 
                          brand={laptop.brand}
                          model={laptop.model}
                          name={laptop.name}
                          price={laptop.price}
                          image={laptop.image}
                          image2={laptop.image2}
                          _id={laptop._id}
                          key={laptop._id} 
                          map={function (): import("react").ReactNode {
                            throw new Error('Function not implemented.');
                          } } />)}
            </div>
          </div>
      <Footer />
      
    </div>
  )
}
