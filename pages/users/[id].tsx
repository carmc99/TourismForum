import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { User } from "../../prisma/generated/type-graphql";
import { useQuery, gql } from "@apollo/client";

const GET_USER_QUERY = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      name
      email
      emailVerified
      image
      created_at
      updated_at
      role {
        name
      }
      profile {
        phone
        address
        image
        gender
        country {
          name
        }
      }
    }
  }
`;

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
  if (loading) return <div>Loading...</div>;
  if (error) return <div>${error.message}</div>;
  const user = data.user;
  console.table(user);
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
