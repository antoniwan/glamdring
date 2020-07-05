import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedUser {
      id
      email
      name
      permissions
      checkout {
        id
        quantity
        car {
          id
          price
          image {
            publicUrlTransformed
          }
          name
          description
        }
      }
    }
  }
`;

function useUser() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  if (data) {
    return data.authenticatedUser;
  }
}

export { CURRENT_USER_QUERY, useUser };
