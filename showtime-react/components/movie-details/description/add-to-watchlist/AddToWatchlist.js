"use client";
import Image from "next/image";

import classes from "./add-to-watchlist.module.css";
import watchPlus from "../../../../assets/images/watchRed.png";
import watchMinus from "../../../../assets/images/xRed2.png";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../../../redux-store/watchlist";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AddToWatchlist({ movie }) {
  const watchlist = useSelector((state) => state.watchlist);
  //   const show = watchlist.some((watch) => watch.id === movie.id);
  const [show, setShow] = useState(
    watchlist.some((watch) => watch.id === movie.id)
  );
  console.log(watchlist);
  const dispatch = useDispatch();

  function handleClick() {
    if (show) {
      dispatch(removeFromWatchlist(movie));
      setShow(false);
    } else {
      dispatch(addToWatchlist(movie));
      setShow(true);
    }

    console.log("clicked");
  }
  return (
    <div className={classes.watchlist} onClick={handleClick}>
      <h4>
        {!show ? "Add To Watchlist" : "Remove from Watchlst"}
        <Image
          src={show ? watchMinus.src : watchPlus.src}
          alt="watch plus"
          width="20"
          height="25"
        />
      </h4>
    </div>
  );
}
