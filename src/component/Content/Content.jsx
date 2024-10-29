import React from "react";

export const Content = () => {
  return (
    <div className=" min-h-screen flex items-center justify-between px-16 relative">
      {/* Left section with illustration */}
      <div className="relative w-1/2">
        <img
          src="Home 3.svg"
          alt="Illustration of person hugging Earth"
          className="ml-48 w-full max-w-lg"
        />
      </div>
      <div className="w-1/2 max-w-xl">
        <h1 className="text-green-950 text-6xl font-bold leading-tight mb-8">
          INSPIRING GOOD
          <br />
          THROUGH TASTY
          <br />
          GOODNESS
        </h1>
        <p className="text-green-950 text-lg leading-relaxed">
          We're here to inspire discovery and tempt everyone to eat more plants.
          Because we care about the future - yours, ours and the planet's.
        </p>
      </div>
    </div>
  );
};

export default Content;
