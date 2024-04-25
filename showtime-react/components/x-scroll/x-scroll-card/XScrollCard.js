import classes from "./x-scroll-card.module.css";
import { imgPath } from "../../../shared/imgPath";
import MovieRating from "../../rating/Rating";
import { useRouter } from "next/navigation";
import GenreLink from "../../genre-link/GenreLink";
import { useRef } from "react";

export default function XScrollCard({ movie }) {
  const router = useRouter();
  const link = useRef();

  function handleNavigation(e) {
    if (e.target.closest(`.${classes.genres}`)) return;
    router.push(`/movies/${movie.id}`);
  }

  return (
    <div
      className={classes[`scroll-card`]}
      onClick={handleNavigation}
      // style={{ backgroundImage: `url(${imgPath + movie.poster_path})` }}
    >
      <img src={imgPath + movie.poster_path}></img>
      <div className={classes.overlay}>
        <div className={classes.details}>
          <h5 className={classes.title}>{movie.title}</h5>
          <MovieRating rating={movie.vote_average} />
          {!!movie.genre_names && (
            <div ref={link} className={classes.genres}>
              {movie.genre_names.map((genre) => (
                <GenreLink key={genre.id} genre={genre} />
              ))}
            </div>
          )}
          <div className={classes.overview}>
            <p>
              {movie.overview?.substring(0, 100) +
                `${movie.overview.length > 100 ? "..." : ""}`}
            </p>
          </div>
        </div>
      </div>
      {/* <Link href={`/movies/${movie.id}`}></Link> */}
    </div>
  );
}
