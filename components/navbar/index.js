import Image from "next/image";
import Search from "./search";
import Link from "next/link";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { cookies } from "next/headers";

import MobileMenu from "./mobileMenu";

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
      <MobileMenu theme={theme}/>
    </nav>
  );
};
export default Navbar;
