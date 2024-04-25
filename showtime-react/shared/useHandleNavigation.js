import { useRouter } from "next/router";

export default function useHandleNavigation(e, genreClass, movieId) {
  const router = useRouter();
  if (e.target.closest(`.${genreClass}`)) return;
  router.push(`/movies/${movieId}`);
}
