import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareYoutube,
  FaAmazonPay,
  FaApplePay,
} from "react-icons/fa6";
import { LiaGooglePlay } from "react-icons/lia";
import { GrPaypal } from "react-icons/gr";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 content-center">
          {/* Logo & About */}
          <div>
            <h1 className="text-3xl font-semibold mb-4">Furniro.</h1>
            <p className="text-sm mb-4">
              Furnior brings you stylish, durable, and modern furniture to
              brighten up your home and workspace.
            </p>
            <div className="flex items-center gap-4 text-2xl">
              <Link to="*">
                <FaSquareFacebook className="hover:text-white" />
              </Link>
              <Link to="*">
                <FaSquareGithub className="hover:text-white" />
              </Link>
              <Link to="*">
                <FaSquareInstagram className="hover:text-white" />
              </Link>
              <Link to="*">
                <FaSquareYoutube className="hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="*">About Us</Link>
              <Link to="*">Blog</Link>
              <Link to="*">Contact</Link>
              <Link to="*">Career</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="*">My Account</Link>
              <Link to="*">Track Your Order</Link>
              <Link to="*">Return</Link>
              <Link to="*">FAQ</Link>
            </div>
          </div>

          {/* Our Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Our Information</h2>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="*">Privacy</Link>
              <Link to="*">User Terms</Link>
              <Link to="*">Condition</Link>
              <Link to="*">FAQ</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <div className="text-sm space-y-2">
              <p>+880-123456789</p>
              <p>furniorInfo@gmail.com</p>
              <p>Gaibandha, Rangpur, BD</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">© 2025 Furnior, All rights reserved.</p>
          <div className="flex items-center gap-4 text-2xl">
            <LiaGooglePlay />
            <GrPaypal />
            <FaAmazonPay />
            <FaApplePay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
