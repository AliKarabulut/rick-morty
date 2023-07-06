import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Image from "next/image";

export const dynamicParams = false;
export async function generateStaticParams() {
  const query = gql`
    query Query {
      characters {
        info {
          count
        }
      }
    }
  `;

  const { data } = await getClient().query({ query });

  const staticParams = [];
  for (let index = 0; index < data.characters.info.count; index++) {
    staticParams.push({ id: String(index) });
  }
  return staticParams;
}

const CharacterInfo = async ({ params }) => {
  const query = gql`
    query Query($characterId: ID!) {
      character(id: $characterId) {
        species
        name
        image
        status
        gender
        episode {
          name
        }
        location {
          name
        }
        origin {
          name
        }
      }
    }
  `;

  const { data } = await getClient().query({
    query,
    variables: { characterId: params.id },
  });
  return (
    <div className=" relative w-full h-screen text-center overflow-hidden">
      <h1 className="text-3xl font-bold text-background ">
        {data.character.name}
      </h1>
      <span>({data.character.species})</span>
      <Image
        src={data.character.image}
        alt={data.character.name}
        width={300}
        height={300}
        className="px-4 py-4 rounded-3xl drop-shadow-2xl"
      />

      <div className="text-left">
        <h2>Character Informations</h2>
        <div>
          <div>
            Species: <span>{data.character.species}</span>
          </div>
        </div>
        <div>
          <div>
            Gender: <span>{data.character.gender}</span>
          </div>
        </div>
        <div>
          <div>
            Status: <span>{data.character.status}</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          Last Location: <span>{data.character.location.name}</span>
        </div>
      </div>
      <div>
        <div>
          Origin Location: <span>{data.character.origin.name}</span>
        </div>
      </div>
      <div>
        <h3>EPISODES</h3>
        <ul className="h-1/2 overflow-y-scroll">
          {data.character.episode.map((episode) => {
            return <li>{episode.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
