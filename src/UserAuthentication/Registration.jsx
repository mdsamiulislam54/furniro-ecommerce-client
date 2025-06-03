import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router";
import { UserContext } from "../Context/User/UserContextApi/UserContextApi";
import { updateProfile } from "firebase/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import Swal from "sweetalert2";

const Registration = () => {
  const { loginWithGoogle, createUser, user } = use(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl =form.photoUrl.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: name ,photoURL:photoUrl})
          .then(() => {
            Swal.fire({
              title: "Registration Successful",
              text: `Welcome, ${name}!`,
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              navigate("/login");
            });
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            Swal.fire({
              title: "Profile Update Failed",
              text: "Something went wrong while updating your profile.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
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
      <div className=" lg:flex items-center justify-center p-6 min-h-screen  rounded-lg">
        <form
          className="lg:flex lg:w-7/12 justify-between mx-auto gap-3  lg:h-[550px] shadow-lg   "
          accordion
          onSubmit={handleRegistration}
        >
          <div className="flex-1 bg-primary  rounded-br-[100px] lg:rounded-tr-[100px] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
            <h1 className="text-4xl font-bold mb-4">Welcome to Furniro </h1>
            <p className="text-gray-200 mb-4">
              Please enter your email and password to login.
            </p>
            <Link
              to={"/"}
              className="bg-white text-primary px-4 py-2 rounded-md "
            >
              Home
            </Link>
          </div>
          <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold text-center my-4">
              Registration
            </h1>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                PhotoUrl
              </label>
              <input
                type="text"
                name="photoUrl"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Your PhotoUrl"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Your Email"
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
                  placeholder="Enter your Password"
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
              Registration
            </button>
            <div className="text-center mt-4">
       
          <div className="my-5 lg:flex justify-between gap-4 items-center">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="flex items-center gap-3 max-lg:w-full justify-center max-lg:mb-4 px-4 py-1 text-black border border-gray-400 bg-white rounded-lg cursor-pointer"
            >
              <FcGoogle size={30} />
              
            </button>
               <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
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

export default Registration;
