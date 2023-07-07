"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useRef, useState } from "react";
import { gql } from "@apollo/client";
import { BsSearch } from "react-icons/bs";
import SearchResults from "./searchResults";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  let timerId;
  const requestHandler = (event) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setSearch(event.target.value);
    }, 75);
  };

  const GET_CHARACTERS = gql`
    query GetCharacters($name: String!) {
      characters(filter: { name: $name }) {
        results {
          name
          id
        }
      }
    }
  `;

  const { data } = useSuspenseQuery(GET_CHARACTERS, {
    variables: { name: search },
  });

  useEffect(() => {
    setFilteredCharacters(data.characters.results);
  }, [data]);

  const blurHandler = () => {
    setTimeout(() => {
      setActive(false);
    }, 150);
    inputRef.current.blur();
  };

  return (
    <div className="flex leading-7 relative items-center sm:basis-5/12 md:basis-7/12 lg:basis-5/12 2xl:basis-2/5  ">
      <BsSearch className="absolute left-4 text-icon dark:text-dark_icon w-4 h-4 z-30" />
      <input
        ref={inputRef}
        onChange={requestHandler}
        onFocus={() => setActive(true)}
        onBlur={blurHandler}
        type="text"
        placeholder="Search"
        spellCheck="false"
        className="capitalize w-full h-10 leading-7 z-20 px-4 pl-10 border-2 border-solid border-transparent rounded-lg outline-none text-text dark:text-dark_text transition-all bg-bgInput dark:bg-dark_bgInput placeholder:text-placeholderColor dark:placeholder:text-dark_placeholderColor focus:outline-none focus:border-inputBorder dark:focus:border-dark_inputBorder focus:bg-bgInput dark:focus:bg-dark_bgInput dark:bg-dark_bgInput focus:border-b-0 focus:rounded-b-none focus:transition-none hover:outline-none hover:border-inputBorder dark:hover:border-dark_inputBorder hover:bg-bgInput dark:hover:bg-dark_bgInput  "
      />
      {active && (
        <SearchResults fil={filteredCharacters} onClose={blurHandler} />
      )}
    </div>
  );
};

export default Search;
