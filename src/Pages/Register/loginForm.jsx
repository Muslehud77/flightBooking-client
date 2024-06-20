/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import useContextInfo from "../../Hooks/useContextInfo";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isActive }) => {
const navigate = useNavigate();
  const { signIn,  } = useContextInfo();
  const [signInError, setSignInError] = useState(null);
 
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  
  const handleSigIn = async (data) => {
    setSignInError(null);

    const userData = {
      email: data.loginEmail,
      password: data.signInPassword,
    };

    try {
      const result = await signIn(userData);
      console.log(result); 
      navigate("/")
     
    } catch (error) {
      if (error.response.data.message) {
        setSignInError(error.response.data.message);
      } else {
        setSignInError("Please try again");
      }
    }
  };

  return (
    <div
      className={`absolute inset-0 transition-transform duration-600 ease-in-out ${
        isActive ? "-translate-x-full" : ""
      } flex flex-col justify-center items-center w-1/2 bg-white p-10`}
    >
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>

      <span className="text-sm mb-6">Use your email password</span>
      <form
        className="flex flex-col space-y-3 justify-center items-center w-full"
        onSubmit={handleSubmit(handleSigIn)}
      >
        <input
          className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
          placeholder="Email"
          {...register("loginEmail", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />

        {errors.loginEmail && (
          <span className="text-red-500">Email is required</span>
        )}
        <div className="relative w-full">
          <input
            placeholder="Password"
            {...register("signInPassword", { required: true })}
            type={show ? "Text" : "password"}
            className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3 text-lg cursor-pointer"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <a href="#" className="text-sm mb-4">
          Forget Your Password?
        </a>
        {signInError && <span className="text-red-500">{signInError}</span>}
        <button
          type="submit"
          className="bg-purple-600 text-white font-semibold py-2 px-10 rounded-md uppercase"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
