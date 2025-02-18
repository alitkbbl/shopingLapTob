"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Laptop from '@/MyTypes/laptob';
import ElementShowLapTobHomeScrean from './ElementShowLapTobHomeScrean';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';


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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: true ,

  };

  const getRandomElements = (array:Laptop[], count: number | undefined) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  };

  const laptobRand10 = getRandomElements(laptops , 12)  

  return (
    <div className='bg-white mt-2 mx-10 rounded-2xl border-2'>
        <br />
      <div className=' text-2xl mx-5 flex'>
        <span className='font-bold mr-3 text-gray-900 flex-grow '>لپ تاب ها در تکنولایف  </span>
        <Link href={"/Laptobs"} className='text-gray-800 font-bold text-base hover:text-blue-800 ml-4' > نمایش همه </Link>
      </div>
      <br />
      
      <Slider {...settings}>
            {laptobRand10.map((laptop: { brand: string; model: string; name: string; price: number; image: string; image2: string; _id: React.Key | string; }) => <ElementShowLapTobHomeScrean 
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
      </Slider>         
      
    </div>
  );
};

export default LaptopList;


