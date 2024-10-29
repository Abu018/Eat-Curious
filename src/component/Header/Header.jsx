import React from "react";

export const Header = () => {
  return (
    <div className="bg-green-950 p-7 flex items-center font-bold">
      <a href="#" className="px-6 text-white">
        About
      </a>
      <a href="#" className="px-64 text-white">
        Product
      </a>
      <a
        href="#"
        className="flex justify-center px-40 text-white text-5xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img className="w-44" src="/hello.svg" alt="Hello" />
      </a>
      <a href="#" className="px-28 text-white flex justify-center">
        RECIPES
      </a>
      <button className="ml-auto px-6 py-2 bg-pink-500 text-black font-bold rounded-md">
        CONTACT US
      </button>
    </div>
  );
};
