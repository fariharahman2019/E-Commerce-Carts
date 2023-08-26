import React from "react";

const Address = ({ Links, title }) => {
  return (
    <div>
      <ul className="m-5 pb-5">
      <h1 className="mb-1 font-semibold">{title}</h1>

      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href={link.link} >
            {link.name}
          </a>
        </li>

      ))}
    </ul>
    </div>

  );
};

export default Address;
