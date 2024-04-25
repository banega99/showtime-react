"use client";
import Link from "next/link";
import classes from "./details-link.module.css";

function propToString(string) {
  return string.split(" ").join("_").toLowerCase();
}

export default function DetailsLink({ title, property }) {
  const propString =
    (propToString(title) === "genres" && "id") ||
    (propToString(title).includes("release") && "year") ||
    propToString(title);

  // console.log(property)

  if (propString === "year") {
    const years = property.split("-")[0];
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat(
      navigator.language,
      options
    ).format(new Date(property));

    const href = {
      pathname: "/filter",
      query: {
        years,
        page: 1,
      },
    };

    return (
      <div className={classes[`little-details`]}>
        <h5>{title}: </h5>
        <span className={classes.gray}>
          {formattedDate.slice(formattedDate, -6)}
        </span>
        <Link href={href}>{years}</Link>
      </div>
    );
  }

  return (
    <div className={classes[`little-details`]}>
      <h5>{title}: </h5>
      {property &&
        property.map((link) => {
          const mainProp =
            (propString.includes("countries") && link.iso_3166_1) ||
            (propString.includes("release") && year) ||
            link.id;
          //   console.log(mainProp);
          const query = {
            [`${propString}`]: mainProp,
            name: link.name ? link.name : "",
            page: 1,
          };

          const href = {
            pathname: title == "Genres" ? `/genres` : "/filter",
            query,
          };

          return (
            <Link
              key={propString.includes("countries") ? mainProp : link.id}
              href={href}
            >
              {link.name}
            </Link>
          );
        })}
    </div>
  );
}
