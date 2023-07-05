"use client";
import { useState } from "react";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";
const PageNumber = ({ number }) => {
  const [page, setPage] = useState(number);
  return (
    <div className="flex items-center">
      <LiaLessThanSolid />
      {number}
      <LiaGreaterThanSolid />
    </div>
  );
};
export default PageNumber;
