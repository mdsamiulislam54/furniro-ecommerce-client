import React, { useContext, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { UserContext } from "../Context/User/UserContextApi/UserContextApi";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loginWithGoogle, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Login Successful",
          text: `Welcome back!`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Login failed:", error);
      });
  };

  const handleGoogleLogin = () => {
    if (user) {
      Swal.fire({
        title: "Already Logged In",
        text: "You are already logged in as ",
        icon: "info",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
      return;
    }
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful",
          text: `Welcome back, ${user.displayName || user.email}!`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Google login failed:", error);
      });
  };

  return (
    <div className="">
      <div className="rounded-lg flex flex-col items-center justify-center min-h-screen ">
       
        <form
          className="lg:flex lg:w-7/12 justify-between mx-auto gap-3  lg:h-[400px] shadow-lg    "
          onSubmit={handleLogin}
        >
          <div className="flex-1 bg-primary rounded-br-[100px] lg:rounded-tr-[100px] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
            <h1 className="text-4xl font-bold mb-4">Welcome to Furniro </h1>
            <p className="text-gray-200 mb-4">
              Please enter your email and password to login.

            </p>
            <Link to={'/'} className="bg-white text-primary px-4 py-2 rounded-md ">Home</Link>
          </div>
          <div className="flex-1 p-4">
             <h1 className="text-2xl font-bold text-center my-4">Login</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <span className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {showPassword ? (
                    <FaRegEye
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </span>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/85 cursor-pointer text-white py-2 rounded hover:bg-primary-dark transition duration-300"
            >
              Login
            </button>

             <div className="text-center mt-4">
         
          <div className="my-5 flex gap-4 items-center justify-between">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-3 px-4 py-1 text-black border border-gray-400 bg-white rounded-lg cursor-pointer"
            >
              <FcGoogle size={30} />
             
            </button>
                <p className="text-md text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
          </div>
      
        </div>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
