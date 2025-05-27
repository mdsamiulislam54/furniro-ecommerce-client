import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router";
import { UserContext } from "../Context/User/UserContextApi/UserContextApi";
import { updateProfile } from "firebase/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import Swal from "sweetalert2";

const Registration = () => {
  const { loginWithGoogle, createUser , user } = use(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: name })
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
        <h1 className="text-2xl font-bold text-center my-4">Registration</h1>
        <form className="" accordion onSubmit={handleRegistration}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
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
            Registration
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
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
