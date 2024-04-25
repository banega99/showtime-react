"use client";

import { useSearchParams } from "next/navigation";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";
import { useEffect } from "react";
import FilterDetails from "../../../components/filter-details/FilterDetails";
import { useDispatch, useSelector } from "react-redux";
export default function FilterPage() {
  // const dispatch = useDispatch();
  let filterData = useSelector((state) => state.filter.filter);
  const params = useSearchParams();

  // useEffect(() => {}, [filterData]);

  function getParams(type) {
    return params.has(type) ? params.getAll(type) : "";
  }

  if (
    params.has("production_countries") ||
    params.has("production_companies") ||
    params.has("years")
  ) {
    filterData = {
      genres: getParams("genres"),
      years: getParams("years"),
      countries: getParams("production_countries") || getParams("countries"),
      companies: getParams("production_companies"),
      sort: getParams("sort"),
      languages: getParams("languages"),
    };
    return (
      <MoviesGrid
        page={params.get("page")}
        name={params.has("years") ? params.get("years") : params.get("name")}
        type="filter"
        filter={filterData}
      />
    );
  } else {
    // filterData = useSelector((state) => state.filter.filter);
    const { genres, years, countries, companies, sort, languages, page } =
      filterData;
    return (
      <>
        <FilterDetails
          genres={genres}
          years={years}
          countries={countries}
          languages={languages}
          sort={sort}
        />
        <MoviesGrid
          page={params.get("page")}
          type="filter"
          filter={filterData}
        />
      </>
    );
  }

  // const filter = {
  //   genres: getParams("genres"),
  //   years: getParams("years"),
  //   countries: getParams("production_countries") || getParams("countries"),
  //   companies: getParams("production_companies"),
  //   sort: getParams("sort"),
  //   languages: getParams("languages"),
  // };
}
