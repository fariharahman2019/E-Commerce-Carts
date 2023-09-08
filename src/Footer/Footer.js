import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6">

        <div className="md:w-1/4 mb-6 md:mb-0 pt-10 text-left	">
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p>Email: fariharahman2019@gmail.com</p>
          <p>Location: Banani, Dhaka</p>
          <p>Bangladesh</p>
          <p>Phone: +8801311066***</p>
        </div>
        
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Feel Free To Leave a Message</h3>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Comments"
                rows="4"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
