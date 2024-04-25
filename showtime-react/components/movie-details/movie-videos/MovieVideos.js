"use client";
import { useState, useRef } from "react";
import classes from "./movie-videos.module.css";

import videosRed from "../../../assets/images/videosRed.png";

export default function MovieVideos({ videos }) {
  const [showVideos, setShowVideos] = useState(false);
  const blur = useRef();
  const docRef = useRef(document);

  const getVideos = (num) =>
    videos.slice(0, num).map((element) => {
      let url = `https://www.themoviedb.org/video/play?key=${element?.key}`;
      return url;
    });

  const fourVideos = getVideos(4);
  const nineVideos = getVideos(9);

  function handleShowVideos() {
    setShowVideos((prev) => {
      const curr = !prev;
      if (curr) {
        docRef.current.body.style.overflowY = "hidden";
        blur.current.addEventListener("click", handleShowVideos);
      } else {
        docRef.current.body.style.overflowY = "auto";
        blur.current.removeEventListener("click", handleShowVideos);
      }
      return curr;
    });
  }

  return (
    <>
      <div className={classes.cont}>
        <div onClick={handleShowVideos} className={classes[`trailer-cont`]}>
          <div className={classes["trailer"]}>
            {fourVideos.map((video) => (
              <iframe
                key={video}
                src={video}
                frameBorder={0}
                allowFullScreen
              ></iframe>
            ))}

            <div className={classes["trailer-cover"]}></div>
          </div>
          <h5>
            <span>
              Show{" "}
              <span className={classes.black}>
                {nineVideos.length > 1 ? nineVideos.length : ""}
              </span>
              video{nineVideos.length > 1 ? "s" : ""}
            </span>
            <img src={videosRed.src} alt="videos" width="50px" />
          </h5>
        </div>
        <div
          className={
            !showVideos
              ? classes["videos"]
              : classes["videos"] + " " + classes["videos-show"]
          }
        >
          {nineVideos.map((video) => (
            <iframe
              key={video}
              src={video}
              frameBorder={0}
              allowFullScreen
            ></iframe>
          ))}
          <div onClick={handleShowVideos} className={classes["x"]}></div>
        </div>
        <div onClick={handleShowVideos} className={classes["x2"]}></div>
      </div>
      <div
        ref={blur}
        className={
          !showVideos ? classes.blur : classes.blur + " " + classes[`blur-show`]
        }
      ></div>
    </>
  );
}
