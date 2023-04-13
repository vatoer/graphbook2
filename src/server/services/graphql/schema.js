
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
        lastMessage: Message
    }

    type PostFeed {
        posts: [Post]
    }

    type Response {
        success: Boolean
    }

    type UsersSearch {
        users: [User]
    }

    type Auth {
        token: String
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

    input MessageInput {
        text: String!
        chatId: Int!
    }

    type RootQuery {
        posts: [Post]
        chats: [Chat]
        chat(chatId: Int): Chat
        postsFeed(page: Int, limit: Int): PostFeed
        usersSearch(page: Int, limit: Int, text: String!): UsersSearch
    }

    type RootMutation {
        signup (
            username: String!
            email: String!
            password: String!
        ): Auth
        login (
            email: String!
            password: String!
        ): Auth
        deletePost (
            postId: Int!
        ): Response
        addPost (
            post: PostInput!
        ): Post
        addChat (
            chat: ChatInput !
        ): Chat
        addMessage (
            message: MessageInput
        ): Message
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
 `;

export default [typeDefinitions];