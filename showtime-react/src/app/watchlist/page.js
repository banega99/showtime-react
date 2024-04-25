"use client";
import { useSelector } from "react-redux";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";
import { useEffect, useState } from "react";

import classes from "./page.module.css";
import MovieCard from "../../../components/movie-card/MovieCard";
export default function Watchlist() {
  //   const watchlist = useSelector((state) => state.watchlist);
  const watchlistState = useSelector((state) => state.watchlist);
  const [watchlist, setWatchlist] = useState(watchlistState);

  useEffect(() => {
    setWatchlist(watchlistState);
  }, [watchlistState]);

  return (
    <>
      <h2 className={classes.title}>
        Watchlist <span className={classes.gray}>({watchlist.length})</span>
      </h2>
      <div className={classes.genreGrid}>
        {!!watchlist &&
          watchlist.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
}
