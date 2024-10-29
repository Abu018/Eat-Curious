import React from "react";

export const Foot = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-20">
      <h4
        className="text-4xl font-bold text-center mt-16"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Features &<br />
        Benefits
      </h4>

      <div className="flex justify-center items-center space-x-48 text-green-950 mt-60">
        <div className="flex flex-col items-center">
          <img src="/home-9.png" alt="Image 9" />
          <h4 className="text-lg mt-4">PLANT BASED</h4>
          <span className="text-sm text-center">
            Protein yumminess, suitable for everyone
          </span>
        </div>

        <div className="flex flex-col items-center">
          <img src="/home-10.png" alt="Image 10" />
          <h4 className="text-lg mt-4">REAL INGREDIENTS</h4>
          <span className="text-sm text-center">Hello world</span>
        </div>

        <div className="flex flex-col items-center">
          <img src="/home-11.png" alt="Image 11" />
          <h4 className="text-lg mt-4">REAL INGREDIENTS</h4>
          <span className="text-sm text-center">Hello world</span>
        </div>

        <div className="flex flex-col items-center">
          <img src="/home-12.png" alt="Image 12" />
          <h4 className="text-lg mt-4">REAL INGREDIENTS</h4>
          <span className="text-sm text-center">Hello world</span>
        </div>
      </div>
    </div>
  );
};
