"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Laptop from '@/MyTypes/laptob';
import ElementShowLapTobHomeScrean from './ElementShowLapTobHomeScrean';



const LaptopList: React.FC = () => {
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
    <div className='bg-white mt-2 mx-10 rounded-2xl border-2'>
        <br />
      <div className=' text-2xl mx-5'>
        <span className='font-bold mr-3 text-gray-900 '>لپ تاب ها در تکنولایف  </span>
      </div>
        <br />
      <div className='flex mt-2 '>
            {laptops.map((laptop) => <ElementShowLapTobHomeScrean 
                brand={laptop.brand}
                model={laptop.model}
                name={laptop.name}
                price={laptop.price}
                key={laptop._id} _id={laptop._id}/>)}
      </div>

    </div>
  );
};

export default LaptopList;
