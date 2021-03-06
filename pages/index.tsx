import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import PostContainer from "../components/Posts/PostContainer";
import { Post } from "../prisma/generated/type-graphql";
import Link from "next/link";
import { GET_POSTS_QUERY } from "../graphql/queries/posts";
import ReactLoading from "react-loading";
import { render } from "react-dom";

const Home: NextPage = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
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
    const value = e.target.value;
    setFilter(value);
    const temp = posts.filter(
      (post: Post) =>
        post.title.toLowerCase() == filter.toLowerCase() ||
        post.biome.toLocaleLowerCase() == filter.toLocaleLowerCase() ||
        post.location?.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
    );
    if (value.length <= 0 || temp.length <= 0) {
      setFilteredPosts(posts);
    }
  };

  const populatePosts = () => {
    setFilteredPosts(posts);
  };

  const search = () => {
    if (!filter) {
      return;
    }
    const temp = posts.filter(
      (post: Post) =>
        post.title.toLowerCase() == filter.toLowerCase() ||
        post.biome.toLocaleLowerCase() == filter.toLocaleLowerCase() ||
        post.location?.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
    );
    setFilteredPosts(temp);
  };

  return (
    <div>
      <div className="flex mb-4" onLoad={populatePosts}>
        <div className="flex-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            name="postFilter"
            type="text"
            onChange={handleFilter}
            placeholder="Titulo, Bioma, Ciudad"
          />
        </div>
        <div className="flex-1 ml-2">
          <button
            onClick={search}
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Filtrar
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <Link href={"/posts/register"}>
            <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Nuevo ??tem
            </button>
          </Link>
        </div>
      </div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {filteredPosts && filteredPosts.length > 0 ? (
        <div className="flex flex-wrap">
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((p: Post) => {
              return <PostContainer key={p.id} {...p} />;
            })
          ) : (
            <div>Sin informaci??n para mostrar</div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap">
          {posts && posts.length > 0 ? (
            posts.map((p: Post) => {
              return <PostContainer key={p.id} {...p} />;
            })
          ) : (
            <div>Sin informaci??n para mostrar</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
