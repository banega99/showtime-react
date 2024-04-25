"use client";

import Link from "next/link";
import { setFilterData } from "../../../redux-store/filter";
import classes from "./filter-item.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import sortRename from "../../../shared/sortRename";

export default function FilterItem({ title, items }) {
  if (title === "Sorted by") items = sortRename(items);
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.filter);
  const [filterItems, setFilterItems] = useState(filterData);
  useEffect(() => {
    setFilterItems(filterItems);
  }, [filterData]);
  console.log(filterData);
  function handleFilter(item) {
    const filterProp =
      (item.id && "genres") ||
      (item.iso_3166_1 && "countries") ||
      (item.iso_639_1 && "languages") ||
      "years";
    const id = item.id || item.iso_3166_1 || item.iso_639_1 || item;
    const property =
      (item.id && "id") ||
      (item.iso_3166_1 && "iso_3166_1") ||
      (item.iso_639_1 && "iso_639_1") ||
      null;
    console.log(item, filterProp, property, id);
    console.log(
      filterData[`${filterProp}`].filter((filtItem) => filtItem != id)
    );
    dispatch(
      setFilterData({
        ...filterData,
        [`${filterProp}`]: filterData[`${filterProp}`].filter(
          (filtItem) => filtItem != id
        ),
      })
    );

    console.log(filterData);
  }
  //   console.log(items);
  return (
    <div className={classes.div}>
      <h3>{title}: </h3>
      {title == "Sorted by" && <h3 style={{ color: "gray" }}>{items}</h3>}
      {(items.length > 0 &&
        title != "Sorted by" &&
        items.map((item, i) => {
          const name = item.name || item.english_name || item;
          const href = {
            pathname: "/filter",
            query: filterData,
          };
          return (
            <div key={i} className={classes.filt}>
              <Link
                onClick={() => handleFilter(item)}
                href={href}
                className={classes.gray + " " + classes.x}
              >
                {name} <span className={classes.del}>&#10006;</span>
              </Link>
              {i != items.length - 1 && (
                <span className={classes.comma}>,</span>
              )}
            </div>
          );
        })) ||
        (items.length == 0 && title != "Sorted by" && (
          <span className={classes.gray}>/</span>
        ))}
    </div>
  );
}
