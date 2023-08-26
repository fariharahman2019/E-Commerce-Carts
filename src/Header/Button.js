import React from 'react';

const Button = (props) => {
  return (
    <button className='ml-1 bg-gray-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-teal-500 hover:text-white duration-500'>
      {props.children}
    </button>
  )
}

export default Button;
