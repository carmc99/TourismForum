import { gql } from "@apollo/client";

const STORE_COMMENT = gql`
  mutation CreateComment($data: CommentCreateInput!) {
    createComment(data: $data) {
      post {
        id
      }
      description
      score
      user {
        id
      }
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation DeleteComment($where: CommentWhereUniqueInput!) {
    deleteComment(where: $where) {
      id
    }
  }
`;

export { STORE_COMMENT, DELETE_COMMENT };
