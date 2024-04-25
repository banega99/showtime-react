import classes from "./person.module.css";

import { imgPath } from "../../../shared/imgPath";
import profileImage from "../../../assets/images/profile.jpg";
import Image from "next/image";
import Link from "next/link";
export default function Person({ person }) {
  const src = !!person.profile_path
    ? imgPath + person.profile_path
    : profileImage;

  return (
    <>
      <div className={classes.actor}>
        <Image src={src} alt="profile pic" width={100} height={150} />
        <div className={classes.details}>
          {!!person.name && <h5>{person.name}</h5>}
          {!!person.known_for_department && (
            <h6 style={{ color: "rgb(49, 58, 73)" }}>
              {person.known_for_department}
            </h6>
          )}
          {!!person.known_for && <h6>{person.known_for[0]?.title}</h6>}
        </div>
        <Link href={`/person/${person.id}`} />
      </div>
    </>
  );
}
