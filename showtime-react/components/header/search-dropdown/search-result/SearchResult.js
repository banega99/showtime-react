import Link from "next/link";
import classes from "./search-result.module.css";

import Image from "next/image";

import { imgPath } from "../../../../shared/imgPath";

import profImg from "../../../../assets/images/profile.jpg";
import { useRouter } from "next/navigation";

export default function SearchResult({ result, setShow, show }) {
  const router = useRouter();
  if (!result) return;
  // console.log(result);
  const type = !!result.genre_ids ? "movie" : "person";
  console.log(type);
  let title = !!result.title ? result.title : result.name;

  const imgSrc =
    (type == "movie" && result.poster_path && imgPath + result.poster_path) ||
    (type == "person" &&
      result.profile_path &&
      imgPath + result.profile_path) ||
    (type == "person" && !result.profile_path && profImg.src);

  const href =
    type == "movie" ? `/movies/${result.id}` : `/person/${result.id}`;

  return (
    <div
      onClick={() => {
        console.log("sasasa");
        router.push(href);
        setShow(false);
      }}
      className={show ? classes.linkCont : classes.hidden}
    >
      <div>
        <div className={classes[`search-card`] + " " + classes[`show-card`]}>
          {!!imgSrc && (
            <Image src={imgSrc} alt="img" width={100} height={150} />
          )}
          {type == "movie" && !result.poster_path && (
            <div className={classes[`img-cover`]}>
              <h2>SHOWTIME</h2>
            </div>
          )}
          <div className={classes.details}>
            <h4>{title}</h4>
            <h5>{type === "movie" ? "Movie" : result.known_for_department}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
