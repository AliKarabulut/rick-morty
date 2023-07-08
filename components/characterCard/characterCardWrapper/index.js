"use client";
import { useDispatch } from "react-redux";
import { actions as userActions } from "@/stores/viewed";

const CharacterCardWrapper = ({ character, children }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userActions.addviewed(character));
  };

  return (
    <div
      onClick={clickHandler}
      className=" group relative bg-bgCard dark:bg-dark_bgCard rounded-lg shadow-lg p-4 mt-4 cursor-pointer transition duration-300 ease-in-out  hover:shadow-xl hover:scale-105"
    >
      {children}
    </div>
  );
};

export default CharacterCardWrapper;
