import { ApolloClient, InMemoryCache, from, HttpLink, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const AuthLink = (operation, next) => {
    const token = localStorage.getItem('jwt');
    if(token) {
        operation.setContext(context=> ({
            ...context,
            headers: {
                ...context.headers,
                Authorization: `Bearer ${token}`,
            },
        }));
    }
    return next(operation)
}

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
        AuthLink,
        new HttpLink({
            uri: 'http://127.0.0.1:8000/graphql',
            credentials: 'same-origin'
        }),
    ]),
    cache: new InMemoryCache(),
});

export default client;