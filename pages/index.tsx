import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import PostContainer from "../components/Posts/PostContainer";
import { Post } from "../prisma/generated/type-graphql";

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
        name,
        lunch_included
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>${error.message}</div>;
  const { posts } = data;
  return (
    <div className="container m-10">
      <div className="flex flex-wrap -mx-4">
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
