import React, { useState } from "react";
import logo from '../images/Logo.png';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  
  const [open,setOpen] = useState(false);

  return (

    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-red-800 hover:bg-red-900 py-4 md:px-10 px-7'>
        <div>
            <Link to="/"><img className="w-24" src={logo} alt=""></img></Link>
        </div>
      
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <AiOutlineMenu className="text-gray-100 text-3xl"></AiOutlineMenu>
        </div>
        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto md:items-center sm:items-center`}>
          <ul className={`lg:flex md:flex lg:justify-between space-x-6 text-white ${open ? 'block' : 'hidden'} md:block`}>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">Home</li>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">Contact</li>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">Portfolio</li>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">Login</li>
          </ul>
        </nav>
      </div>
    </div>

  );
};

export default Header;