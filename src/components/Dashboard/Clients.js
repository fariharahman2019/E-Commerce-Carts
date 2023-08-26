import React from 'react';
import { categories } from '../../data/data.js';

const Clients = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12' id='clients'>
      <h1 className='text-teal-800 font-bold lg:text-4xl text-xl text-center'>Top Rated Task Catagories </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 m-12 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center '>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-1/4' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
