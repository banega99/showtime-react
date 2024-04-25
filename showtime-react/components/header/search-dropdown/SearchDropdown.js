// 'use server'

import { useEffect, useState } from "react";
import { getDataBySearchTerm, getMovieByTitle } from "../../../lib/movies";
import SearchResult from "./search-result/SearchResult";

import classes from "./search-dropdown.module.css";
export default function SearchDropdown({ type, searchTerm, show, setShow }) {
  const [data, setData] = useState([]);

  type = type === "All" ? "multi" : type.toLowerCase();

  useEffect(() => {
    getDataBySearchTerm(type, searchTerm, 1).then((data) => {
      if (!!!data) return;
      setData(data.results?.slice(0, 4));
    });
    setShow(true);
    if (searchTerm.trim() === "") {
      setShow(false);
      setData([]);
    }
  }, [searchTerm]);
  //   console.log(movies);

  return (
    data && (
      <div
        className={
          show === false
            ? classes[`search-dropdown`]
            : classes[`search-dropdown`] + " " + classes[`search-show`]
        }
      >
        {data &&
          data.map((result) => (
            <SearchResult
              key={result.id}
              type={type}
              result={result}
              setShow={setShow}
              show={show}
            />
          ))}
      </div>
    )
  );
}
