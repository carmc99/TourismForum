import React from "react";
import { Comment } from "../../prisma/generated/type-graphql";
import CommentContainer from "./CommentContainer";

const Comments = (props) => {
  const { comments } = props;
  console.log(comments);
  return (
    <div className="w-full">
      <div>Lista de comentarios:</div>
      <div>
        {comments &&
          comments.map((comment: Comment) => {
            return (
              <div className="p-3 border-t border-b text-md text-gray-700">
                <CommentContainer key={comment.id} {...comment} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
