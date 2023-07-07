import CharacterCard from "@/components/characterCard";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const Page = async ({ searchParams }) => {
  const params = parseInt(searchParams?.page || 1, 10);
  console.log(params);
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
    <main className="grid gap-8  justify-items-center lg:px-16 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2">
      {data.characters.results.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
      {/* <PageNumber totalPages={data.characters.info.pages} activePage={params} /> */}
    </main>
  );
};
export default Page;
