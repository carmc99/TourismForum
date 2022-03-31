import Link from "next/link";
import React from "react";
import { Post } from "../../prisma/generated/type-graphql";

const getScore = (count) => {
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

const PostContainer = (post: Post) => {
  console.log(post);
  return (
    <Link href={"/posts/" + post.id}>
      <div className="sm:w-1/2 md:w-1/2 xl:w-1/4 cursor-pointer">
        <a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
            <div className="p-4 border-t text-xs text-gray-700">
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
          <div className="p-4 flex items-center text-sm text-gray-600">
            {getScore(post.average_score)}
            <span className="ml-2">Estrellas {post.average_score}/5</span>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default PostContainer;
