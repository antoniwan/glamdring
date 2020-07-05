import React from "react";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "../styles/PaginationStyles";
import { perPage } from "../config";
import Error from "./ErrorMessage";

const PAGINATION_QUERY = ``;

function Pagination({ page }) {
  const { error, loading, data } = [{}, {}, {}];
  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;
  const count = 0;
  const pages = Math.ceil(count / perPage);
  return (
    <PaginationStyles data-testid="pagination">
      <Head>
        <title>
          Page {page} / {pages}
        </title>
      </Head>
      <Link
        href={{
          pathname: "used-cars",
          query: { page: page - 1 },
        }}
      >
        <a className="prev" aria-disabled={page <= 1}>
          Previous
        </a>
      </Link>
      <p>
        Page {page} /{" "}
        <span className="totalPages" data-testid="totalPages">
          {pages}
        </span>
      </p>
      <p>{count} Cars Total</p>
      <Link
        href={{
          pathname: "used-cars",
          query: { page: page + 1 },
        }}
      >
        <a className="next" aria-disabled={page >= pages}>
          Next
        </a>
      </Link>
    </PaginationStyles>
  );
}

export default Pagination;
export { PAGINATION_QUERY };
