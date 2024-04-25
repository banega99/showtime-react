"use client";

import classes from "./person-details.module.css";
import PersonPhoto from "./person-photo/PersonPhoto";
import { imgPath } from "../../shared/imgPath";

import profileImage from "../../assets/images/profile.jpg";
import MoreDetails from "./more-details/MoreDetails";
import Biography from "./biography/Biography";
import XScroll from "../x-scroll/XScroll";
import { useState } from "react";
import Gallery from "./gallery/Gallery";

export default function PersonDetails({ person, images, credits }) {
  const [showGallery, setShowGallery] = useState(false);

  const img = person.profile_path
    ? imgPath + person.profile_path
    : profileImage;
  console.log(images);

  return (
    <div id="person" className={classes.cont}>
      <div className={classes.details}>
        <PersonPhoto
          image={img}
          images={images}
          setShowGallery={setShowGallery}
          showGallery={showGallery}
        />
        <MoreDetails
          name={person.name}
          birthday={person.birthday}
          department={person.known_for_department}
          placeOfBirth={person.place_of_birth}
          deathday={person.deathday}
          popularity={person.popularity}
        />
      </div>
      {!!person.biography && <Biography biography={person.biography} />}
      <XScroll movies={credits} title="Appears in Movies" />
      <Gallery posters={images} showGallery={showGallery} />
    </div>
  );
}
