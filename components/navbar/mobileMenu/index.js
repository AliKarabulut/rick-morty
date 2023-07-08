"use client";
import { Fragment, useRef, useState } from "react";
import DarkMode from "../darkMode";
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { VscMenu, VscClose } from "react-icons/vsc";
import Link from "next/link";

const MobileMenu = ({ theme }) => {
  const [show, setShow] = useState(false);
  
  const showNavBar = () => {
    setShow((prev) => !prev);
  };

  return (
    <Fragment>
      {" "}
      <div className={`flex gap-5  max-sm:absolute max-sm:w-50 max-sm:h-fit max-sm:w-[50%]  max-sm:py-20 max-sm:flex max-sm:items-center max-sm:justify-end max-sm:flex-col  max-sm:bg-navBack dark:max-sm:bg-dark_navBack z-30 max-sm:animate-menu max-sm:shadow-2xl max-sm:shadow-shadow max-sm:rounded-es-full  ${show ? "max-sm:right-0 max-sm:top-0  " : "max-sm:hidden max-sm:top-[-350px] max-sm:right-[-50px]"}`}>
        <DarkMode theme={theme} className="ml-20"/>
        <Link href="/looked" onClick={showNavBar} className="flex items-center max-sm:ml-12">
          <FaEye className="w-5 h-5 mx-2 text-icon dark:text-dark_icon max-sm:hidden" />{" "}
          <span className=" text-dark_selectedText">Looked</span>
        </Link>
        <Link href="https://github.com/AliKarabulut/rick-morty" target="_blank"  onClick={showNavBar} className="max-sm:ml-12 max-sm:pb-8">
          <LuGithub className="w-5 h-5 text-icon dark:text-dark_icon" />
        </Link>
      </div>
      {show ? (
        <VscClose className="sm:hidden cursor-pointer z-50 h-6 w-6 animate-menuButton " onClick={showNavBar} />
      ) : (
        <VscMenu className="sm:hidden cursor-pointer z-50 h-6 w-6 " onClick={showNavBar} />
      )}
    </Fragment>
  );
};
export default MobileMenu;
