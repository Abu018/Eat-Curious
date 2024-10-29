import React from "react";

export const Footer = () => {
  return (
    <div
      className="bg-pink-500 fixed bottom-0 w-full overflow-hidden py-3"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="animate-scroll whitespace-nowrap text-white font-semibold flex items-center">
        <div className="inline-flex items-center gap-6">
          <span>100% PLANT BASED</span>
          <span className="text-xl">•</span>
          <span>FREE FROM 14 MAIN ALLERGENS</span>
          <span className="text-xl">•</span>
          <span>PACKED WITH FLAVOUR</span>
          <span className="text-xl">•</span>
          <span>100% PLANT BASED</span>
          <span className="text-xl">•</span>
          <span>FREE FROM 14 MAIN ALLERGENS</span>
          <span className="text-xl">•</span>
          <span>PACKED WITH FLAVOUR</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;
