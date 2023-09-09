import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Registration successful');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded-sm bg-gray-200">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 pb-6 font-bold">Register Here</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            placeholder='Full Name'
            className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <p className="text-black mt-1">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            placeholder='Adress'
            className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="text-black mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder='Email'
            className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-black mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder='Password'
            className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder='Confirm Password'
            className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div className='flex w-64 justify-center mb-5 mt-1 pt-2'>
          <p className="text-xs text-center text-black font-bold">Already a Member? <span className="underline md:underline-offset-4"><Link to="/SignIn"> Sign In </Link></span></p>
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 rounded hover:bg-red-900">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
