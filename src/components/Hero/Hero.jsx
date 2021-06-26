import React, { createContext } from "react";

export default function Hero() {
  return (
    <div className="w-full block h-auto pb-16 lg:flex  items-center justify-center ">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center lg:pb-0 lg:pt-0 pt-14 pb-20">
        <span className="w-full    sm:w-80 font-Mulish text-base lg:text-lg">
          The International Book Festival is a remarkable event gathering book
          lovers from all over the world in Berlin, Germany. The best worms to
          get inspired together.
        </span>
        <span className="font-Mak-Bold  text-7xl xl:text-9xl pt-12 pb-5 lg:pb-0 lg:pt-20">
          Don't stop reading
        </span>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start  lg:pl-10 justify-center relative">
        <div className="w-full lg:w-96 flex flex-col items-start lg:items-end">
          <span className="font-Mulish text-base lg:text-lg py-2">
            Berlin, Germany 6-8 Dec
          </span>
          <img
            className="w-64 lg:w-96 object-cover"
            src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        </div>
        <div className="absolute -right-3 xs:right-0 bottom-5 xs:bottom-0 bg-primary-col font-Mulish text-sm xs:text-base text-white w-20 h-20 xs:w-28 xs:h-28 flex items-center justify-center rounded-full">
          <span>start quiz</span>
        </div>
      </div>
    </div>
  );
}

console.log("Hello World");
