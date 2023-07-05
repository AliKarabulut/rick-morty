"use client";

import Link from "next/link";

const SearchResults = ({ fil }) => {
  return (
    <ul className=" bg-background3 text-text absolute text-sm top-0 mt-10 px-4 z-10 w-full border-2 border-solid rounded-b-lg shadow-shadow1">
      {fil.map((event) => {
        return (
          <li className="bg-background3 cursor-pointer">
            <Link href={`/${event.id}`}>{event.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
