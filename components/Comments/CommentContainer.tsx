import React from "react";
import { Comment } from "../../prisma/generated/type-graphql";
import { useSession } from "next-auth/react";
import { DELETE_COMMENT } from "../../graphql/mutations/comments";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

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

const CommentContainer = (comment: Comment) => {
  const user = useSession().data;
  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT);
  if (error) {
    toast.error(error.message);
  }

  const canDelete = () => {
    if (comment.user?.name === user?.user?.name) {
      return true;
    }
    return false;
  };
  const submitForm = async (e: any) => {
    e.preventDefault();
    await deleteComment({
      variables: {
        where: {
          id: comment.id,
        },
      },
    });

    toast.success("Comentario eliminado");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <li className="py-2 sm:py-2">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 rounded-full"
            src={comment.user?.image ? comment.user?.image : "/"}
            alt={comment.user?.image ? comment.user?.image : "Not found"}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{comment.user?.name}</p>
          <p className="text-sm text-justify break-normal">
            {comment.description}
          </p>
          <p className="text-sm truncate">{comment.created_at}</p>
        </div>
        <div className="inline-flex items-center font-semibold flex-none w-32">
          {getScore(comment.score)}
        </div>
        <div>
          {canDelete() ? (
            <form onSubmit={submitForm}>
              <button
                className="bg-red-600 hover:bg-red-500 text-white py-2 px-3 mr-4 rounded-full inline-flex items-center"
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
              </button>
            </form>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </li>
  );
};

export default CommentContainer;
