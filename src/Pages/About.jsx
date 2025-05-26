import React from "react";
import images from "../assets/furniture-chair.png";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between my-20">
      <div className="flex-1">
        <img
          src={images}
          alt="About Us"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h4 className="text-lg font-semibold tracking-wide uppercase">
          SAVE UPTO <span className="text-primary ">20% OFF</span>
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
      </div>
    </div>
  );
};

export default About;
