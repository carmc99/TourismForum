import React from "react";
import { Post } from "../../prisma/generated/type-graphql";

const PostContainer = (post: Post) => {
  console.log(post);
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
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
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> Hotel
            </span>
            <span className="flex items-center pb-1 font-semi-bold text-sm">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
              {post.hotel.name}
            </span>

            <div className="p-1 border-t  text-xs text-gray-700"></div>
            <span className="flex items-center font-bold mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> Precio
              por noche:
            </span>

            <span className="flex items-center font-semi-bold text-sm">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> $
              {post.hotel.price_per_night} USD
            </span>
            <span className="flex items-center font-bold mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> Incluye
              alimentacion:
            </span>

            <span className="flex items-center font-semi-bold text-sm">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
              {post.hotel.lunch_included}
            </span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center font-bold mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
            Localizacion
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
            {post.location?.name}, {post.location?.country?.name}
          </span>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <span className="ml-2">Estrellas {post.average_score}/5</span>
        </div>
      </a>
    </div>
  );
};

export default PostContainer;
