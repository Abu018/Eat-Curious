import React from "react";

export const EveryOne = () => {
  return (
    <div>
      <div className="min-h-screen bg-green-950 flex items-center px-32">
        <img src="Home 2.svg" className="max-w-2xl" alt="Flavoursome Food" />

        <div className="ml-16 flex items-start justify-between w-full">
          <div>
            <h1
              className="text-8xl text-white font-bold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              FLAVOURSOME <br />
              FOOD FOR <br /> EVERYONE
            </h1>
            <h3 className="text-white text-2xl mt-4">
              Our Curious creations are made for vegans and meat-eaters alike.
              <br />
              Because meat-free doesn't mean flavour free.
            </h3>
          </div>
          <img
            className="ml-16 max-w-xs mt-16" // Adjust the margin-top value as needed
            src="/squiggle7.svg"
            alt="Decoration"
          />
        </div>
      </div>
    </div>
  );
};
