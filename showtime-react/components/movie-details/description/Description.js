import { getAllCountries } from "../../../lib/movies";
import DetailsLink from "./details-link/DetailsLink";
import classes from "./description.module.css";
import AddToWatchlist from "./add-to-watchlist/AddToWatchlist";

export default async function Description({ movie }) {
  const allCountries = await getAllCountries();
  const countries = movie.production_countries.map(
    (country) =>
      allCountries.filter(
        (country2) => country2.english_name === country.name
      )[0]
  );
  console.log(countries);

  return (
    <div className={classes.description}>
      <AddToWatchlist movie={movie} />
      <div className={classes[`little-details`]}>
        <h5>⭐Rating:</h5>
        <span className={classes.gray}>
          {movie.vote_average.toFixed(1)}
          <span className={classes.votes}>
            ({(movie.vote_count / 1000).toFixed(1)} k🗣️)
          </span>
        </span>
      </div>
      <DetailsLink title="Genres" property={movie.genres} />
      <div className={classes[`little-details`]}>
        <h5>Runtime:</h5>
        <span className={classes.gray}>{movie.runtime}m</span>
      </div>
      <DetailsLink title="Release date" property={movie.release_date} />
      <div className={classes[`little-details`]}>
        <h5>Status:</h5>
        <span className={classes.gray}>{movie.status}</span>
      </div>
      <DetailsLink
        title="Production countries"
        property={movie.production_countries}
      />
      <DetailsLink
        title="Production companies"
        property={movie.production_companies}
      />
    </div>
  );
}
