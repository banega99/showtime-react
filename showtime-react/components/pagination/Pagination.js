import Link from "next/link";

import classes from "./pagination.module.css";

export default function Pagination({ currentPage, totalPages, href }) {
  totalPages = totalPages <= 500 ? totalPages : 500;
  const { pathname, query } = href;
  const pages = [];
  for (let i = currentPage - 3; i < parseInt(currentPage) + 4; i++) {
    if (i > 0 && i < totalPages) {
      pages.push(i);
    }
  }

  return (
    <div className={classes.pages}>
      {currentPage > 1 && (
        <Link
          href={{
            pathname,
            query: { ...query, page: Number(currentPage) - 1 },
          }}
          className={classes.prevNext}
        >
          &larr; Prev Page
        </Link>
      )}
      {currentPage > 1 + 3 && (
        <Link
          className={currentPage == 1 ? classes.active : null}
          href={{ pathname, query: { ...query, page: 1 } }}
        >
          1
        </Link>
      )}
      {currentPage > 1 + 4 && <a>...</a>}
      {pages.map((page, i) => (
        <Link
          className={currentPage == page ? classes.active : null}
          href={{ pathname, query: { ...query, page: page } }}
          key={i}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages - 4 && <a>...</a>}
      <Link
        className={currentPage == totalPages ? classes.active : null}
        href={{
          pathname,
          query: { ...query, page: totalPages },
        }}
      >
        {totalPages}
      </Link>
      {currentPage < totalPages && (
        <Link
          href={{
            pathname,
            query: { ...query, page: Number(currentPage) + 1 },
          }}
          className={classes.prevNext}
        >
          Next Page &rarr;
        </Link>
      )}
    </div>
  );
}
