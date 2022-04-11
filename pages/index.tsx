import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import PostContainer from "../components/Posts/PostContainer";
import { Post } from "../prisma/generated/type-graphql";
import Link from "next/link";
import { GET_POSTS_QUERY } from "../graphql/queries/posts";
import ReactLoading from "react-loading";

const Home: NextPage = () => {
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading)
    return (
      <main className="flex items-center justify-center">
        <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
      </main>
    );
  if (error)
    return (
      <main>
        <div>${error.message}</div>
      </main>
    );
  let { posts } = data;

  const handleFilter = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter((values) => ({ ...values, [name]: value }));
  };
  const r = null;

  return (
    <div>
      <div className="flex mb-4">
        <div className="flex-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            name="postFilter"
            type="text"
            onChange={handleFilter}
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
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap">
        {posts && posts.length > 0 ? (
          posts.map((p: Post) => {
            return <PostContainer key={p.id} {...p} />;
          })
        ) : (
          <div>Sin informacion para mostrar</div>
        )}
      </div>
    </div>
  );
};

export default Home;
