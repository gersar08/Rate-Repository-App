import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
console.log('Apollo Client OK')
  const httpLink = new HttpLink({
    uri: "http://192.168.1.6:4000/graphql", // Reemplaza con la URL de tu servidor GraphQL
  });

  const cache = new InMemoryCache();

  return new ApolloClient({
    link: httpLink,
    cache: cache,
  });
};

export default createApolloClient;
