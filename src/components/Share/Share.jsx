import React from "react";
import "@lottiefiles/lottie-player";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const history = useHistory();
  return (
    <div className="w-full h-screen bg-indigo-500 relative font-Roboto">
      <div
        className="w-full bg-white absolute bottom-0 rounded-b-none rounded-t-2xl flex flex-col items-center justify-start"
        style={{ height: "86%" }}
      >
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_8iczykai.json"
          loop
          background="transparent"
          speed="1"
          style={{ width: "320px", height: "320px", marginTop: "-50px" }}
          autoplay
        ></lottie-player>
        <div className="-mt-8 flex flex-col items-center justify-start">
          <p className="text-xl font-medium " style={{ color: "#33365c" }}>
            Congrats Soorya
          </p>
          <p
            className="text-center text-sm px-10 pt-1 font-medium font-Mulish"
            style={{ color: "#4c4f6e" }}
          >
            <strong>Hurreh! </strong> you have successfully completed the
            Reading-Day-Quiz.
          </p>

          <p
            className="pt-5 tracking-wider text-sm"
            style={{ color: "#505d86" }}
          >
            YOUR SCORE
          </p>
          <p
            className="text-3xl pt-2 font-semibold"
            style={{ color: "#323a53" }}
          >
            20/20
          </p>
        </div>
        <div className="w-full flex items-center justify-between left-0 absolute bottom-10 px-8">
          <button className="w-1/2 h-12 py-2  transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md text-indigo-600">
            Share
          </button>
          <button
            onClick={() => history.push("/")}
            className="w-1/2 h-12 py-2 focus:ring transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md bg-indigo-600 text-white"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
