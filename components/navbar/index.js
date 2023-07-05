import Image from "next/image";
import Search from "./search";
import { LuGithub } from "react-icons/lu";
const Navbar = (props) => {
  return (
    <nav className="w-full flex justify-between items-center px-4 pb-2">
      <Image src="/logo.png" alt="rick nad morty" width={50} height={55} />
      <Search />
      <LuGithub className="w-5 h-5 " />
    </nav>
  );
};
export default Navbar;
