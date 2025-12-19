"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full rounded-lg overflow-hidden"
      >
        {/* ---- SLIDE 1 ---- */}
        <SwiperSlide>
          <img 
            src="/image/1.jpg" 
            className="w-full h-auto object-cover" 
            alt="Slide Image"
          />
        </SwiperSlide>

        {/* ---- SLIDE 2 ---- */}
        <SwiperSlide>
          <img 
            src="/image/2.png" 
            className="w-full h-auto object-cover" 
            alt="Slide Image"
          />
        </SwiperSlide>

        {/* ---- SLIDE 3 ---- */}
        <SwiperSlide>
          <img 
            src="/slider-3.jpg" 
            className="w-full h-auto object-cover" 
            alt="Slide Image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
