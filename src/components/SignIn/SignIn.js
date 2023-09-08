import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function SignIn(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
      };




      return (
        <>
        <Header></Header>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-2 rounded hover:bg-red-900">
              Login
            </button>
          </form>
        </div>
     <Footer></Footer>
    </>
    );
}

export default SignIn;