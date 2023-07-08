"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { actions as userActions } from "@/stores/viewed";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchResults = ({ fil, onClose }) => {
  const ulRef = useRef(null);
  const router = useRouter();
  const [selected, setSelected] = useState(-1);
  const [entered, setEntered] = useState(false);

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
        dispatch(userActions.addviewed(fil[selected]));
        onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", entered ?  null: handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const dispatchHandler = (event) => {
    dispatch(userActions.addviewed(event));
  };

  return (
    <ul
      ref={ulRef}
      className=" bg-bgInput dark:bg-dark_bgInput transition-all  text-text dark:text-dark_text absolute text-sm top-0 mt-10 z-10 w-full border-2 border-solid border-inputBorder dark:border-dark_inputBorder "
    >
      {fil.map((event, index) => {
        return (
          <li
            onClick={() => dispatchHandler(event)}
            onMouseEnter={() => {setSelected(index) , setEntered(true)}}
            onMouseLeave={() =>  setEntered(false)}
            key={event.id}
            className={`bg-bgInput dark:bg-dark_bgInput cursor-pointer leading-6 pl-4 py-[3px] hover:bg-selected dark:hover:bg-dark_selected hover:text-selectedText dark:hover:text-dark_selectedText ${
              selected === index
                ? "bg-selected dark:bg-dark_selected text-selectedText dark:text-dark_selectedText"
                : ""
            }`}
          >
            <Link href={`/${event.id}`} prefetch={false}>
              {event.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
