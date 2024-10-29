import React from "react";

export const Home = () => {
  return (
    <div>
      <img
        src="/svg-image-11.svg"
        className="w-40 -ml-7 fixed bottom-44 left-0 z-30"
        alt="Logo"
      />
      <div className="relative bg-green-950 flex flex-col justify-center items-center min-h-screen">
        <span
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="relative z-0 -mt-[44rem] text-6xl md:text-9xl lg:text-[12rem] xl:text-[15rem] flex justify-center items-center text-white font-black tracking-tight"
        >
          MEAT-FREE
        </span>
        <img
          src="/testing.png"
          alt="Meat Free Bowl"
          className="mt-64 absolute z-10 top-1/5 transform -translate-y-1/2 w-64 md:w-[22rem] lg:w-[30rem]"
        />
        <span
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="mt-16 absolute top-[40%] text-6xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-white font-black tracking-tight z-20"
        >
          YOUR MIND
        </span>
      </div>
    </div>
  );
};
