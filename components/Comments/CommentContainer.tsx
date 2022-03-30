import React from "react";
import { Comment } from "../../prisma/generated/type-graphql";

const CommentContainer = (comment: Comment) => {
  return (
    <div>
      <div>{comment.user?.name}</div>
      <div>{comment.description}</div>
      <div>{comment.score}</div>
      <div>{comment.created_at}</div>
    </div>
  );
};

export default CommentContainer;
