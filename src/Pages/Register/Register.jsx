import { useState } from "react";
import useContextInfo from "../../Hooks/useContextInfo";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const [isActive, setIsActive] = useState(false);
  const { signIn, signUp ,user} = useContextInfo();
  const [signInError,setSignInError] = useState(null)
  const [signUpError,setSignUpError] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


 
  const handleSignUp = async (data) => {
    setSignUpError(null);
    //       {
    //   "name": "John Doe",
    //   "email": "john@exam.com",
    //   "role": "admin",
    //   "password": "password123",
    //   "phone": "1234567890",
    //   "address": "123 Main St, City, Country"

    // }

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };

    try {
      const result = await signUp(userData);
      console.log(result); // Handle the response data
    } catch (error) {
      console.error("Error signing up:", error.response || error.message);
       setSignUpError(error.message);
    }
    
  };
  const handleSigIn = async (data) => {
   setSignInError(null)

    const userData = {
     
      email: data.email,
      password: data.password,
      
    };

    try {
      const result = await signIn(userData);
      console.log(result); // Handle the response data
    } catch (error) {
      console.error("Error signing up:", error.response || error.message);
      setSignInError(error.message);

    }
    
  };

  return (
    <div className="font-Outfit flex  justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl min-h-[480px] `}
        id="container"
      >
        <div
          className={`absolute inset-0 transition-transform duration-600 ease-in-out ${
            isActive ? "translate-x-full" : ""
          } flex flex-col justify-center items-center w-1/2 bg-white p-10`}
        >
          <h1 className="text-2xl font-bold mb-6">Create Account</h1>

          <span className="text-sm mb-6">
            or use your email for registration
          </span>
          <form
            className="flex flex-col space-y-3 justify-center items-center w-full"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <input
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
              placeholder="Name"
              {...register("name")}
            />

            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}

            <input
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <input
              placeholder="Password"
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}

            <button
              type="submit"
              className="bg-purple-600  text-white font-semibold py-2 px-10 rounded-md uppercase"
            >
              Sign Up
            </button>
          </form>
        </div>

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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <input
              placeholder="Password"
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
  
          <a href="#" className="text-sm mb-4">
            Forget Your Password?
          </a>
          <button className="bg-purple-600 text-white font-semibold py-2 px-10 rounded-md uppercase">
            Sign In
          </button>
          
          </form>
        </div>

        <div
          className={`absolute rounded-r-full inset-y-0 right-0 w-1/2 bg-gradient-to-r from-purple-700 to-purple-600 text-white flex flex-col  justify-center items-center transition-transform duration-600 ease-in-out ${
            isActive ? "-translate-x-full" : "translate-x-96"
          }`}
        >
          <div className="text-center p-10">
            <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-4">
              Enter your personal details to use all of site features
            </p>
            <button
              className="bg-transparent border border-white py-2 px-10 rounded-md uppercase"
              onClick={() => setIsActive(false)}
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
            <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
            <p className="mb-4">
              Register with your personal details to use all of site features
            </p>
            <button
              className="bg-transparent border border-white py-2 px-10 rounded-md uppercase"
              onClick={() => setIsActive(true)}
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
