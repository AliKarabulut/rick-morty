import Image from "next/image";
import Link from "next/link";

const CharacterCard = (props) => {
  const { image, name, status, id } = props.character;
  return (
    <Link href={`/${id} `} prefetch={false}>
      <div className=" group relative bg-bgCard rounded-lg shadow-lg p-4 mt-4 cursor-pointer transition duration-300 ease-in-out  hover:shadow-xl hover:scale-105">
        <div className="w-48 h-48 mb-4">
          <Image
            src={image}
            width={300}
            height={300}
            className="rounded-lg transition duration-300 ease-in-out grayscale-[30%] group-hover:grayscale-[0%] group-hover:scale-105 shadow-lg  "
            alt={name}
            placeholder="blur"
            blurDataURL="/grey2.png"
          />
        </div>
        <div className="text-xl font-bold mb-1 text-center text-text">
          {name.length > 16 ? name.substring(0, 14) + "..." : name}
        </div>
        <div className="flex justify-center left-1/2 items-center absolute top-0 border-8 border-bodyBack bg-bodyBack shadow-md shadow-shadow box-content rounded-full  w-10 h-10 translate-x-y">
          {" "}
          <Image
            src={`/${status.toLowerCase()}s.png`}
            alt={status}
            width={40}
            height={40}
          />
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
