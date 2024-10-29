import React from "react";

export const Positive = () => {
  return (
    <div className="min-h-screen bg-lightgreen">
      <img src="/squiggle6.svg" className="pt-40 ml-[36rem]" alt="Squiggle" />
      <h1
        className="text-8xl font-bold ml-40 mt-12"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        POWERED BY
        <br />
        POSITIVITY
      </h1>
      <h4 className="text-black ml-40 mt-10  text-xl">
        We’re not crusading or going up against an industry.
        <br />
        We’re for; for flavour, for fun, for what’s possible.
      </h4>
      <img
        src="/Home 11.svg"
        className="max-w-lg pt-10 ml-[64rem] -mt-96"
        alt="Positive"
      />
    </div>
  );
};
