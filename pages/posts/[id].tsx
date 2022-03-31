import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import PostContainerExtended from "../../components/Posts/PostContainerExtended";
import Comments from "../../components/Comments/Comments";

const GET_POST_QUERY = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      title
      biome
      description
      image
      average_score
      created_at
      updated_at
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
        name
        price_per_night
        lunch_included
        image
      }
      comments {
        user {
          name
          image
        }
        score
        description
        created_at
        updated_at
      }
    }
  }
`;

const Profile: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    variables: {
      where: {
        id: id,
      },
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>${error.message}</div>;
  const post = data.post;
  console.table(post.comments);
  return (
    <div className="flex flex-wrap">
      <Head>
        <title>{id}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContainerExtended {...post} />

      <Comments key={post.id} comments={post.comments} />
    </div>
  );
};

export default Profile;
