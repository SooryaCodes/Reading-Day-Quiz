import React from "react";
import { useHistory } from "react-router-dom";

export default function Error({ pnf, desktop }) {
  console.log(desktop);
  const history = useHistory();

  return (
    <>
      {desktop ? (
        <div className="w-full h-screen flex items-center justify-center flex-col font-Roboto desktop bg-white">
          <div className="w-14 h-14 rounded-full bg-l-col flex items-center justify-end ">
            <div className="bg-primary-col w-8 h-8 rounded-full mr-6px"></div>
          </div>
          <span className="pt-3 text-xl font-medium text-gray-700">
            This site is currently available in mobile devices only.
          </span>
        </div>
      ) : null}

      {pnf ? (
        <> <div className="w-full h-screen flex items-center justify-center flex-col font-Roboto  bg-white">
          <div className="w-14 h-14 rounded-full bg-l-col flex items-center justify-end ">
            <div className="bg-primary-col w-8 h-8 rounded-full mr-6px"></div>
          </div>
          <span className="pt-3 text-xl font-medium text-gray-700">
            Oops ! Page Not Found
          </span>
          <button onClick={() => history.push("/")} className="bg-dark mt-3 text-white text-base px-10 py-3 outline-none cursor-pointer rounded-sm transition transition-duration-300 ease-in transform hover:scale-105">
            Return Home
          </button>
        </div>
        </>
      ) : null}

    </>
  );
}
