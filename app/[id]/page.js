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

export async function generateMetadata({ params }) {
  const query = gql`
    query Query($characterId: ID!) {
      character(id: $characterId) {
        name
      }
    }
  `;

  const { data } = await getClient().query({
    query,
    variables: { characterId: params.id },
  });

  return {
    description: `${data.character.name}'s information page from Rick and Morty Api`,
  };
}

const getData = async (id) => {
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
    variables: { characterId: id },
  });

  return data;
};

const CharacterInfo = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className=" w-full  text-center  grid grid-cols-1  lg:grid-cols-[repeat(2,minmax(auto,auto))] ">
      <h1 className=" text-3xl font-bold text-background lg:col-start-1 lg:col-end-3 mb-8 max-sm:mb-4 ">
        {data.character.name}
      </h1>

      <div className=" grid grid-cols-[repeat(2,minmax(auto,auto))] max-sm:grid-cols-1 w-fit max-sm:justify-items-center max-sm:w-full  ml-8 max-sm:ml-0 ">
        <div className="rounded-l-3xl rounded-r-2xl w-80 ">
          <Image
            src={data.character.image}
            alt={data.character.name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/grey2.png"
            className="rounded-l-3xl rounded-r-2xl transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <div className="ml-8 text-left max-sm:ml-0 max-sm:mt-4 ">
          <h2 className="text-xl font-bold max:smtext-center">
            Character Informations
          </h2>
          <div className="gap-4 mt-4 grid grid-cols-2">
            <div>
              <p className="text-gray-500">Species</p>
              <p className="text-lg font-semibold">{data.character.species}</p>
            </div>
            <div>
              <p className="text-gray-500">Gender</p>
              <p className="text-lg font-semibold">{data.character.gender}</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-lg font-semibold">{data.character.status}</p>
            </div>
            <div>
              <p className="text-gray-500">Last Location</p>
              <p className="text-lg font-semibold">
                {data.character.location.name}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Origin Location</p>
              <p className="text-lg font-semibold">
                {data.character.origin.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="place-self-end max-lg:place-self-auto lg:mr-8 ">
        <h3 className="text-xl font-medium mb-4 text-gray-700 max-lg:mt-6">EPISODES</h3>
        <ul className="text-left max-lg:flex flex-wrap  gap-2 max-lg:mx-7  lg:eHeight overflow-y-auto ">
          {data.character.episode.map((episode, index) => {
            const bgColor = index % 2 === 0 ? "bg-li1" : "bg-li2";
            return (
              <li
                key={index}
                className={`mb-2 lg:mx-4 grow rounded-lg p-2 transition ease-in-out duration-300 transform hover:scale-105 cursor-pointer ${bgColor}`}
              >
                {episode.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
