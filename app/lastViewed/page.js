"use client";
import CharacterCard from "@/components/characterCard";
import CharacterCardWrapper from "@/components/characterCard/characterCardWrapper";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Lastieved = (props) => {
  const { viewed } = useSelector((state) => state.viewed);
  console.log(viewed);
  return (
    <Fragment>
      {viewed.length === 0 ? (
        <div> You haven't looked at any characters before</div>
      ) : (
        <div className="grid gap-8  justify-items-center lg:px-16 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2">
          {viewed.map((character) => {
            return (
              <CharacterCardWrapper character={character}>
                <CharacterCard character={character} />
              </CharacterCardWrapper>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Lastieved;