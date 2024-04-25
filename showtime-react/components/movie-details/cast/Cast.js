import Link from "next/link";
import classes from "./cast.module.css";

import { imgPath } from "../../../shared/imgPath";

import profPic from "../../../assets/images/profile.jpg";

export default function Cast({ cast }) {
  console.log(cast);
  return (
    <>
      <h3
        style={{
          fontSize: "24px",
          color: "white",
          marginTop: "50px",
        }}
      >
        Cast
        <span className={classes.gray}>
          {" "}
          ({cast?.length ? cast?.length : 0})
        </span>
      </h3>
      <div className={classes.cast}>
        {cast.map((actor) => {
          const imgSrc = actor.profile_path
            ? imgPath + actor.profile_path
            : profPic.src;

          return (
            <Link className={classes.actor} href={`/person/${actor.id}`}>
              <img src={imgSrc} alt={actor.name} className={classes.img} />
              <div className={classes.details}>
                <h4>{actor.name}</h4>
                <h6>{actor.known_for_department}</h6>
                <p>{actor.character}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
