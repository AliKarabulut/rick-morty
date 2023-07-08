"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { actions as userActions } from "@/stores/viewed";

const CharacterCardWrapper = ({ character,children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userActions.addviewed(character));
    router.push(`/${character.id}`);
  };

  return <div onClick={clickHandler}>{children}</div>;
};

export default CharacterCardWrapper;
