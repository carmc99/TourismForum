import { GET_COUNTRIES } from "../graphql/queries/countries";
import { useQuery, useMutation } from "@apollo/client";

const getCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "cache-and-network",
  });
  const load = loading;
  const err = error;
  const countriesData = data;
  return { load, err, countriesData };
};

export { getCountries };
