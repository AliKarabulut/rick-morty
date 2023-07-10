import CharacterCard from "@/components/characterCard";
import CharacterCardWrapper from "@/components/characterCard/characterCardWrapper";
import PageNumber from "@/components/pagination";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { Fragment } from "react";
import { notFound } from "next/navigation";
const Page = async ({ searchParams }) => {
  const params = isNaN(Number(searchParams.page))
    ? 1
    : Number(searchParams.page);

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
  if (data.characters.results.length === 0) {
    notFound();
  }
  return (
    <Fragment>
      <main className="grid gap-8 justify-items-center lg:px-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {data.characters.results.map((character) => (
          <CharacterCardWrapper character={character} key={character.id + 1000}>
            <CharacterCard character={character} key={character.id} />
          </CharacterCardWrapper>
        ))}
      </main>
      <div className="flex justify-center my-8">
        <PageNumber
          totalPages={data.characters.info.pages}
          activePage={params}
        />
      </div>
    </Fragment>
  );
};
export default Page;
