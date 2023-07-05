import CharacterCard from "@/components/characterCard";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const Page = async ({ searchParams }) => {
  const params = searchParams?.page || 1;
  const query = gql`
  {
    characters(page: ${params}) {
      results {
        id
        name
        image
        status
      }
    }
  }`;

  const { data } = await getClient().query({ query });

  return data.characters.results.map((character) => (
    <CharacterCard character={character} key={character.id} />
  ));
};
export default Page;
