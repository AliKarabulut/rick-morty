"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  let timerId;
  const requestHandler = (event) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setSearch(event.target.value);
    }, 150);
  };

  const GET_CHARACTERS = gql`
    query GetCharacters($name: String!) {
      characters(filter: { name: $name }) {
        results {
          name
        }
      }
    }
  `;

  const { data } = useSuspenseQuery(GET_CHARACTERS, {
    variables: { name: search },
  });
  
  useEffect(() => {
    setFilteredCharacters(data.characters.results)
  }, [data])
  

  return (
    <div className="flex leading-7 relative items-center basis-2/5">
      <BsSearch className="absolute left-4 text-icon w-4 h-4" />
      <input
        onChange={requestHandler}
        type="text"
        placeholder="Search"
        className="w-full h-10 leading-7 px-4 pl-10 border-2 border-solid border-transparent rounded-lg outline-none bg-slate-100 text-text transition-all placeholder:text-background focus:outline-none focus:border-b-yellow-700 focus:bg-white focus:shadow-shadow1 hover:outline-none hover:border-b-yellow-700 hover:bg-white hover:shadow-shadow1"
      />
    </div>
  );
};

export default Search;
