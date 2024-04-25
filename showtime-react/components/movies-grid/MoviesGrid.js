// "use server";

import { useEffect, useState } from "react";
import {
  getFilter,
  getMovieLists,
  getMoviesByGenre,
  getDataBySearchTerm,
} from "../../lib/movies";

import classes from "./movies-grid.module.css";
import MovieCard from "../movie-card/MovieCard";
import Pagination from "../pagination/Pagination";
import Sort from "../sort/Sort";
import NotFound from "../not-found/NotFound";
export default function MoviesGrid({
  id,
  page,
  name,
  filter,
  searchTerm,
  type = "genres",
}) {
  const [movies, setMovies] = useState({});
  const [formatedNumber, setFormatedNumber] = useState(0);
  console.log(filter);

  let href = {
    pathname: `/${type == "filter2" ? "filter" : type}`,
    query: {
      page,
    },
  };
  let title = name;

  function makeTitle() {
    let [first, second] = name.split("_");
    first = first.slice(0, 1).toUpperCase() + first.slice(1, first.length);
    second =
      second?.slice(0, 1).toUpperCase() + second?.slice(1, second?.length) ||
      "";
    return first + " " + second;
  }

  switch (type) {
    case "filter":
      href.query = { ...filter, page };
      break;
    case "filter2":
      href.query = { ...filter, page };
      // title = filter.name;
      break;
    case "genres":
      href.query = {
        name,
        id,
        page,
      };
      break;
    case "movie-lists":
      href.query = {
        name,
        page: page,
      };
      title = makeTitle();
      break;
    case "search":
      href.query = {
        name,
        searchTerm,
        page: page,
      };
      title = `"${searchTerm}"`;
  }

  useEffect(() => {
    async function getData() {
      let data;
      switch (type) {
        case "filter" || "filter2":
          data = await getFilter(filter, page);
          break;
        case "genres":
          data = await getMoviesByGenre(id, page);
          break;
        case "movie-lists":
          data = await getMovieLists(name, page);
          break;
        case "search":
          data = await getDataBySearchTerm("movie", searchTerm, page);
          break;
      }
      console.log(data);
      setMovies(data);
      setFormatedNumber(
        new Intl.NumberFormat(navigator.language).format(
          Number(data.total_results)
        )
      );
    }
    getData();
  }, [id, page, filter, searchTerm]);

  if (movies?.results?.length == 0) return <NotFound title="Movie not found" />;

  return (
    <>
      <div className={classes.titleCont}>
        <h2 className={classes.title}>
          <span style={{ color: "rgb(49, 58, 73)" }}>{title} </span>
          Movies{" "}
          {!!movies.total_results && (
            <span className={classes.gray}>({formatedNumber})</span>
          )}
        </h2>
        <Sort movies={movies} setMovies={setMovies} />
      </div>

      <div className={classes.genreGrid}>
        {movies.results &&
          movies.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={!!movies.total_pages && movies.total_pages}
        href={href}
      />
    </>
  );
}
