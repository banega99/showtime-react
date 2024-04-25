"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./filter-input.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterData,
  setGenres,
  setCountries,
  setLanguages,
  setYears,
} from "../../../redux-store/filter";

export default function FilterInput({
  type,
  name,
  id,
  property,
  setQuery,
  uncheck,
  setChecked,
}) {
  const input = useRef();
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.filter);
  const [items, setItem] = useState(filterData);
  // const [check, setCheck] = useState(false);

  function genericSet() {
    if (property === "genres") return setGenres;
    if (property === "years") return setYears;
    if (property === "languages") return setLanguages;
    if (property === "countries") return setCountries;
  }

  function handleChange(e) {
    setChecked(true);
    const set = {
      payload: {
        value: e.target.value,
        checked: e.target.checked,
      },
    };
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
        name={name}
        value={id}
        onChange={handleChange}
        // checked={check}
      />
      <label htmlFor={id}>{name}</label>
    </li>
  );
}
