import React from "react";

export const Curious = () => {
  return (
    <div
      className="bg-pink-500 min-h-screen flex flex-row justify-between items-center px-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Left text section */}
      <div className="flex flex-col items-start text-left space-y-6">
        <h3 className="text-7xl text-white font-semibold">
          CURIOUS... BY NAME,
        </h3>
        <h3 className="text-7xl text-white font-semibold">BY NATURE</h3>
        <p className="text-lg  mt-4 max-w-md">
          It’s what inspires us to whip up, throw together, tear, shake, and
          break the rules – on a mission to redefine food for a new generation.
        </p>
      </div>

      {/* Right image section */}
      <img
        src="/Home 1.svg"
        alt="Curious Nature"
        className="w-[40rem] h-auto"
      />
    </div>
  );
};
