"use client";
import { list } from "postcss";
import { useState } from "react";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

const PageNumber = ({ totalPages, activePage }) => {
  const [page, setPage] = useState(totalPages);

  const array = Array(7).fill(1);
// console.log(array)
  return (
    <div className="flex items-center">
      <LiaLessThanSolid />
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <LiaGreaterThanSolid />
    </div>
  );
};
export default PageNumber;
