"use client";

import { useSearchParams } from "next/navigation";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";
import Persons from "../../../components/persons/Persons";
import { useEffect } from "react";

export default function SearchPage() {
  const params = useSearchParams();

  console.log(params.get("name"));
  console.log(params.get("searchTerm"));
  console.log(params.getAll("name"));

  useEffect(() => {}, [params.get("searchTerm")]);

  if (params.get("name") === "multi")
    return (
      <>
        <Persons
          name="multi"
          type="search"
          searchTerm={params.get("searchTerm")}
          page={params.get("page")}
        />
        <MoviesGrid
          searchTerm={params.get("searchTerm")}
          page={params.get("page")}
          name="multi"
          type="search"
        />
      </>
    );
  else if (params.get("name") === "movie")
    return (
      <MoviesGrid
        searchTerm={params.get("searchTerm")}
        page={params.get("page")}
        name="movie"
        type="search"
      />
    );
  else
    return (
      <Persons
        searchTerm={params.get("searchTerm")}
        page={params.get("page")}
      />
    );
}
