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
import { AnimatePresence } from "motion/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdClose, MdOutlineShoppingCartCheckout } from "react-icons/md";

const Mobile = ({ setShowMobileMenu,setIsOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useContext(UserContext);
  
  const { cart } = use(CartContext);
  
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
const handleOenCart = ()=>{
  setIsOpenCart(true)
  setShowMobileMenu(false)
}
  
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
        <div className="flex flex-col gap-8  mt-5 relative ">
          <div>
            <img src={logo} alt="logo" className="w-[185px] h-[35px]" />
          </div>
          <div  className="flex items-center gap-4 ">
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
              onClick={handleOenCart}
            />
            <motion.p
              initial={{ x: [0, 1, 0], y: [0, 1, 0] }}
              animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-3 -right-1 text-sm font-bold "
            >
              {cart.length}
            </motion.p>
          </span>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={manIcons}
            alt="User"
            className="w-7 h-7 cursor-pointer hover:scale-[90%] transition-all duration-500"
          />
          </div>
        </div>
        <ul className=" flex flex-col text-gray-700 gap-6 mt-10">
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-40 right-4 bg-white shadow-lg w-6/12 h-40  p-4 rounded-lg z-50"
            >
              <ul className="space-y-2 ">
                <li className="text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer ">
                  Profile
                </li>
                <li className="text-gray-700 hover:text-primary cursor-pointer transition-all duration-300 ">
                  Orders
                </li>
                <li className="text-gray-700 hover:text-primary cursor-pointer transition-all duration-300 ">
                  Settings
                </li>
                {user?.email ? (
                  <Link
                    onClick={handleLogout}
                    className="cursor-pointer bg-primary hover:bg-primary/85 text-white py-2 px-4 rounded transition duration-300 font-medium w-full "
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
                    className="cursor-pointer bg-primary hover:bg-primary/85 text-white py-2 px-4 rounded transition duration-300 font-medium w-full"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
 {/* <AnimatePresence>
          {isOpenCart && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-2 z-[100] bg-white p-4 rounded shadow-lg w-[400px] overflow-y-scroll h-[550px]"
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
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default Mobile;
