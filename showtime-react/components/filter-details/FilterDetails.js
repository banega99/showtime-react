import { getAllCountries, getAllLanguages, getGenres } from "../../lib/movies";
import classes from "./filter-details.module.css";
import FilterItem from "./filter-item/FilterItem";

export default async function FilterDetails({
  genres,
  years,
  countries,
  languages,
  sort,
}) {
  const allGenres = await getGenres();
  const allCountries = await getAllCountries();
  const allLanguages = await getAllLanguages();

  let genresNames = [];
  let languagesNames = [];
  let countriesNames = [];

  if (genres?.length > 0)
    genres?.map((genre, i) =>
      genresNames.push(
        allGenres.filter((filterGenre) => filterGenre.id == genre)[0]
      )
    );
  if (countries?.length > 0)
    countries?.map((country, i) =>
      countriesNames.push(
        allCountries.filter(
          (filterCountry) => filterCountry.iso_3166_1 == country
        )[0]
      )
    );
  if (languages?.length > 0)
    languages?.map((language, i) =>
      languagesNames.push(
        allLanguages.filter(
          (filterLanguage) => filterLanguage.iso_639_1 == language
        )[0]
      )
    );

  return (
    <div className={classes.details}>
      <FilterItem title="Genres" items={genresNames} />
      <FilterItem title="Year of release" items={years} />
      <FilterItem title="Country production" items={countriesNames} />
      <FilterItem title="Language" items={languagesNames} />
      <FilterItem title="Sorted by" items={sort} />
    </div>
  );
}
