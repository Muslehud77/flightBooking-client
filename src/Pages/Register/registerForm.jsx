/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import useContextInfo from "../../Hooks/useContextInfo";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ isActive }) => {
    const navigate = useNavigate();
  const { signUp } = useContextInfo();

  const [signUpError, setSignUpError] = useState(null);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    setSignUpError(null);

    console.log(data);
    const userData = {
      name: data.name,
      email: data.registerEmail,
      password: data.signUpPassword,
      role: "user",
    };
    console.log(userData);
    try {
      const result = await signUp(userData);
      console.log(result); 
      navigate("/")// Handle the response data
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Duplicate") {
        setSignUpError("Email already taken!");
      } else {
        setSignUpError("Please try again");
      }
    }
  };

  return (
    <div
      className={`absolute inset-0 transition-transform duration-600 ease-in-out ${
        isActive ? "translate-x-full" : ""
      } flex flex-col justify-center items-center w-1/2 bg-white p-10`}
    >
      <h1 className="text-2xl font-bold mb-6">Create Account</h1>

      <span className="text-sm mb-6">Use your email for registration</span>
      <form
        className="flex flex-col space-y-3 justify-center items-center w-full"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <input
          className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
          placeholder="Name"
          {...register("name")}
        />

        {errors.name && <span className="text-red-500">Name is required</span>}

        <input
          className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
          placeholder="Email"
          {...register("registerEmail", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />

        {errors.registerEmail && (
          <span className="text-red-500">Email is required</span>
        )}
        <div className="relative w-full">
          <input
            placeholder="Password"
            // onChange={handlePassword}
            type={show ? "Text" : "password"}
            {...register("signUpPassword", { required: true })}
            className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3 text-lg cursor-pointer"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {signUpError && <span className="text-red-500">{signUpError}</span>}
        <button
          type="submit"
          className="bg-purple-600  text-white font-semibold py-2 px-10 rounded-md uppercase"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
