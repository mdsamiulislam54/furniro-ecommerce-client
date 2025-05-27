import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import manIcons from "../../assets/icons/man.png";
import searchIcons from "../../assets/icons/serach.png";
import heartIcons from "../../assets/icons/heart.png";
import cartIcons from "../../assets/icons/cart.png";
import { Link, NavLink } from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import Mobile from "./Mobile";
import { UserContext } from "../../Context/User/UserContextApi/UserContextApi";
import Swal from "sweetalert2";

const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { user,logOutUser } = useContext(UserContext);

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
  }

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
            <NavLink className="text-lg font-medium tracking-wide ">
              Home
            </NavLink>
            <NavLink className="text-lg font-medium tracking-wide ">
              Shop
            </NavLink>
            <NavLink className="text-lg font-medium tracking-wide ">
              About
            </NavLink>
            <NavLink className="text-lg font-medium tracking-wide ">
              Contact
            </NavLink>
            <NavLink className="text-lg font-medium tracking-wide ">
              Blogs
            </NavLink>
          </ul>
        </div>
        <div>
          <div className="flex gap-4 items-center max-lg:hidden">
            <img src={searchIcons} alt="Search" className="w-7 h-7" />
            <img src={heartIcons} alt="Wishlist" className="w-7 h-7" />
            <img src={cartIcons} alt="Cart" className="w-7 h-7" />
            <img
              onClick={() => setIsOpen(!isOpen)}
              src={manIcons}
              alt="User"
              className="w-7 h-7"
            />
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

        {isOpen && (
          <div className="absolute top-[60px] right-0 bg-white shadow-xl w-64 p-4 rounded-lg z-50">
            {user && <h1 className="text-center my-2 font-bold">{user.displayName}</h1>}
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
                  onClick={()=>{
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
                  className=" cursor-pointer bg-primary hover:bg-primary/85 text-white py-2 px-4 rounded transition duration-300 font-medium w-full "
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
