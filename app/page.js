import PageNumber from "@/components/UI/pageNumber";
import CharacterCard from "@/components/characterCard";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { Fragment } from "react";

const Page = async ({ searchParams }) => {
  const params = parseInt(searchParams?.page || 1, 10)
  console.log(params)
  const query = gql`
    query Query($page: Int) {
      characters(page: $page) {
        results {
          id
          image
          name
          status
        }
        info {
          pages
          count
        }
      }
    }
  `;

  const { data } = await getClient().query({
    query,
    variables: { page: params },
  });


  return (
    <main className="grid grid-cols-4 gap-8 w-4/5  justify-items-center">
      {data.characters.results.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
      {/* <PageNumber totalPages={data.characters.info.pages} activePage={params} /> */}
    </main>
  );
};
export default Page;
