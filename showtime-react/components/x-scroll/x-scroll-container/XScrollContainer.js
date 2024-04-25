import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../../lib/movies";
import XScroll from "../XScroll";

export default async function XScrollContainer() {
  const popularMovies = await getPopular();
  const upcomingMovies = await getUpcoming();
  const nowPlayingMovies = await getNowPlaying();
  const topRatedMovies = await getTopRated();

  return (
    <>
      <XScroll movies={popularMovies.results} title="Popular Movies"></XScroll>
      <XScroll
        movies={upcomingMovies.results}
        title="Upcoming Movies"
      ></XScroll>
      <XScroll
        movies={nowPlayingMovies.results}
        title="Now Playing Movies"
      ></XScroll>
      <XScroll
        movies={topRatedMovies.results}
        title="Top Rated Movies"
      ></XScroll>
    </>
  );
}
