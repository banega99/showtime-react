"use client";

import { useEffect, useRef } from "react";
import classes from "./filter-input.module.css";
import { useDispatch } from "react-redux";
import {
  setFilterData,
  setGenres,
  setCountries,
  setLanguages,
  setYears,
  setSort,
} from "../../../redux-store/filter";
import sortRename from "../../../shared/sortRename";

export default function FilterInput({
  type,
  name,
  id,
  property,
  uncheck,
  setChecked,
}) {
  const input = useRef();
  const dispatch = useDispatch();

  if (property === "sort") name = sortRename(name);

  function genericSet() {
    if (property === "genres") return setGenres;
    if (property === "years") return setYears;
    if (property === "languages") return setLanguages;
    if (property === "countries") return setCountries;
    if (property === "sort") return setSort;
  }

  function handleChange(e) {
    console.log(e.target.value);
    setChecked(true);
    dispatch(
      genericSet()({ value: e.target.value, checked: e.target.checked })
    );
  }

  useEffect(() => {
    if (!uncheck) input.current.checked = false;
  }, [uncheck]);

  return (
    <li className={classes.input}>
      <input
        ref={input}
        type={type}
        id={id}
        name={property == "sort" ? "sort" : name}
        value={id}
        onChange={handleChange}
        // onClick={() => console.log("sort")}
        // checked={check}
      />
      <label htmlFor={id}>{name}</label>
    </li>
  );
}
