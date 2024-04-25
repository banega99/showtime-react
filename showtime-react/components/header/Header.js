"use client";

import Link from "next/link";
import classes from "./header.module.css";
import SearchDropdown from "./search-dropdown/SearchDropdown";
import { useEffect, useState } from "react";
import SearchInput from "./search-input/SearchInput";
import DropdownMenu from "../dropdown-menu/DropdownMenu";
import { getGenres } from "../../lib/movies";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState([]);
  const [type, setType] = useState("All");
  const [show, setShow] = useState(false);

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
        <nav className={classes.nav}>
          <div className={classes[`nav-item`]}>
            <Link href="/watchlist">Watchlist</Link>
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
