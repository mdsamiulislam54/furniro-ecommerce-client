import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PiArmchairFill, PiBedFill, PiBooksFill, PiCableCarFill, PiDoorFill, PiLampFill, PiOfficeChair, PiTableFill, PiTelevisionFill } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import { BsBookshelf } from "react-icons/bs";

const Category = () => {
  const category = [
    { icon: <PiOfficeChair />, name: "Chair", totalItem: 20 },
    { icon: <PiArmchairFill />, name: "Armchair", totalItem: 15 },
    { icon: <GiSofa />, name: "Sofa", totalItem: 18 },
    { icon: <IoBed />, name: "Bed", totalItem: 12 },
    { icon: <MdOutlineTableRestaurant />, name: "Table", totalItem: 25 },
    { icon: <BiCabinet />, name: "Cabinet", totalItem: 10 },
    { icon: <PiLampFill />, name: "Lighting", totalItem: 14 },
    { icon: <BsBookshelf />, name: "Bookshelf", totalItem: 8 },
    { icon: <PiTelevisionFill />, name: "TV Stand", totalItem: 9 },
    { icon: <PiDoorFill />, name: "Wardrobe", totalItem: 13 },
  ];

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <div className="flex gap-3">
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
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {category.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="r p-6 rounded-lg text-center bg-[#EFF5F9] shadow-sm hover:shadow-md  flex flex-col items-center *:
            hover:scale-75  cursor-pointer transition-all duration-300
            ">
              <div className="text-4xl mb-4 text-primary bg-white p-3 rounded-full ">{item.icon}</div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.totalItem} {item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
