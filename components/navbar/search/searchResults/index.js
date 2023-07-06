"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SearchResults = ({ fil, onClose }) => {
  const router = useRouter();
  const ulRef = useRef(null);
  const [selected, setSelected] = useState(-1);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setSelected((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setSelected((prev) => (prev < fil.length - 1 ? prev + 1 : prev));
        break;
      case "Enter":
        router.push(`/${fil[selected].id}`);
        onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <ul
      ref={ulRef}
      className=" bg-background3 transition-all  text-background absolute text-sm top-0 mt-10 z-10 w-full border-2 border-solid border-text "
    >
      {fil.map((event, index) => {
        return (
          <li
            key={event.id}
            className={`bg-background3 cursor-pointer leading-6 ${
              selected === index ? "bg-slate-300" : ""
            }`}
          >
            <Link prefetch={false} href={`/${event.id}`} className="block ml-4">
              {event.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
