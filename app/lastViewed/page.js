"use client";
import CharacterCard from "@/components/characterCard";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Lastieved = (props) => {
  const { viewed } = useSelector((state) => state.viewed);
  fetch("/api/getCharacter", {
    method: "POST",
    body: JSON.stringify(),
  })
  
  
 
  return (
    <Fragment>
      {viewed.length === 0 ? (
        <div> You haven't looked at any characters before</div>
      ) : (
        <div className="grid gap-8  justify-items-center lg:px-16 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2">
          {viewed.map((character) => {
           return <CharacterCard character={character} />;
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Lastieved;
