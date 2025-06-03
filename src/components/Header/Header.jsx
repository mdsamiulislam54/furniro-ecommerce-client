import React, { use, useContext, useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import manIcons from "../../assets/icons/man.png";
import searchIcons from "../../assets/icons/serach.png";
import heartIcons from "../../assets/icons/heart.png";
import cartIcons from "../../assets/icons/cart.png";
import { Link, NavLink, redirect } from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import Mobile from "./Mobile";
import { UserContext } from "../../Context/User/UserContextApi/UserContextApi";
import Swal from "sweetalert2";
import CartContext from "../../Context/CartContext/CartContext";
import { AnimatePresence, motion } from "motion/react";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdClose, MdOutlineShoppingCartCheckout } from "react-icons/md";
import Button from "../Button";

const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { user, logOutUser } = useContext(UserContext);
  const { cart, cartDelete } = use(CartContext);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    const subTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(subTotal)
  }, [cart]);

  return (
    <nav
      className={`py-6 bg-white shadow-md relative ${
        scrollY > 100 ? "fixed-nav bg-white/90" : ""
      }`}
    >
      <div className="flex justify-between items-center  w-11/12 mx-auto ">
        <div>
          <img src={logo} alt="logo" className="w-[185px] h-[35px]" />
        </div>
        <div className="lg:block hidden">
          <ul className=" flex items-center text-gray-700 gap-6">
            <NavLink to={"/"} lassName="text-lg font-medium tracking-wide ">
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className="text-lg font-medium tracking-wide "
            >
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
        </div>
        <div>
          <div className="flex gap-4 items-center max-lg:hidden">
            <img
              src={searchIcons}
              alt="Search"
              className="w-7 h-7 cursor-pointer hover:scale-[90%] transition-all duration-500"
            />
            <img
              src={heartIcons}
              alt="Wishlist"
              className="w-7 h-7 cursor-pointer hover:scale-[90%] transition-all duration-500"
            />
            <span className="relative">
              <img
                src={cartIcons}
                alt="Cart"
                className="w-7 h-7 cursor-pointer hover:scale-[90%] transition-all duration-500"
                onClick={() => setIsOpenCart(!isOpenCart)}
              />
              <motion.p
                initial={{ x: [0, 1, 0], y: [0, 1, 0] }}
                animate={{ x: [0, 3, 0], y: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-3 -right-1 text-sm font-bold "
              >
                {cart.length}
              </motion.p>
            </span>

            {user ? (
              ""
            ) : (
              <img
                onClick={() => setIsOpen(!isOpen)}
                src={manIcons}
                alt="User"
                className="w-7 h-7 cursor-pointer hover:scale-[90%] transition-all duration-500"
              />
            )}
            {user && (
              <img
                onClick={() => setIsOpen(!isOpen)}
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-primary cursor-pointer hover:scale-[90%] transition-all duration-500"
              />
            )}
          </div>
          <div>
            <button
              onClick={() => setShowMobileMenu(!isShowMobileMenu)}
              className="lg:hidden block text-2xl text-gray-700 cursor-pointer"
            >
              <HiMenuAlt2 size={30} />
            </button>
          </div>
        </div>

        <div
          className={`absolute top-[0px] right-[-999px]    shadow-md w-8/12  bg-secondary md:hidden min-h-screen ${
            isShowMobileMenu ? "right-[0px]" : ""
          } transform transition-all duration-500 ease-in-out z-100`}
        >
          <Mobile setShowMobileMenu={setShowMobileMenu} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-20 right-4 w-1/12 bg-white shadow-xl  p-4  rounded-lg z-50"
            >
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-primary cursor-pointer font-medium ">
                  Profile
                </li>
                <li className="text-gray-700 hover:text-primary cursor-pointer font-medium">
                  Orders
                </li>
                <li className="text-gray-700 hover:text-primary cursor-pointer font-medium mb-4">
                  Settings
                </li>
                {user?.email ? (
                  <Link
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="  cursor-pointer bg-primary hover:bg-primary/85 text-white py-2 px-4 rounded transition duration-300 font-medium w-full "
                  >
                    LogOut
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className=" cursor-pointer bg-primary hover:bg-primary/85 text-white py-2 px-8 rounded transition duration-300 font-medium w-full "
                  >
                    Login
                  </Link>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpenCart && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-2 z-[100] bg-white p-4 rounded shadow-lg w-[400px] overflow-y-auto h-auto"
            >
              <div className="flex justify-between items-center   mb-5 border-primary">
                <h3 className="text-xl font-bold border-b-2 pb-5 border-primary">
                  Shopping Cart
                </h3>
                <button
                  className="bg-primary p-1 rounded-full text-white hover:scale-95 cursor-pointer transition-all duration-300"
                  onClick={() => setIsOpenCart(!isOpenCart)}
                >
                  <MdClose size={24} />
                </button>
              </div>
              <div className=" h-80 overflow-y-scroll">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 mb-4 b pb-2"
                    >
                      <img
                        src={item.defaultColorImage}
                        alt={item.title}
                        className="w-14 h-14 object-contain rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">{item.name}</h4>
                        <span className="flex items-center gap-5">
                          <p className="text-sm font-medium text-gray-600">1  x</p>
                          <p className="text-sm text-primary">${item.price}</p>
                        </span>
                      </div>
                      <button
                        onClick={() => cartDelete(item._id)}
                        className="text-primary hover:text-primary/90 text-lg cursor-pointer"
                      >
                        <MdClose />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    Your cart is empty.
                  </p>
                )}
              </div>
              <div className="mt-20 flex justify-between items-center pb-4 border-b-2 border-primary">
                <p className="text-lg font-medium tracking-wide">Subtotal :</p>
                <p className="text-primary font-bold text-md">$ {subtotal}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                
                <Button text='Checkout' />
               
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
