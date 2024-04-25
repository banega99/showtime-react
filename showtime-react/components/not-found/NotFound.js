import Link from "next/link";
import classes from "./not-found.module.css";

export default function NotFound({ title }) {
  return (
    <div className={classes.notFound}>
      <h3>{title}</h3>
      <Link href="/">return to homepage</Link>
    </div>
  );
}
