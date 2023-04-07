
import { ApolloServer } from '@apollo/server';

const typeDefinitions = `#graphql
    type Post {
        id: Int
        text: String
    }

    type RootQuery {
        posts: [Post]
    }

    schema {
        query: RootQuery
    }
 `;

 export default [typeDefinitions];