import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import PostContainerExtended from "../../components/Posts/PostContainerExtended";
import Comments from "../../components/Comments/Comments";
import { GET_POST_QUERY } from "../../graphql/queries/posts";
import ReactLoading from "react-loading";

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
  if (loading)
    return (
      <div className="flex items-center justify-center">
        <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
      </div>
    );
  if (error) return <div>${error.message}</div>;
  const post = data.post;
  return (
    <div className="flex flex-wrap">
      <Head>
        <title>{id}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContainerExtended {...post} />

      <Comments key={post.id} {...post} />
    </div>
  );
};

export default Profile;
