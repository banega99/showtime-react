import classes from "./carousel-card.module.css";
import { Rating } from "react-simple-star-rating";
import { imgPath } from "../../../shared/imgPath";
import { useRouter } from "next/navigation";
import GenreLink from "../../genre-link/GenreLink";

export default function CarouselCard({ movie }) {
  const router = useRouter();
  function handleNavigation(e) {
    if (e.target.closest(`.${classes.genres}`)) return;
    router.push(`/movies/${movie.id}`);
  }

  return (
    <div className={classes[`link-container`]}>
      <div
        onClick={handleNavigation}
        className={classes.card}
        style={{ backgroundImage: `url(${imgPath + movie.backdrop_path})` }}
      >
        <div className={classes[`card-caption`]}>
          <div className={classes.details}>
            <h3 className={classes.title}>{movie.title}</h3>
            <div className={classes.rating}>
              <Rating
                initialValue={movie.vote_average}
                readonly
                iconsCount={10}
                allowFraction
                size={18}
              />
            </div>
            <div className={classes.genres}>
              {movie.genre_names.map((genre) => (
                <GenreLink key={genre.id} genre={genre} />
              ))}
            </div>
            <p className={classes.overview}>{movie.overview}</p>
          </div>
        </div>
      </div>
      {/* <div className={classes.overlay}></div> */}
      {/* <Link href={`/movies/${movie.id}`}></Link> */}
    </div>
  );
}
