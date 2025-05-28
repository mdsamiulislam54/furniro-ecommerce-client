import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import Button from "../components/Button";
import { motion } from "motion/react";

const NewsLetter = () => {
  return (
    <div className="bg-secondary py-10">
      <div className="w-11/12 mx-auto lg:flex justify-between ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ amount: 0.3 }}
          className="flex-1 max-lg:mb-8"
        >
          <p className="text-sm font-bold tracking-wide mb-2">NewsLetter</p>
          <h4 className="text-xl font-bold tracking-wide ">
            Subscribe to our NewsLetter to Get
          </h4>
          <h4 className="text-xl font-bold tracking-wide text-primary">
            Updates to our Latest Collection
          </h4>
          <p className="text-sm my-2 ">
            Get 20% off your first order just by subscribing to our newsLetter
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ amount: 0.3 }}
          className="flex-1 "
        >
          <form>
            <span className="relative ">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-8/12 p-3 pl-10 border border-gray-300"
              />
              <span className="absolute -top-1 text-primary left-2">
                <MdOutgoingMail size={30} />
              </span>
            </span>
            <br></br> <br></br>
            <Button text="Subscribe" type="submit" className="" />
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
