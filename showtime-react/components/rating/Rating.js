import classes from "./rating.module.css";

export default function MovieRating({ rating }) {
  const ratingClass =
    (rating >= 9 && classes.green) ||
    (rating >= 7 && rating < 9 && classes.lightgreen) ||
    (rating >= 5 && rating < 7 && classes.greenyellow) ||
    (rating >= 3 && rating < 5 && classes.yellow) ||
    (rating < 3 && rating > 0 && classes.red);

  return (
    <div className={`${classes.rating + " " + ratingClass}`}>
      <span className={classes.star}>⭐</span>
      {rating.toFixed(1)}
    </div>
  );
}
