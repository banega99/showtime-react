import Image from "next/image";
import loadingImg from "../../assets/images/tapeRed.png";

import classes from "./loading.module.css";
export default function Loading() {
  return (
    <div className={classes.loading}>
      <Image src={loadingImg} width={100} />
      <h3>Loading...</h3>
    </div>
  );
}
