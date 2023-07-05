import Image from "next/image";
import Search from "./search";

const Navbar = (props) => {
  return (
    <nav className="w-full">
      <Image src="/logo.png" width={50} height={55} />
      <Search/>
    </nav>
  );
};
export default Navbar;
