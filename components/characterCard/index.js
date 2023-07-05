import Image from "next/image";
import Link from "next/link";

const CharacterCard = (props) => {
  const { image, name, status,id } = props.character;
  return (
    <Link href={`/${id}`}>
      <div className=" relative bg-text rounded-lg shadow-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <div className="w-48 h-48 mb-4">
          <Image
            src={image}
            width={300}
            height={300}
            className="rounded-lg"
            alt={name}
            placeholder="blur"
            blurDataURL="/grey2.png"
          />
        </div>
        <div className="text-xl font-bold mb-2">
          {name.length > 16 ? name.substring(0, 14) + "..." : name}
        </div>
        <div className="flex justify-center items-center absolute top-0 right-0 border-8 border-background2 bg-text box-content rounded-full  w-10 h-10 translate-x-y">
          {" "}
          <Image
            src={`/${status.toLowerCase()}.png`}
            alt={status}
            width={32}
            height={32}
            className="translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
