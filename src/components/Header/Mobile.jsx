import React, { use, useContext, useState } from "react";
import manIcons from "../../assets/icons/man.png";
import searchIcons from "../../assets/icons/serach.png";
import heartIcons from "../../assets/icons/heart.png";
import cartIcons from "../../assets/icons/cart.png";
import { Link, NavLink, useNavigate } from "react-router";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { UserContext } from "../../Context/User/UserContextApi/UserContextApi";
import Swal from "sweetalert2";
import CartContext from "../../Context/CartContext/CartContext";
import { motion } from "motion/react";


const Mobile = ({ setShowMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useContext(UserContext);
   const {cart} = use(CartContext)
  const navigator = useNavigate();
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        setIsOpen(false);
        Swal.fire({
          title: "Logout Successful",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Logout Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div className="p-10  relative">
        <div className="absolute top-5 right-10 flex justify-end">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-2xl  bg-primary rounded-full p-1 font-bold cursor-pointer text-white "
          >
            <IoClose size={30} className="" />
          </button>
        </div>
        <ul className=" flex flex-col text-gray-700 gap-6 mt-10">
          <div>
            <img src={logo} alt="logo" className="w-[185px] h-[35px]" />
          </div>
          <NavLink to={"/"} lassName="text-lg font-medium tracking-wide ">
            Home
          </NavLink>
          <NavLink to={"/shop"} className="text-lg font-medium tracking-wide ">
            Shop
          </NavLink>
          <NavLink to={"*"} className="text-lg font-medium tracking-wide ">
            About
          </NavLink>
          <NavLink to={"*"} className="text-lg font-medium tracking-wide ">
            Contact
          </NavLink>
          <NavLink to={"*"} className="text-lg font-medium tracking-wide ">
            Blogs
          </NavLink>
        </ul>
        <div className="flex flex-wrap gap-8 items-center mt-5 relative ">
          <img src={searchIcons} alt="Search" className="w-7 h-7" />
          <img src={heartIcons} alt="Wishlist" className="w-7 h-7" />
           <span className="relative">
              <img src={cartIcons} alt="Cart" className="w-7 h-7" />
              <motion.p 
              initial={{x:[0,1,0], y:[0,1,0]}}
              animate={{x:[0,5,0],y:[0,5,0]}}
              transition={{duration:5, repeat:Infinity}}
              
              
              className="absolute -top-3 -right-1 text-sm font-bold ">{cart.length}</motion.p>
            </span>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={manIcons}
            alt="User"
            className="w-7 h-7"
          />
        </div>
        {isOpen && (
          <div className="absolute top-[230px] left-0 bg-white shadow-lg w-full p-4 rounded-lg z-50">
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-primary cursor-pointer ">
                Profile
              </li>
              <li className="text-gray-700 hover:text-primary cursor-pointer">
                Orders
              </li>
              <li className="text-gray-700 hover:text-primary cursor-pointer">
                Settings
              </li>
              {user?.email ? (
                <Link
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-primary cursor-pointer"
                >
                  LogOut
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-700 hover:text-primary cursor-pointer"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
