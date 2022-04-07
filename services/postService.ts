import { STORE_POST } from "../graphql/mutations/posts";
import { useQuery, useMutation } from "@apollo/client";

const [addPost] = useMutation(STORE_POST);

export { addPost };
