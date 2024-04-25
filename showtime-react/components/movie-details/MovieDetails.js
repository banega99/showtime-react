import {
  getMovieImages,
  getRecommended,
  getMovieCast,
  getMovieVideos,
} from "../../lib/movies";
import PosterSwiper from "./posters-swiper/PostersSwiper";

import classes from "./movie-details.module.css";
import Title from "./title/Title";
import Description from "./description/Description";
import XScroll from "../x-scroll/XScroll";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";
import MovieVideos from "./movie-videos/MovieVideos";
import Blur from "./blur/Blur";
// import { useRef } from "react";

export default async function MovieDetails({ movie }) {
  console.log(movie.id);
  const posters = await getMovieImages(movie.id);
  const recommendedMovies = await getRecommended(movie.id);
  const movieCast = await getMovieCast(movie.id);
  const movieVideos = await getMovieVideos(movie.id);
  // console.log(movieCast);

  return (
    <>
      <div id="movie-details" className={classes.details}>
        <PosterSwiper posters={posters.backdrops} />
        <Title
          title={movie.title}
          originalTitle={movie.original_title}
          overview={movie.overview}
        />
        <div className={classes[`desc-vid-cont`]}>
          <Description movie={movie} />
          {!!movieVideos.results && (
            <MovieVideos videos={movieVideos.results} />
          )}
        </div>
        <XScroll
          movies={recommendedMovies.results}
          title="Recommended Movies"
        />
        <Cast cast={movieCast.cast} />
        <Reviews id={movie.id} />
      </div>
      <Blur />
    </>
  );
}
