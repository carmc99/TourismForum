import { gql } from "@apollo/client";

const STORE_POST = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      biome
      title
      description
      image
      average_score
      author {
        id
      }
      location {
        id
      }
      hotel {
        id
      }
    }
  }
`;

export { STORE_POST };
