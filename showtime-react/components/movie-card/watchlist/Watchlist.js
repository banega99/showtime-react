import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../../redux-store/watchlist";

import classes from "./watchlist.module.css";

import watchlistPlus from "../../../assets/images/6748737.png";
import watchlistX from "../../../assets/images/x.png";
export default function WatchlistPopover({ movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);
  const [show, setShow] = useState(
    watchlist.some((watch) => watch.id === movie.id)
  );

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
    <div onClick={handleClick} className={classes.watchlist}>
      <img src={show ? watchlistX.src : watchlistPlus.src}></img>
      <div className={classes.popover}>
        {show ? "Remove from Watchlist" : "Add To Watchlist"}
      </div>
    </div>
  );
}
