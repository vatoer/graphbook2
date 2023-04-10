import { ApolloClient, InMemoryCache, from, HttpLink, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const client = new ApolloClient({
    link: from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) => {
                    console.log(`[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
                });
                if (networkError) {
                    console.log(`[Network eror]: ${networkError}`)
                }
            }
        }),
        new HttpLink({
            uri: 'http://127.0.0.1:8000/graphql'
        }),
    ]),
    cache: new InMemoryCache(),
});

export default client;