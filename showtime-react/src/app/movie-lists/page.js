"use client";

import { useSearchParams } from "next/navigation";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";

export default function MovieListsPage() {
  const params = useSearchParams();

  console.log(params.get("name"));

  console.log(params.getAll("name"));
  return (
    <MoviesGrid
      page={params.get("page")}
      type="movie-lists"
      name={params.get("name")}
    />
  );
}
