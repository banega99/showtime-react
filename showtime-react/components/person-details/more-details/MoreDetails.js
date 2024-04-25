import classes from "./more-details.module.css";

export default function MoreDetails({
  name,
  department,
  birthday,
  placeOfBirth,
  deathday,
  popularity,
}) {
  let resultsYear = parseInt(birthday?.split("-")[0]);
  let actorThisYear = new Date(
    [String(new Date().getFullYear())]
      .concat(birthday?.split("-").slice(1, birthday.split("-").length))
      .join("-")
  );
  let yearsOld = new Date().getFullYear() - resultsYear;
  if (new Date().getTime() < actorThisYear.getTime()) yearsOld -= 1;
  // if (!deathday) return;
  let yearsOldDead =
    deathday &&
    parseInt(deathday?.split("-")[0]) - parseInt(birthday?.split("-")[0]);

  return (
    <div className={classes[`details-more`]}>
      {!!name && (
        <h3>
          <span className={classes.white}>Name: </span>
          <span className={classes.red}>{name}</span>
        </h3>
      )}
      {!!department && (
        <h3>
          <span className={classes.white}>Department: </span>
          <span>{department}</span>
        </h3>
      )}
      {!!birthday && (
        <h3>
          <span className={classes.white}>Birthday: </span>
          <span>
            {birthday}
            {!deathday && <span> ({yearsOld})</span>}
          </span>
        </h3>
      )}
      {!!placeOfBirth && (
        <h3>
          <span className={classes.white}>Place of birth: </span>
          <span>{placeOfBirth}</span>
        </h3>
      )}
      {!!deathday && (
        <h3>
          <span className={classes.white}>Date of death: </span>
          <span>
            {deathday}
            {deathday && <span> ({yearsOldDead})</span>}
          </span>
        </h3>
      )}
      {!!popularity && (
        <h3>
          <span className={classes.white}>Popularity: </span>
          <span>{popularity}</span>
        </h3>
      )}
    </div>
  );
}
