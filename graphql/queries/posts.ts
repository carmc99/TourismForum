import { gql } from "@apollo/client";
const GET_POSTS_QUERY = gql`
  {
    posts {
      id
      biome
      description
      title
      image
      average_score
      author {
        name
      }
      location {
        name
        country {
          name
        }
      }
      hotel {
        price_per_night
        name
        lunch_included
      }
    }
  }
`;
const GET_POST_QUERY = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      title
      biome
      description
      image
      average_score
      created_at
      updated_at
      author {
        name
      }
      location {
        name
        country {
          id
          name
        }
      }
      hotel {
        name
        price_per_night
        lunch_included
        image
      }
      comments {
        id
        user {
          name
          image
        }
        score
        description
        created_at
        updated_at
      }
    }
  }
`;

export { GET_POSTS_QUERY, GET_POST_QUERY };
