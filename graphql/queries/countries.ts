import { gql } from "@apollo/client";
const GET_COUNTRIES = gql`
  query Countries($orderBy: [LocationOrderByWithRelationInput!]) {
    countries {
      id
      name
      locations(orderBy: $orderBy) {
        id
        name
      }
    }
  }
`;

export { GET_COUNTRIES };
