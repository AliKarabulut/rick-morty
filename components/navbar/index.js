import Image from "next/image";
import Search from "./search";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { ApolloWrapper } from "@/lib/apollo-provider";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 pb-2 shadow-md mb-4">
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
      <Link href="https://github.com/AliKarabulut/rick-morty" target="_blank">
        <LuGithub className="w-5 h-5 " />
      </Link>
    </nav>
  );
};
export default Navbar;
