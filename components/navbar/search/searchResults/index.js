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
      className=" bg-bgInput transition-all  text-text absolute text-sm top-0 mt-10 z-10 w-full border-2 border-solid border-inputBorder "
    >
      {fil.map((event, index) => {
        return (
          <li
            key={event.id}
            className={`bg-bgInput cursor-pointer leading-6 shadow-md ${
              selected === index ? "bg-selected text-selectedText" : ""
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
