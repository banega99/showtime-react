"use client";

import {
  Virtual,
  Pagination,
  Scrollbar,
  Navigation,
  Autoplay,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { imgPath } from "../../../shared/imgPath";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "swiper/css/autoplay";

export default function PosterSwiper({ posters }) {
  return (
    <Swiper
      modules={[Virtual, Pagination, Scrollbar, Navigation, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      style={{ width: "100%" }}
    >
      {posters.map((poster, i) => (
        <SwiperSlide key={poster.file_path} virtualIndex={i}>
          <img
            style={{ width: "100%" }}
            src={`${imgPath + poster.file_path}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
