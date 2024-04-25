import { getDataBySearchTerm } from "../../lib/movies";
import Person from "./person/Person";
import classes from "./persons.module.css";
import Pagination from "../pagination/Pagination";
import NotFound from "../not-found/NotFound";

export default async function Persons({ type, name, searchTerm, page }) {
  const persons = await getDataBySearchTerm("person", searchTerm, page);
  let href = {
    pathname: `/${type}`,
    query: {
      searchTerm,
      name,
      page,
    },
  };

  if (persons?.results?.length == 0)
    return <NotFound title="Person not found" />;

  return (
    <div className={classes.actors}>
      <h2>
        People by name{" "}
        <span style={{ color: "rgb(49, 58, 73)" }}>"{searchTerm}" </span>
        <span className={classes.gray}>({persons.total_results})</span>
      </h2>
      <div className={classes.row}>
        {!!persons.results &&
          persons.results.map((person) => (
            <Person key={person.id} person={person} />
          ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={!!persons.total_pages && persons.total_pages}
        href={href}
      />
    </div>
  );
}
