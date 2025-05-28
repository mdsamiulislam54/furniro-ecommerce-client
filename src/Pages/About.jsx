import React from "react";
import images from "../assets/furniture-chair.png";
import Button from "../components/Button";
import { motion } from "motion/react";


const About = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between my-20">
      <motion.div className="flex-1" accordion
        initial={{ opacity: 0, x: -200,}}
        whileInView={{ opacity: 1, x: 0,  }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ amount: 0.3 }}>
        <motion.img

          animate={{x:[0,50,0]}}
          transition={{duration:4, repeat:Infinity}}
          src={images}
          alt="About Us"
          className="w-full h-[400px] object-cover"
        />
      </motion.div>
      <motion.div className="flex-1 space-y-6"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ amount: 0.3 }}
      >
        <h4 className="text-lg font-semibold tracking-wide uppercase">
          SAVE UPTO <motion.span 
         animate={{ color: ["#000", "#FF6D60", "#00C897"] }}
  transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
          className="text-primary ">20% OFF</motion.span>
        </h4>
        <h2 className="text-4xl font-bold text-gray-800">
          Crafted Comfort for Your Beautiful Space
        </h2>
        <p className="text-gray-600 text-[17px] leading-7">
          Welcome to our furniture store — where style meets comfort. We believe
          furniture is more than just decor; it's a reflection of your
          personality and the story of your home.
        </p>
        <p className="text-gray-600 text-[17px] leading-7">
          Every piece we create is designed with passion, using premium
          materials and modern craftsmanship. From cozy chairs to elegant tables
          — find furniture that complements your lifestyle and transforms your
          living space into a sanctuary.
        </p>
        <Button text="Order Now"></Button>
      </motion.div>
    </div>
  );
};

export default About;
