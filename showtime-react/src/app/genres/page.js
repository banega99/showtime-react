"use client";

import { useSearchParams } from "next/navigation";
import MoviesGrid from "../../../components/movies-grid/MoviesGrid";

export default function GenresPage() {
  const params = useSearchParams();

  console.log(params.get("name"));
  console.log(params.get("id"));
  console.log(params.getAll("name"));
  return (
    <MoviesGrid
      id={params.get("id")}
      page={params.get("page")}
      name={params.get("name")}
    />
  );
}
