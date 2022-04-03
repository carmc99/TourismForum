import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import PostContainer from "../components/Posts/PostContainer";
import { Post } from "../prisma/generated/type-graphql";
import Link from "next/link";

const GET_POST_QUERY = gql`
  {
    posts {
      id
      biome
      description
      title
      image
      average_score
      author {
        name
      }
      location {
        name
        country {
          name
        }
      }
      hotel {
        price_per_night
        name
        lunch_included
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading)
    return (
      <main>
        <div>Loading...</div>
      </main>
    );
  if (error)
    return (
      <main>
        <div>${error.message}</div>
      </main>
    );
  const { posts } = data;
  return (
    <div>
      <div className="flex mb-4">
        <div className="flex-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            id="inline-full-name"
            type="text"
            placeholder="Filtrar"
          />
        </div>
        <div className="flex-1 ml-2">
          <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Filtrar
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <Link href={"/posts/register"}>
            <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Nuevo item
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap mx-4">
        <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {posts &&
          posts.map((p: Post) => {
            return <PostContainer {...p} />;
          })}
      </div>
    </div>
  );
};

export default Home;
