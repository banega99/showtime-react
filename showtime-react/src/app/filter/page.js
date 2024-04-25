"use client";

import { useSearchParams } from "next/navigation";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";
import { useEffect } from "react";
import FilterDetails from "../../../components/filter-details/FilterDetails";
import { useDispatch, useSelector } from "react-redux";
export default function FilterPage() {
  // const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.filter);
  const params = useSearchParams();
  console.log(filterData);

  // function getParams(type) {
  //   return params.has(type) ? params.getAll(type) : "";
  // }
  useEffect(() => {}, [filterData]);

  // const filter = {
  //   genres: getParams("genres"),
  //   years: getParams("years"),
  //   countries: getParams("production_countries") || getParams("countries"),
  //   companies: getParams("production_companies"),
  //   sort: getParams("sort"),
  //   languages: getParams("languages"),
  // };

  const { genres, years, countries, companies, sort, languages, page } =
    filterData;

  return (
    <>
      <FilterDetails
        genres={genres}
        years={years}
        countries={countries}
        languages={languages}
      />
      <MoviesGrid page={params.get("page")} type="filter" filter={filterData} />
    </>
  );
}
