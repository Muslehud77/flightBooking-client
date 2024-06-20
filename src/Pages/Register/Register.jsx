/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import RegisterForm from "./registerForm";

import LoginForm from "./loginForm";
const Register = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="font-Outfit flex  justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl min-h-[480px] `}
        id="container"
      >
        <RegisterForm isActive={isActive} />

        <LoginForm isActive={isActive} />

        <div
          className={`absolute rounded-r-full inset-y-0 right-0 w-1/2 bg-gradient-to-r from-purple-700 to-purple-600 text-white flex flex-col  justify-center items-center transition-transform duration-600 ease-in-out ${
            isActive ? "-translate-x-full" : "translate-x-96"
          }`}
        >
          <div className="text-center p-10">
            <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-4">Let's get you flying again.</p>
            <button
              className="bg-transparent border border-white py-2 px-10 rounded-md uppercase"
              onClick={() => {
                setIsActive(false);
              }}
            >
              Sign In
            </button>
          </div>
        </div>

        <div
          className={`absolute rounded-l-full inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-700 to-purple-600 text-white flex flex-col justify-center items-center transition-transform duration-600 ease-in-out ${
            isActive ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="text-center p-10">
            <h1 className="text-2xl font-bold mb-4">First time here?</h1>
            <p className="mb-4">
              Join FlightBooking today! Sign up and explore new destinations
            </p>
            <button
              className="bg-transparent border border-white py-2 px-10 rounded-md uppercase"
              onClick={() => {
                setIsActive(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
