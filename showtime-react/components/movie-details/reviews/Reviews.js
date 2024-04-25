import { getMovieReviews } from "../../../lib/movies";
import Review from "./review/Review";
import classes from "./reviews.module.css";

export default async function Reviews({ id }) {
  const data = await getMovieReviews(id);
  const reviews = data.results;
  console.log(reviews);

  return (
    <div className={classes.reviews}>
      <h3
        style={{
          fontSize: "24px",
          color: "white",
          marginTop: "50px",
        }}
      >
        Reviews
        <span className={classes.gray}>
          {" "}
          ({reviews?.length ? reviews?.length : 0})
        </span>
      </h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
