import Image from "next/image";

const CharacterCard = (props) => {
  const { image, name, status} = props.character;
  return (
    <div className=" group relative bg-bgCard dark:bg-dark_bgCard rounded-lg shadow-lg p-4 mt-4 cursor-pointer transition duration-300 ease-in-out  hover:shadow-xl hover:scale-105">
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
      <div className="text-xl font-bold mb-1 text-center text-text dark:text-dark_text">
        {name.length > 16 ? name.substring(0, 14) + "..." : name}
      </div>
      <div className="flex justify-center left-1/2 items-center absolute top-0 border-8 border-bodyBack dark:border-dark_bodyBack bg-bodyBack dark:bg-dark_bodyBack shadow-md shadow-shadow dark:shadow-dark_shadow box-content rounded-full  w-10 h-10 translate-x-y">
        {" "}
        <Image
          src={`/${status.toLowerCase()}s.png`}
          alt={status}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
