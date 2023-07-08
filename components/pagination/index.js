"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

const PageNumber = ({ totalPages, activePage }) => {
  const [page, setPage] = useState(activePage);
  const router = useRouter();

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const increasePage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    router.push(`/?page=${page}`);
  }, [page]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const groupSize = 7;
    const currentGroup = Math.ceil(page / groupSize);

    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(currentGroup * groupSize, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      const isCurrentPage = i === page;

      pageNumbers.push(
        <div
          key={i}
          onClick={() => setPage(i)}
          className={`page-number p-2 rounded-md cursor-pointer ${
            isCurrentPage ?  " bg-blue-400 text-white dark:bg-slate-400" : ""
          }`}
        >
          {i}
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center ">
      <LiaLessThanSolid
        onClick={decreasePage}
        className={`text-gray-500 cursor-pointer h-8 w-8 ${
          page === 1 ? "opacity-50" : ""
        }`}
      />
      {renderPageNumbers()}
      <LiaGreaterThanSolid
        onClick={increasePage}
        className={`text-gray-500 cursor-pointer h-8 w-8 ${
          page === totalPages ? "opacity-50" : ""
        }`}
      />
    </div>
  );
};

export default PageNumber;
