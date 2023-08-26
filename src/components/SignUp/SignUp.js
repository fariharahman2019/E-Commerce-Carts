import React, { useState } from "react";
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signin } from "../../features/userSlice";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function SignUp(){

  const [user, setUser] = useState(
    { email: "",
     password: "" }
    );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function checkEmailAndPassword(e) {
    e.preventDefault();
    if (validateEmailAndPassword(user) === true) {
      dispatch(
        signin({
          email: user.email,
          password: user.password,
        })
      );
      alert("Account creation succesful, Login from Homepage");
      navigate("/");
    } else {
      alert("Email id / Password not in format");
    }
  }
// slice
  function validateEmailAndPassword(props) {
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (props.email.match(email) && props.password.match(password)) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(e.target);
    setUser({ ...user, [name]: value });
  }

  return(
    <>
    <Header></Header>
    <div className="flex flex-col items-center min-h-screen py-2">
      <form onSubmit={checkEmailAndPassword} className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-cyan-800 rounded-2xl shadow-2xl flex w-full max-w-3xl">
          <div className="w-full p-5">
            <div className="py-10"> 
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Welcome to MicroTaskBidz</h2>
              <p className='text-zinc-200 my-3 pt-6 pb-6'>Sign up using your email</p>
                <div className='flex flex-col items-center'>

                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdDriveFileRenameOutline className='text-gray-400 mr-2'/>
                    <input onChange={handleChange} type="name" name="name" placeholder="First Name" className=' placeholder:text-gray-500 bg-gray-100 outline-none text-sm'></input>
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdDriveFileRenameOutline className='text-gray-400 mr-2'/>
                    <input onChange={handleChange} type="name" name="name" placeholder="Last Name" className=' placeholder:text-gray-500 bg-gray-100 outline-none text-sm'></input>
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaRegEnvelope className='text-gray-400 mr-2'/>
                    <input onChange={handleChange} value={user.email} type="email" name="email" placeholder="Email" className=' placeholder:text-gray-500 bg-gray-100 outline-none text-sm'></input>
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <MdLockOutline className='text-gray-400 mr-2'/>
                    <input onChange={handleChange} value={user.password} type="password" name="password" placeholder="Password" className='bg-gray-100 outline-none text-sm  placeholder:text-gray-500'></input>
                  </div>

                  <div className='flex w-64 justify-between mb-5 mt-1 pt-2'>
                    <p className="text-xs text-white font-bold">Already a Member? <span className="underline md:underline-offset-4"><Link to="/SignIn"> Sign In </Link></span></p>
                  </div>

                  <div>
                    <button className='font-semibold bg-white border-2 text-gray-600 border-cyan-900 rounded-lg px-6 w-full py-2  shadow-lg shadow-gray-500/50 hover:bg-zinc-800 hover:text-white'><Link to="/"> Sign Up </Link></button>
                  </div> 
                                
                </div>
              </div>
            </div>
          </div>            
        </form>
      </div>
      <Footer></Footer>
      </>
    )
}

export default SignUp;