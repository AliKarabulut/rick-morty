"use client";

import Link from "next/link";

const SearchResults = ({ fil }) => {
  return (
    <ul className=" bg-background3 transition-all  text-background absolute text-sm top-0 mt-10 px-4 z-10 w-full border-2 border-solid border-text rounded-b-lg">
      {fil.map((event) => {
        return (
          <li
            key={event.id}
            className="bg-background3 cursor-pointer leading-6"
          >
            <Link prefetch={false} href={`/${event.id}`} className="block">
              {event.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
