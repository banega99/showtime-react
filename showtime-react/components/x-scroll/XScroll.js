"use client";
import XScrollCard from "./x-scroll-card/XScrollCard";

import {
  Virtual,
  Pagination,
  Scrollbar,
  Navigation,
  Autoplay,
  Parallax,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import classes from "./x-scroll.module.css";

import "react-horizontal-scrolling-menu/dist/styles.css";
import { useRouter } from "next/navigation";
export default function XScroll({ movies, title }) {
  const router = useRouter();
  function makeMovieList() {
    let titleArr = title.split(" ");
    let moviesIndex = titleArr.indexOf("Movies");
    let movieList = titleArr.toSpliced(moviesIndex, 1).join("_");
    return movieList.toLowerCase();
  }

  return (
    <div className={classes[`scroll-container`]}>
      <h5
        onClick={() => {
          if (title == "Recommended Movies" && title == "Appears in Movies")
            return;
          router.push(`/movie-lists?name=${makeMovieList()}&page=1`);
        }}
        className={
          title != "Recommended Movies" && title != "Appears in Movies"
            ? classes[`text-white`] + " " + classes.link
            : classes[`text-white`]
        }
      >
        {title}
        {title != "Recommended Movies" && title != "Appears in Movies" && (
          <span className={classes["little-text"]}>Explore All</span>
        )}
        {title != "Recommended Movies" && title != "Appears in Movies" && (
          <span className={classes.arrow}></span>
        )}
      </h5>
      <Swiper
        modules={[Virtual, Scrollbar, Navigation, Mousewheel]}
        spaceBetween={100}
        slidesPerView={5}
        navigation
        mousewheel
        scrollbar={{ draggable: true }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={movie.id} virtualIndex={i}>
            <XScrollCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
