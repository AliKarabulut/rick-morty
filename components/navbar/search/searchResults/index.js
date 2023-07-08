"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { actions as userActions } from "@/stores/viewed";

const SearchResults = ({ fil, onClose }) => {
  const router = useRouter();
  const ulRef = useRef(null);
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();
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

  const handleRoute = (event) => {
    dispatch(userActions.addviewed(event));
    router.push(`/${event.id}`);
  };

  return (
    <ul
      ref={ulRef}
      className=" bg-bgInput dark:bg-dark_bgInput transition-all  text-text dark:text-dark_text absolute text-sm top-0 mt-10 z-10 w-full border-2 border-solid border-inputBorder dark:border-dark_inputBorder "
    >
      {fil.map((event, index) => {
        return (
          <li
            onClick={() => handleRoute(event)}
            key={event.id}
            className={`bg-bgInput dark:bg-dark_bgInput cursor-pointer leading-6 shadow-md ${
              selected === index
                ? "bg-selected dark:bg-dark_selected text-selectedText dark:text-dark_selectedText"
                : ""
            }`}
          >
            {event.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
