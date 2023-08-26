import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='max-w-[1640px] p-4 py-12 grid md:grid-cols-3 gap-6 mx-10 px-10 mt-5' id='about'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='text-start font-bold lg:text-2xl text-md  px-2 pt-4'>Are You A Contractor?</p>
          <p className=' text-start px-2 text-sm'>Do some TASKS</p>
          <button className='border bg-white rounded w-1/3 lg:h-12 h-8 mx-auto text-black text-sm lg:text-md  absolute bottom-2 right-2 '><Link to="/">VISIT US</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://plus.unsplash.com/premium_photo-1663134347744-5e7dd97925a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='/' />
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='text-start font-bold lg:text-2xl text-md  px-2 pt-4'>New Tasks Everyday !!</p>
          <p className='text-start px-2 text-sm'>Added Daily</p>
          <button className='border bg-white rounded w-1/3 lg:h-12 h-8 mx-auto text-black text-sm lg:text-md  absolute bottom-2 right-2 '><Link to="/SignIn">ADD TASKS</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1468322638156-074863f9362e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='/' />
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='text-start font-bold lg:text-2xl text-md  px-2 pt-4'>We Offer Home Service</p>
          <p className='text-start px-2 text-sm'>24/7</p>
          <button className='border bg-white rounded w-1/3 lg:h-12 h-8 mx-auto text-black text-sm lg:text-md  absolute bottom-2 right-2 '><Link to="/SignIn">BID NOW</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='/'
        />
      </div>
    </div>
  );
};

export default About;
