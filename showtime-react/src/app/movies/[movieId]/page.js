import MovieDetails from "../../../../components/movie-details/MovieDetails";
import { getMovieDetails } from "../../../../lib/movies";

import classes from "./page.module.css";

export default async function MovieDetailsPage({ params }) {
  const movieDetails = await getMovieDetails(params.movieId);
  console.log(movieDetails, params.movieId);
  return (
    <main className={classes}>
      <MovieDetails movie={movieDetails} />
    </main>
  );
}
