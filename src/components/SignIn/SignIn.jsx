import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AlertComp from "../Alert/Alert";

export default function SignIn(props) {
  const { Alert} = useContext(AuthContext)

  const [ email, setEmail, password, setPassword, err, setErr, validateForm] = props.data

  return (
    <div className="bg-white w-full min-h-screen text-dark px-8 font-Mulish">
      <div className="w-full flex items-center justify-start py-8">
        <Link to="/" className="pointer text-gray-500 transition transition-duration-300 hover:shadow-lg w-10 border rounded-md border-dark h-10 p-3 flex items-center justify-center text-xl border-opacity-10 outline-none">
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <span className="pl-5 text-2xl font-extrabold">Sign In</span>
      </div>
      {Alert.status && Alert.signin && <AlertComp msg={Alert.msg}/> }

      <div className="w-full mt-5">
        <button className="pointer hover:shadow-md transition transition-duration-300 border rounded-lg h-12 bg-white border-dark w-full py-2 flex items-center justify-center outline-none  text-sm border-opacity-10">
          <svg
            className="mr-3"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 22 20"
          >
            <path
              fill="#050507"
              fillRule="evenodd"
              d="M19.981 10.21c0-.654-.06-1.283-.172-1.886h-8.911v3.566h5.092c-.22 1.152-.886 2.128-1.888 2.782v2.313h3.058c1.79-1.605 2.821-3.968 2.821-6.776z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fillRule="evenodd"
              d="M10.898 19.219c2.555 0 4.696-.826 6.262-2.234l-3.058-2.313c-.847.553-1.931.88-3.204.88-2.465 0-4.55-1.621-5.295-3.8H2.442v2.388c1.557 3.013 4.757 5.079 8.456 5.079z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fillRule="evenodd"
              d="M5.603 11.752A5.414 5.414 0 015.307 10c0-.607.107-1.198.296-1.752V5.86H2.442a9.025 9.025 0 000 8.28l3.161-2.388z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fillRule="evenodd"
              d="M10.898 4.448c1.389 0 2.636.465 3.617 1.378l2.714-2.644c-1.64-1.487-3.78-2.4-6.331-2.4-3.699 0-6.9 2.065-8.456 5.078l3.161 2.388c.744-2.178 2.83-3.8 5.295-3.8z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          Sign In with Google
        </button>
      </div>
      <span className="text-xs inline-block mt-6 mb-5 text-gray-700">
        Or sign in with Email
      </span>
      <form action="" className="w-full" autoComplete={"off"} onSubmit={validateForm}>
 
        <span className="text-xs text-red-500 mb-3">
          {err === "name" ? "Name must contain at least 3 characters." : null}
        </span>

        <div className="input-group flex items-start justify-center flex-col mt-3 ">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Eg : john@gmail.com"
            className={`${err === "email"
              ? "border-red-500 border-opacity-100"
              : "border-dark border-opacity-10"
              }  p-3 mt-2 border rounded-lg h-12 bg-white  w-full py-2 flex items-center justify-center outline-none  text-sm focus:border-opacity-100 placeholder-dark placeholder-opacity-50 transition transition-duration-600  `}
          />
        </div>
        <span className="text-xs text-red-500 mb-3">
          {err === "email" ? "Email doesn't appear to be valid." : null}
        </span>
        <div className="input-group flex items-start justify-center flex-col mt-3 ">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="At least 8+ characters"
            className={`${err === "password"
              ? "border-red-500 border-opacity-100"
              : "border-dark border-opacity-10"
              }  p-3 mt-2 border rounded-lg h-12 bg-white  w-full py-2 flex items-center justify-center outline-none  text-sm focus:border-opacity-100 placeholder-dark placeholder-opacity-50 transition transition-duration-600  `}
          />
        </div>
        <span className="text-xs text-red-500 mb-3">
          {err === "password"
            ? "Password must contain at least 6 characters."
            : null}
        </span>
        <div className="w-full my-8 flex items-center justify-center ">
          <button
            type="submit"
            className="pointer s-btn w-full h-12 bg-grey text-sm outline-none hover:shadow-lg transition transition-duration-300 text-white rounded-lg "
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="w-full flex items-center justify-center text-sm text-gray-600">
        <p>
          Don't have an account yet?
          <Link to="/signup" className="font-bold text-dark pointer"> Sign up</Link>
        </p>
      </div>
    </div>
  );
}
