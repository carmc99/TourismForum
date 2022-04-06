import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "../../graphql/queries/users";
import ReactLoading from "react-loading";

const Profile: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
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
  const user = data.user;
  return (
    <div className="flex flex-wrap">
      <Head>
        <title>{id}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full justify-center items-center overflow-hidden ">
        <div className="relative h-40">
          <img
            className="absolute h-full w-full object-cover"
            src={user.image}
          />
        </div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img className="object-cover w-full h-full" src={user.image} />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold">{user.name}</h1>
          <p className="text-sm text-gray-600 text-center">{user.email}</p>
          <p className="text-sm text-gray-600 text-center">{user.role?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
