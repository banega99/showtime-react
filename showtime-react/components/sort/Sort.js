import classes from "./sort.module.css";

export default function Sort({ movies, setMovies }) {
  function handleChange(e) {
    let sortedMovies;
    switch (e.target.value) {
      case "1":
        sortedMovies = [...movies.results].sort(
          (a, b) => b.popularity - a.popularity
        );
        break;
      case "2":
        sortedMovies = [...movies.results].sort(
          (a, b) => a.popularity - b.popularity
        );
        break;
      case "3":
        sortedMovies = [...movies.results].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        break;
      case "4":
        sortedMovies = [...movies.results].sort(
          (a, b) => a.vote_average - b.vote_average
        );
        break;
      case "5":
        sortedMovies = [...movies.results].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "6":
        sortedMovies = [...movies.results].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      default:
        sortedMovies = [...movies.results];
    }
    setMovies({ ...movies, results: sortedMovies });
  }

  return (
    <div className={classes[`sort-cont`]}>
      <h5 className={classes[`sort-text`]}>Sort by:</h5>
      <select
        onChange={handleChange}
        name="sort"
        id="sort"
        className={classes.classic}
      >
        <option value="1">Popularity descending &darr;</option>
        <option value="2">Popularity ascending &uarr;</option>
        <option value="3">Rating descending &darr;</option>
        <option value="4">Rating ascending &uarr;</option>
        <option value="5">A-Z &darr;</option>
        <option value="6">Z-A &uarr;</option>
      </select>
    </div>
  );
}
