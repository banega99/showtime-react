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

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import CarouselCard from "./carousel-card/CarouselCard";

export default function CustomSwiper({ moviesData }) {
  return (
    <Swiper
      modules={[Virtual, Pagination, Scrollbar, Navigation, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      // parallax={{ parallax: true }}
      // scrollbar={{ draggable: true }}
      //   height={100}
      style={{ width: "100%", zIndex: 1000 }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {moviesData.map((movie, i) => (
        <SwiperSlide key={movie.id} virtualIndex={i}>
          <CarouselCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
