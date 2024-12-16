"use client";
import { client } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

const ApolloProviderContext = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderContext;
