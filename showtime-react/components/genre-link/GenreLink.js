import Link from "next/link";

export default function GenreLink({ genre }) {
  const href = {
    pathname: `/genres`,
    query: {
      name: genre.name,
      id: genre.id,
      page: 1,
    },
  };

  return (
    <li key={genre.id}>
      <Link href={href}>{genre.name}</Link>
    </li>
  );
}
