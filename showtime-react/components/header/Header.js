"use client";

import Link from "next/link";
import classes from "./header.module.css";
import SearchDropdown from "./search-dropdown/SearchDropdown";
import { useEffect, useRef, useState } from "react";
import SearchInput from "./search-input/SearchInput";
import DropdownMenu from "../dropdown-menu/DropdownMenu";
import { getGenres } from "../../lib/movies";

import watchlistLogo from "../../assets/images/watchRed.png";
import BurgerButton from "../burger-button/BurgerButton";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState([]);
  const [type, setType] = useState("All");
  const [show, setShow] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const line = useRef();
  const docRef = useRef(document);

  docRef.current.addEventListener("scroll", handleScroll);

  function handleScroll() {
    let winScroll =
      docRef.current.body.scrollTop || docRef.current.documentElement.scrollTop;
    let height =
      docRef.current.documentElement.scrollHeight -
      docRef.current.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    setLineWidth(scrolled);
  }

  useEffect(() => {
    async function getData() {
      setGenres(await getGenres());
    }
    getData();
    // console.log(genres);
  }, []);

  return (
    <>
      <header className={classes.header}>
        <div className={classes[`logo`]}>
          <Link href="/">SHOWTIME</Link>
        </div>
        <nav
          className={
            showNav ? classes.nav + " " + classes.showNav : classes.nav
          }
        >
          {/* <div className={classes[`nav-item`]}>
            
          </div> */}

          <div className={classes[`nav-item`] + " " + classes.watchlist}>
            <Link href="/watchlist">
              Watchlist
              <img src={watchlistLogo.src} alt="watchlist" />
            </Link>
          </div>
          <div className={classes[`nav-item`]}>
            <DropdownMenu label="Genres" type="genres">
              {!!genres &&
                genres.map((genre) => {
                  const href = {
                    pathname: `/genres`,
                    query: {
                      name: genre.name,
                      id: genre.id,
                      page: 1,
                    },
                  };

                  return (
                    <li key={genre.id}>
                      <Link href={href}>{genre.name}</Link>
                    </li>
                  );
                })}
            </DropdownMenu>
          </div>
          <div className={classes[`nav-item`]}>
            <SearchInput
              type={type}
              setType={setType}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setShow={setShow}
            />
          </div>
        </nav>
        <div
          ref={line}
          style={{ width: `${lineWidth}%` }}
          className={classes.line}
        ></div>
        <BurgerButton setShowNav={setShowNav} />
      </header>
      <SearchDropdown
        show={show}
        setShow={setShow}
        type={type}
        searchTerm={searchTerm}
      />
    </>
  );
}
