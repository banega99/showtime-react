import Image from "next/image";
import { getBanner } from "../../lib/movies";
import CustomSwiper from "./CustomSwiper";

export default async function MainCarousel() {
  const moviesData = await getBanner();
  console.log(moviesData.results);
  if (!!!moviesData.results) return;

  return <CustomSwiper moviesData={moviesData.results} />;
}
