import React from "react";
import { Comment } from "../../prisma/generated/type-graphql";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";

const Comments = (props) => {
  const postId = props.id;
  const comments = props.comments;
  return (
    <div className="w-full p-3 text-md text-gray-700 shadow-md">
      <ul
        role="list"
        className="divide-y divide-gray-400 dark:divide-gray-300 overflow-y-auto h-64"
      >
        {comments &&
          comments.map((comment: Comment) => {
            return <CommentContainer key={comment.id} {...comment} />;
          })}
      </ul>
      <CommentForm key={postId} posId={postId} />
    </div>
  );
};

export default Comments;
