import React from "react";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react"

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

const InspirationRooms = () => {
  return (
    <div className="bg-secondary py-20 ">
      <div className="w-11/12 mx-auto ">
        <div className="lg:flex items-center gap-5 overflow-hidden">
          <motion.div className="flex-1 max-lg:mb-8" accordion
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.3 }}

          
          >
            <h3 className="text-5xl font-bold mb-4">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="text-sm mb-4">
              Our designer already made a lot beautiful phototype of rooms that
              inspire you
            </p>
            <Button text="Explore More" />
          </motion.div>
          <div className="flex-1 relative max-lg:mb-8">
            <motion.img
                initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.3 }}
              className=" rounded-lg"
              src="https://img.freepik.com/free-photo/small-juvenile-bedroom-arrangement_23-2151113813.jpg"
              alt=""
            />
            <span className="flex items-end absolute bottom-2 left-2  justify-between  rounded-lg shadow-lg">
              <span className="p-4 bg-white/80">
                {" "}
                <p className="text-sm font-medium">01 - Bed Room</p>
                <h4 className="text-2xl font-bold">Inner Peace</h4>
              </span>
              <p className="p-2 bg-primary text-white font-semibold">
                <FaArrowRight color="white" className=" t" />
              </p>
            </span>
          </div>
          <motion.div className="flex-1 overflow-hidden  relative " accordion
          
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.3 }}
          >
            <div className="absolute top-[40%] right-0 z-10 flex flex-col items-center">
              <button className="swiper-button-next-custom cursor-pointer p-2 bg-primary text-white rounded-full mt-4">
                <FaArrowCircleRight />
              </button>
            </div>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={true}
              loop={true}
              spaceBetween={10}
              modules={[Navigation]}
              className="mySwiper w-[350px] "
            >
              <SwiperSlide>
                <img
                  src=" https://img.freepik.com/premium-photo/bedroom-with-white-bed-white-headboard_1048908-23920.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/premium-photo/white-bedroom-with-bed-window-with-plant-side_941265-36348.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-photo/minimal-amazing-interior-design_23-2150534569.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683465.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InspirationRooms;
