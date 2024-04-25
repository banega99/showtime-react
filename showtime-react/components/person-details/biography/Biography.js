import classes from "./biography.module.css";

export default function Biography({ biography }) {
  return (
    <div className={classes.biography}>
      <h3>Biography</h3>
      <p>{biography}</p>
    </div>
  );
}
