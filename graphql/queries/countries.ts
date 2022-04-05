import { gql } from "@apollo/client";
const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      id
    }
  }
`;

export { GET_COUNTRIES };
