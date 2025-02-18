// components/AddLaptopForm.tsx
"use client"
import React, { useState } from 'react';

interface LaptopFormData {
  name: string;
  brand: string;
  model: string;
  price: string;
  processor: string;
  description?: string;
  category?: string;
  image: string;
  image2: string;
  usageType: string;
}

const AddLaptopForm: React.FC = () => {
  const [formData, setFormData] = useState<LaptopFormData>({
    name: '',
    brand: '',
    model: '',
    price: '',
    processor: '',
    description: '',
    category: 'Laptop',
    image: '',
    image2: '',
    usageType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/laptops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('لپ‌تاپ با موفقیت اضافه شد!');
        setFormData({
          name: '',
          brand: '',
          model: '',
          price: '',
          processor: '',
          description: '',
          category: 'Laptop',
          image: '',
          image2: '',
          usageType: ''
        });
      } else {
        alert('خطا در افزودن لپ‌تاپ');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">افزودن لپ‌تاپ جدید</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className='flex'>
        <div className="flex flex-col flex-grow">
          <label htmlFor="name" className="mb-1 mr-1 text-gray-600">نام</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col mr-5 ml-2 flex-grow">
          <label htmlFor="brand" className="mb-1 mr-1 text-gray-600">برند</label>
          <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
        <div className='flex'>
        <div className="flex flex-col flex-grow">
          <label htmlFor="model" className="mb-1 mr-1 text-gray-600">مدل</label>
          <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col mr-5 ml-2 flex-grow">
          <label htmlFor="price" className="mb-1 mr-1 text-gray-600">قیمت</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
        <div className='flex'>
        <div className="flex flex-col flex-grow">
          <label htmlFor="processor" className="mb-1 mr-1 text-gray-600">پردازنده</label>
          <input type="text" id="processor" name="processor" value={formData.processor} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col mr-5 ml-2 flex-grow">
          <label htmlFor="category" className="mb-1 mr-1 text-gray-600">دسته‌بندی</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 mr-1 text-gray-600">توضیحات</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1 mr-1 text-gray-600">آدرس تصویر</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image2" className="mb-1 mr-1 text-gray-600">آدرس تصویر دوم</label>
          <input type="text" id="image2" name="image2" value={formData.image2} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="usageType" className="mb-1 mr-1 text-gray-600">نوع استفاده</label>
          <input type="text" id="usageType" name="usageType" value={formData.usageType} onChange={handleChange} required className="p-2 border border-gray-300 rounded-md" />
        </div>
      </div>
      <button type="submit" className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 text-lg rounded-xl">افزودن لپ‌تاپ</button>
    </form>
  );
};

export default AddLaptopForm;
