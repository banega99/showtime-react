import Image from "next/image";
import classes from "./page.module.css";
import MainCarousel from "../../components/carousel/Carousel";
import XScroll from "../../components/x-scroll/XScroll";
import XScrollContainer from "../../components/x-scroll/x-scroll-container/XScrollContainer";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <main className={classes.main}>
        <XScrollContainer />
      </main>
    </>
  );
}
