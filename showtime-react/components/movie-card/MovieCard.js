import classes from "./movie-card.module.css";

import { imgPath } from "../../shared/imgPath";
import Image from "next/image";
import Link from "next/link";
import MovieRating from "../rating/Rating";
import WatchlistPopover from "./watchlist/Watchlist";
import { useEffect } from "react";

export default function MovieCard({ movie }) {
  if (!movie) return;

  return (
    <div className={classes.movieCard}>
      {!!movie.poster_path ? (
        <img
          loading="lazy"
          src={imgPath + movie.poster_path}
          className={classes[`card-img-top`]}
          width={220}
          height={321}
          alt="movie poster"
        />
      ) : (
        <div className={classes[`card-img-top`] + " " + classes[`img-cover`]}>
          <h2>SHOWTIME</h2>
        </div>
      )}
      <div className={classes[`card-body`]}>
        <h5 className={classes[`card-title`]}>
          {movie.title}
          <span className={classes.year}>
            ({!!movie.release_date && movie.release_date.split("-")[0]})
          </span>
        </h5>
        <p className={classes[`card-text`]}>{movie.overview}</p>
      </div>
      <div className={classes.ratingCont}>
        <MovieRating rating={movie.vote_average} />
      </div>
      <Link href={`/movies/${movie.id}`} />
      <WatchlistPopover movie={movie} />
    </div>
  );
}
