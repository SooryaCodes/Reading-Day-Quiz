import React from "react";
import image from "./images/reading-book-about.jpg";

export default function About() {
  return (
    <div className="w-full  bg-l-col  pt-14 px-10 pb-20">
      {/* Left Section */}
      <div className="w-full flex flex-col justify-end items-center h-full relative">
        <img className="w-98 absolute hidden top-0 -left-44" src={image} alt="" />
        <div className="w-full font-Mulish text-base text-light ">
          <div className  ="w-full flex items-start justify-center pt-10">
            <span className="w-16 font-extrabold text-7xl -mt-6px ">T</span>
            <p className="w-full">
            he first reading day celebration is held in 1996.on june 19,2017 prime minister 
            </p>
          </div>

          <p className="w-full">
          launched the 22 nd National Reading month celebrations and called for unity to spread the message of READ AND GROW among all the citizens of the country by 2022.
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full h-full pt-12 relative">
        <span className="font-Mak-Bold text-6xl text-primary-col ">
          The <br /> 26th <br /> National <br /> Reading
          <br /> Day
        </span>
      </div>
    </div>
  );
}
