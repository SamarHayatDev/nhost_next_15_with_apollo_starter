import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { nhost } from "./nhost";

const httpLink = createHttpLink({
  uri: "https://ngnpvbdevhrykamgfomm.graphql.ap-south-1.nhost.run/v1",
});

const authLink = setContext(async (_: any, { headers }: any) => {
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
