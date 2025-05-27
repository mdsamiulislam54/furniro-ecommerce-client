import React, { useContext, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { UserContext } from "../Context/User/UserContextApi/UserContextApi";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser,loginWithGoogle,user} = useContext(UserContext)
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
  }

  const handleGoogleLogin = () => {
      if(user){
        Swal.fire({
          title: "Already Logged In",
          text: "You are already logged in as " ,
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
  }

  return (
    <div className="bg-secondary">
      <div className="max-w-xl mx-auto shadow-lg p-6 min-h-screen  bg-white/30 rounded-lg">
        <h1 className="text-2xl font-bold text-center my-4">Login</h1>
        <form className="" onSubmit={handleLogin}>
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
        </form>
        <div className="text-center mt-4">
          <span className="text-center font-bold mb-4">Or</span>
          <div className="my-5 flex flex-col gap-4 items-center">
            <button onClick={handleGoogleLogin} className="flex items-center gap-3 px-6 py-2 text-black border border-gray-400 bg-white rounded-lg cursor-pointer">
              <FcGoogle size={30} />
              <span className="">Login with Google</span>
            </button>
          </div>
          <p className="text-lg text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
