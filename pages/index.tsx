import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import PostContainer from "../components/Posts/PostContainer";
import { Post } from "../prisma/generated/type-graphql";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

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
  if (loading) return <div>Loading...</div>;
  if (error) return <div>${error.message}</div>;
  const { posts } = data;
  return (
    <div>
      <div className="flex flex-row mx-4 mb-6">
        <div className="basis 1/2">
          <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={true}
            placeholder="Buscar"
          />
        </div>
        <div className="basis 1/2">
          <Button color="blue" size="lg" ripple="dark" type="submit">
            Filtrar
          </Button>
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
