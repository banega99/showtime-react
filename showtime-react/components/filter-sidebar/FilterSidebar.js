"use client";

import classes from "./filter-sidebar.module.css";

import arrowLeft from "../../assets/images/guideWhite_left.png";
import arrowRight from "../../assets/images/guideWhite_right.png";
import DropdownMenu from "../dropdown-menu/DropdownMenu";
import { useEffect, useState } from "react";
import { getAllCountries, getAllLanguages, getGenres } from "../../lib/movies";
import FilterInput from "./filter-input/FilterInput";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterData, setFilterData } from "../../redux-store/filter";

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.filter);
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);
  const sort = [
    "vote_average.desc",
    "vote_average.asc",
    "popularity.desc",
    "popularity.asc",
  ];
  const [checked, setChecked] = useState(true);
  let years = [];
  for (let i = new Date().getFullYear(); i >= 1900; i--) {
    years.push(i);
  }

  useEffect(() => {
    async function getData() {
      setCountries(await getAllCountries());
      setLanguages(await getAllLanguages());
      setGenres(await getGenres());
    }
    getData();
  }, []);

  const href = {
    pathname: "/filter",
    query: {
      page: 1,
    },
  };

  function enableButton() {
    let trueFalse = [];

    Object.values(filterData).forEach((val, i) => {
      if (i != 6) {
        if (val?.length == 0) {
          trueFalse.push(false);
        } else trueFalse.push(true);
      }
    });
    return trueFalse.some((value) => value);
  }

  function handleReset() {
    console.log("Resetting");
    setChecked(false);
    dispatch(resetFilterData());
  }

  function handleClick() {
    dispatch(setFilterData(filterData));
  }

  return (
    <>
      <div onClick={() => setShow((prev) => !prev)} className={classes.guide}>
        <div className={classes["white-cover"]}></div>
        <div className={classes["arrow"]}>
          <img
            id="toggleArrow"
            src={!show ? arrowLeft.src : arrowRight.src}
            alt="sss"
          />
          <div className={classes["letters"]}>
            <p>F</p>
            <p>I</p>
            <p>L</p>
            <p>T</p>
            <p>E</p>
            <p>R</p>
          </div>
        </div>
        <div className={classes["buttons"]}></div>
      </div>
      <div
        className={
          show ? classes.filter + " " + classes[`filter-show`] : classes.filter
        }
      >
        <DropdownMenu label="Genres">
          {!!genres &&
            genres.map((genre) => {
              return (
                <FilterInput
                  key={genre.id}
                  property="genres"
                  name={genre.name}
                  id={genre.id}
                  type="checkbox"
                  uncheck={checked}
                  setChecked={setChecked}
                />
              );
            })}
        </DropdownMenu>
        <DropdownMenu label="Year">
          {!!years &&
            years.map((year) => {
              return (
                <FilterInput
                  key={year}
                  property="years"
                  name={year}
                  id={year}
                  type="checkbox"
                  uncheck={checked}
                  setChecked={setChecked}
                />
              );
            })}
        </DropdownMenu>
        <DropdownMenu label="Country">
          {!!countries &&
            countries.map((country) => {
              return (
                <FilterInput
                  key={country.iso_3166_1}
                  property="countries"
                  name={country.english_name}
                  id={country.iso_3166_1}
                  type="checkbox"
                  uncheck={checked}
                  setChecked={setChecked}
                />
              );
            })}
        </DropdownMenu>
        <DropdownMenu label="Language">
          {!!languages &&
            languages.map((language) => {
              return (
                <FilterInput
                  key={language.iso_639_1}
                  property="languages"
                  name={language.english_name}
                  id={language.iso_639_1}
                  type="checkbox"
                  uncheck={checked}
                  setChecked={setChecked}
                />
              );
            })}
        </DropdownMenu>
        <DropdownMenu type="sort" label="Sort by">
          {!!sort &&
            sort.map((sort, i) => {
              return (
                <FilterInput
                  key={i}
                  property="sort"
                  name={sort}
                  id={sort}
                  type="radio"
                  uncheck={checked}
                  setChecked={setChecked}
                />
              );
            })}
        </DropdownMenu>
        <div>
          <button
            onClick={handleClick}
            disabled={!enableButton()}
            className={`${classes.btn} ${classes[`filter-btn`]}`}
          >
            {!enableButton() ? "Filter" : <Link href={href}>Filter</Link>}
          </button>
          <button
            onClick={handleReset}
            className={`${classes.btn} ${classes[`reset-btn`]}`}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
