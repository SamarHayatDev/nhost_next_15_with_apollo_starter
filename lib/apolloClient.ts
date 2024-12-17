import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { nhost } from "./nhost";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await nhost.auth.getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
