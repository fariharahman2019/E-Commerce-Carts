import React from "react";
import AddressContainer from "./AddressContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Items";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center" id="footer">
      <div className="md:flex md:items-center text-center h-20 sm:px-12 px-20 bg-gray-900 py-7">
        <h1 className="lg:text-4xl text-3xl mt-6 md:mb-0 mb-6 lg:leading-normal text-center font-semibold w-full" >
          <span className="text-teal-400 "> Feel Free</span> to give us FEEDBACK
        </h1>
      </div>

      <div className="p-10 pt-20">
        <input type="text" placeholder="Your Email" className="text-gray-800 sm:w-72 h-10 w-full sm:mr-5 mr-1 lg:mb-5 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            <br></br>
        <input type="text" placeholder="Your Phone Number" className="text-gray-800 sm:w-72 h-10 w-full sm:mr-5 mr-1 lg:mb-5 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            <br></br>
        <textarea type="text" placeholder="Your Feedback" className="text-gray-800 sm:w-72 h-15 w-full sm:mr-5 mr-1 lg:mb-5 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            <br></br>
        <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full" > <Link to="/home#about"> Submit </Link> </button>
      </div>


      <div className=" columns-1 m-0">
        <AddressContainer />
      </div>

      <div className="text-center pt-2 text-gray-400 text-sm pb-8">
        <SocialIcons Icons={Icons}/>
      </div>
    </footer>
  );
};

export default Footer;
