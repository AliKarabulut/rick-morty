"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

const PageNumber = ({ totalPages, activePage }) => {
  const [page, setPage] = useState(activePage);
  const router = useRouter();

  const arrayGenerator = (total) => {
    let array = [1];
    if (total > 7 && activePage < 4) {
      for (let i = 2; i < 6; i++) {
        array.push(i);
      }
      array.push("...", total);
    } else if (total > 7 && 4 <= activePage && activePage < totalPages - 3) {
      array.push("...");
      for (let i = activePage - 1; i <= activePage + 1; i++) {
        array.push(i);
      }
      array.push("...", total);
    } else if (total > 7 && activePage >= totalPages - 3) {
      array.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        array.push(i);
      }
    } else {
      for (let i = 2; i < total; i++) {
        array.push(i);
      }
    }
    return array;
  };

  const clickHandler = (value) => {
    if (page + value > 0 && page + value <= totalPages) {
      router.push(`/?page=${page + value}`);
      setPage(page + value);
    }
  };

  const pageHandler = (value) => {
    if (value === "...") {
      return;
    } else {
      router.push(`/?page=${value}`);
      setPage(value);
    }
  };

  return (
    <div className="flex items-center ">
      <LiaLessThanSolid
        onClick={() => clickHandler(-1)}
        className={`text-text dark:text-dark_text dark:hover:text-text cursor-pointer h-8 w-8 mr-1 transition-all ${
          page === 1 ? "opacity-50" : ""
        }`}
      />
      {arrayGenerator(totalPages).map((item, index) => {
        return (
          <button
            onClick={() => pageHandler(item)}
            key={index}
            className={`${
              item === page
                ? "bg-bgCard text-text dark:bg-dark_bgCard dark:text-dark_text dark:hover:text-dark_text  dark:hover:bg-dark_bgCard"
                : item !== "..." &&
                  "text-text dark:text-dark_text  hover:bg-bgCard hover:text-text dark:hover:text-dark_text  dark:hover:bg-dark_bgCard"
            } px-3 py-2 rounded-md text-sm font-medium mx-[2px] transition-all`}
          >
            {item}
          </button>
        );
      })}

      <LiaGreaterThanSolid
        onClick={() => clickHandler(1)}
        className={`text-text dark:text-dark_text  dark:hover:text-text cursor-pointer h-8 w-8 ml-1  transition-all ${
          page === totalPages ? "opacity-50" : ""
        }`}
      />
    </div>
  );
};

export default PageNumber;
