import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "motion/react";

const Testimonial = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: "testimonial",
    queryFn: async () => {
      const res = await fetch("/testimonial.json");

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="py-20 ">
      <div className="w-11/12 mx-auto  ">
        <div className="lg:flex justify-between items-center   ">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.3 }}
            className="flex-1 bg-secondary h-[400px] flex flex-col justify-center items-center  rounded-tr-[300px] rounded-bl-[200px]"
          >
            <p className="flex items-center gap-4 text-sm  font-medium mb-2">
              <TfiLayoutLineSolid /> Testimonial
            </p>
            <h4 className="text-3xl font-bold mb-4">What our Clients Say</h4>
            <Button text="Add Review" />
          </motion.div>
          <div className="flex-1 overflow-hidden">
            <Swiper
              pagination={true}
              loop={true}
              spaceBetween={10}
              modules={[Pagination]}
            >
              {data?.map((item) => (
                <SwiperSlide key={item}>
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.3 }}
                    className="flex  gap-4  h-[400px]  justify-center items-center px-3 cursor-grab "
                  >
                    <div className="space-y-5 border-r-2 pr-2 border-primary">
                      <img
                        src={item.img}
                        alt="images"
                        className="w-20 h-20 rounded-tr-3xl object-contain bg-primary p-2 rounded-tl-2xl rounded-bl-3xl  "
                      />
                      <h3 className="text-xl font-medium tracking-wide">
                        {item.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-4">
                        {item.date}
                      </p>
                      <p className="text-gray-700 px-4 mb-4">"{item.review}"</p>

                      <p className="text-sm font-bold text-gray-600">
                        {item.address}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
