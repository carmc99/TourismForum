import { gql } from "@apollo/client";
const GET_USER_QUERY = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      name
      email
      emailVerified
      image
      created_at
      updated_at
      role {
        name
      }
      profile {
        phone
        address
        image
        gender
        country {
          name
        }
      }
    }
  }
`;

export { GET_USER_QUERY };
