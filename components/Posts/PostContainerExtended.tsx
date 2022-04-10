import React from "react";
import { useRouter } from "next/router";
import { Post } from "../../prisma/generated/type-graphql";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DELETE_POST } from "../../graphql/queries/posts";
import { DELETE_COMMENTS } from "../../graphql/mutations/comments";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const getScore = (count: number) => {
  let content = [];
  for (let index = 0; index < count; index++) {
    content.push(
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current text-yellow-500"
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
      </svg>
    );
  }

  for (let index = count; index < 5; index++) {
    content.push(
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current text-gray-400"
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
      </svg>
    );
  }

  return content;
};

const PostContainerExtended = (post: Post) => {
  const user = useSession().data;
  const [deletePost, { loading, error }] = useMutation(DELETE_POST);
  const [deleteComments] = useMutation(DELETE_COMMENTS);
  const router = useRouter();
  if (loading)
    return (
      <main className="flex items-center justify-center">
        <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
      </main>
    );

  const canModify = () => {
    if (post.author?.name === user?.user?.name) {
      return true;
    }
    return false;
  };

  const submitFormDelete = async (e) => {
    e.preventDefault();

    
    await deleteComments({
      variables: {
        where: {
          post: {
            is: {
              id: {
                equals: post.id,
              },
            },
          },
        },
      },
    });

    await deletePost({
      variables: {
        where: {
          id: post.id,
        },
      },
    });

    toast.success("Post eliminado");
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <div className="w-full shadow-md">
      <a className="c-card block bg-white rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={post.image}
            alt=""
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {post.biome}
          </span>
          <h2 className="mt-2 mb-2  font-bold">{post.title}</h2>
          <p className="text-sm">{post.description}</p>
        </div>
        {post.hotel ? (
          <div className="p-3 border-t text-xs text-gray-700">
            <span className="flex items-center font-bold mb-1">
              <i className="fas fa-concierge-bell fa-fw mr-2 text-gray-900"></i>{" "}
              Hotel
            </span>
            <span className="flex items-center pb-2 font-semi-bold text-sm">
              {post.hotel.name}
            </span>

            <div className="p-1 border-t text-xs text-gray-700"></div>
            <span className="flex items-center font-bold mb-1">
              <i className="fas fa-hand-holding-usd fa-fw mr-2 text-gray-900"></i>{" "}
              Precio por noche:
            </span>

            <span className="flex items-center font-semi-bold pb-2">
              {" "}
              <h2>${post.hotel.price_per_night} USD</h2>
            </span>
            <div className="p-1 border-t text-xs text-gray-700"></div>
            <span className="flex items-center font-bold mb-1">
              <i className="fas fa-utensils fa-fw mr-2 text-gray-900"></i>{" "}
              Alimentacion incluida:
            </span>

            <span className="flex items-center font-semi-bold text-sm">
              {post.hotel.lunch_included ? <div>Si</div> : <div>No</div>}
            </span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="p-3 border-t border-b text-xs text-gray-700">
          <span className="flex items-center font-bold mb-1">
            <i className="fas fa-globe-americas fa-fw mr-2 text-gray-900"></i>{" "}
            Localizacion
          </span>
          <span className="flex items-center">
            {post.location?.name}, {post.location?.country?.name}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="p-4 flex items-center text-sm text-gray-600">
            {getScore(post.average_score)}
            <span className="ml-2">Estrellas {post.average_score}/5</span>
          </div>

          {canModify() ? (
            <div className="flex flex-row p-4 text-sm text-gray-600">
              <Link href={"/posts/edit/" + post.id}>
                <button className="hover:text-yellow-400 text-yellow-500 font-bold py-2 px-2 mr-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <span className="pl-1">Editar</span>
                </button>
              </Link>

              <form onSubmit={submitFormDelete}>
                <button
                  className="hover:text-red-400 text-red-600 font-bold py-2 px-2 mr-1 inline-flex items-center"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span className="pl-1">Eliminar</span>
                </button>
              </form>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </a>
    </div>
  );
};

export default PostContainerExtended;
