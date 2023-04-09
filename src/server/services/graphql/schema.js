
import { ApolloServer } from '@apollo/server';

const typeDefinitions = `#graphql

    type User {
        id: Int
        avatar: String
        username: String
    }

    type Post {
        id: Int
        text: String
        user: User
    }

    type Message {
        id: Int
        text: String
        chat: Chat
        user: User
    }

    type Chat {
        id: Int
        messages: [Message]
        users: [User]
    }

    type RootQuery {
        posts: [Post]
        chats: [Chat]
        chat(chatId: Int): Chat
    }

    input PostInput {
        text: String!
    }

    input UserInput {
        username: String!
        avatar: String!
    }

    input ChatInput {
        users: [Int]
    }

    type RootMutation {
        addPost (
            post: PostInput!
        ): Post
        addChat (
            chat: ChatInput !
        ): Chat
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
 `;

export default [typeDefinitions];