import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";
import useAllProducts from "../Api/useAllProducts";
const TrendingProducts = () => {
const {data,isError,isLoading} = useAllProducts()
if(isError) return <p>Something wrong</p>
if(isLoading) return <p>data loading...</p>

  return (
    <div className="py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-3 justify-between items-center mb-9">
          <div className="">
            <h3 className="text-3xl font-semibold">Trending Furniture.</h3>
          </div>
          <div className="flex gap-4">
            <div className="swiper-button-prev-custom cursor-pointer p-2 bg-primary text-white rounded-full">
              <FaChevronLeft />
            </div>
            <div className="swiper-button-next-custom cursor-pointer p-2 bg-primary text-white rounded-full">
              <FaChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className=""
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className=""
              >
                <img
                  src={item.defaultColorImage}
                  alt={item.title}
                  className="w-80 object-contain h-80 mx-auto "
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingProducts;
