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

export { STORE_COMMENT };
