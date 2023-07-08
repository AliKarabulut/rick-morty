import Image from "next/image";
import Search from "./search";
import Link from "next/link";
import { ApolloWrapper } from "@/lib/apollo-provider";
import DarkMode from "./darkMode";
import { cookies } from "next/headers";
import { LuGithub } from "react-icons/lu";
import {FaEye} from "react-icons/fa";

const Navbar = () => {
  const theme = cookies().get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <nav className="w-full flex justify-between items-center px-4 pt-2 pb-2 shadow-md shadow-shadow dark:shadow-dark_shadow mb-4 bg-navBack dark:bg-dark_navBack">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="rick nad morty"
          width={50}
          height={55}
          className="drop-shadow-md hover:cursor-pointer transform scale-x-[-1]"
        />
      </Link>
      <ApolloWrapper>
        <Search />
      </ApolloWrapper>
      <DarkMode theme={theme} />
      <Link href="lastviewed" className="flex items-center">
        <FaEye className="w-5 h-5 mx-2 text-icon dark:text-dark_icon" /> <span className="max-sm:hidden">Looked</span>
      </Link>
      <Link href="https://github.com/AliKarabulut/rick-morty" target="_blank">
        <LuGithub className="w-5 h-5 text-icon dark:text-dark_icon" />
      </Link>
    </nav>
  );
};
export default Navbar;
