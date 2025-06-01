import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router";
import { FaSquareFacebook, FaSquareGithub, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div>
          <div>
            <img src={logo} alt="logo" />
            <p>
              Furnior brings you stylish, durable, and modern furniture to
              brighten up your home and workspace.
            </p>
            <div className="flex">
                <Link><FaSquareFacebook/></Link>
                <Link><FaSquareGithub/></Link>
                <Link><FaSquareInstagram/></Link>
                <Link><FaSquareYoutube/></Link>
            </div>
          </div>
          <div>
            <h2>Company</h2>
            <div>
                <Link to={'*'}>About Us</Link>
                <Link to={'*'}>Blog</Link>
                <Link to={'*'}>Contact</Link>
                <Link to={'*'}>Career</Link>
               
            </div>
          </div>
          <div>
            <h2>Customers Service</h2>
            <div>
                <Link to={'*'}>My Account</Link>
                <Link to={'*'}>Track You Order</Link>
                <Link to={'*'}>Return</Link>
                <Link to={'*'}>FAQ</Link>
               
            </div>
          </div>
          <div>
                 <h2>Our Information</h2>
            <div>
                <Link to={'*'}>Privacy</Link>
                <Link to={'*'}>User term's</Link>
                <Link to={'*'}>Condition</Link>
                <Link to={'*'}>FAQ</Link>
               
            </div>
          </div>
          <div>
            <h2>Contact Info</h2>
            <div>
                <p>+880-123456789</p>
                <p>furniorInfo@gmail.com</p>
                <p>Gaibandha, Rangpur,BD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
