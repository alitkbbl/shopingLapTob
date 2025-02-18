// pages/add-laptop.tsx
import React from 'react';
import AddLaptopForm from './AddLaptopForm';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/footer/Footer';



const AddLaptopPage: React.FC = () => {
  return (
    <div className='bg-gray-100'>
        <Header />
        <br /><br />
        <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-2xl">
            <AddLaptopForm />
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default AddLaptopPage;
