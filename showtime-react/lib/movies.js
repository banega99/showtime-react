const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

export async function customFetch(url, type) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(`Could not fetch ${type}`);

  const data = await response.json();

  console.log();

  if (type === "genres") return data.genres;

  const genres = await getGenres();

  if (!!data.results || !!data.cast) {
    if (type !== "genres" && type !== "reviews" && type !== "videos") {
      let res = !!data.results ? data.results : data.cast;
      res.map((movie) => {
        let filteredGenres = genres.filter(({ id: id1 }) => {
          return movie.genre_ids?.some((id2) => id1 === id2);
        });
        movie.genre_names = filteredGenres;
        return movie;
      });
    }
    return data;
  }

  return data;
}

export async function getBanner() {
  return await customFetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}`);
}
export async function getTrending() {
  return await customFetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}`);
}
export async function getTopRated() {
  return await customFetch(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}&page=1`
  );
}
export async function getNowPlaying() {
  return await customFetch(
    `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=1`
  );
}
export async function getUpcoming() {
  return await customFetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=1`
  );
}
export async function getPopular() {
  return await customFetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`);
}
export async function getGenres() {
  return await customFetch(
    `${baseUrl}/genre/movie/list?api_key=${apiKey}`,
    "genres"
  );
}
export async function getMovieDetails(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}?api_key=${apiKey}`,
    "details"
  );
}
export async function getPersonDetails(id) {
  return await customFetch(
    `${baseUrl}/person/${id}?api_key=${apiKey}`,
    "details"
  );
}
export async function getMovieImages(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}/images?api_key=${apiKey}`,
    "images"
  );
}
export async function getPersonImages(id) {
  return await customFetch(
    `${baseUrl}/person/${id}/images?api_key=${apiKey}`,
    "images"
  );
}
export async function getAllCountries() {
  return await customFetch(
    `${baseUrl}/configuration/countries?api_key=${apiKey}`,
    "countries"
  );
}
export async function getAllLanguages() {
  return await customFetch(
    `${baseUrl}/configuration/languages?api_key=${apiKey}`,
    "languages"
  );
}
export async function getRecommended(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`,
    "recommended"
  );
}
export async function getMovieCredits(id) {
  return await customFetch(
    `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`,
    "credits"
  );
}

export async function getMovieCast(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`,
    "cast"
  );
}
export async function getMovieReviews(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`,
    "reviews"
  );
}
export async function getMovieVideos(id) {
  return await customFetch(
    `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`,
    "videos"
  );
}
export async function getDataBySearchTerm(type, searchTerm, page) {
  if (searchTerm.trim() !== "")
    return await customFetch(
      `${baseUrl}/search/${type}?api_key=${apiKey}&query=${searchTerm}&page=${page}`,
      "by search term"
    );
}
export async function getMoviesByGenre(id, page) {
  return await customFetch(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`,
    "by genre"
  );
}
export async function getFilter(filter, page) {
  const { genres, years, countries, companies, sort, languages } = filter;

  return await customFetch(
    `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=${sort}&with_genres=${genres}&primary_release_year=${years}&with_original_language=${languages}&with_origin_country=${countries}&with_companies=${companies}&page=${page}`,
    "filter"
  );
}
export async function getMovieLists(movieList, page) {
  return await customFetch(
    `${baseUrl}/movie/${movieList}?api_key=${apiKey}&page=${page}`,
    "movie-lists"
  );
}
