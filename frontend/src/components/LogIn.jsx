import React from "react";
import { Link } from "react-router-dom";

export default function LogInForm() {
  function loginBtn(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={loginBtn}>
      <div className="flex h-screen justify-center items-center my-50%">
        <div className="w-[80%] sm:w-[400px] md:w-[500px] lg:w-[700px] bg-gray-500 bg-opacity-30 rounded-[20px]  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 grid grid-cols-1">
            <p className="text-[160%] md:text-[200%] lg:text-[250%] text-center mb-2 font-bold leading-tight tracking-tight text-white">
                LogIn
            </p>
            <div className="flex justify-around">
              <label className="block my-2 mx-2 text-[140%] md:text-[170%] lg:text-[200%] font-medium text-white">
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-[10px] block w-[50%] sm:w-[200px] md:w-[300px] lg:w-[460px] xl:w-[480px] p-2.5"
                id="password"
                type="email"
              />
            </div>
            <div className="flex justify-around">
              <label className="block my-2 mx-2 text-[140%] md:text-[170%] lg:text-[200%] font-medium text-white">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-[10px] block w-[50%] sm:w-[200px] md:w-[300px] lg:w-[460px] xl:w-[480px] p-2.5"
                id="confirmPassword"
                type="password"
              />
            </div>

            <button
              className="bg-blue-700 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[10px] text-[100%] md:text-[140%] px-10 py-2.5 m-auto  focus:ring-blue-800 text-white"
              type="submit"
            >
              Login
            </button>
            <p className=" text-white md:text-[20px] flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Dont have an account?
              <Link
                to="/signup"
                className="ml-2 md:text-[20px] block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
