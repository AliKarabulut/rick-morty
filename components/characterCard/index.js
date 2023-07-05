import Image from "next/image";
import Link from "next/link";

const CharacterCard = (props) => {
  const { image, name, status } = props.character;
  return (
    <Link href={`/${name}`}>
      <Image src={image} width={300} height={300} alt={name} placeholder="blur" blurDataURL="/grey2.png"/>
      <div>{name}</div>
      <Image src={`/${status.toLowerCase()}.png`} alt={status} width={32} height={32}/>
    </Link>
  );
};
export default CharacterCard;
