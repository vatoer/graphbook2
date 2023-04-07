# Setting Up GraphQL with Express.js

This chapter covers the following topics:
- Express.js installation and explanation
- Routing in Express.js
- Middleware in Express.js
- Binding Apollo Server to a GraphQL endpoint
- Sending our first GraphQL requests
- Backend debugging and logging

## Getting started with Node.js and Express.js

```sh
npm install --save express
mkdir src/server
```

## Setting up Express.js
## Running Express.js in development
- add a new script our package.json
- install nodemon
```sh
npm install --save nodemon
npm install --save-dev @babel/node
npm run server
```

## Routing in Express.js
## Serving our production build
## Using Express.js middleware

## Installing important middleware
```sh
npm install --save compression cors helmet
```

- Express Helmet
  
    Helmet is a tool that allows you to set various HTTP headers to secure your application

- Compression with Express.js
- CORS in Express.js

## Combining Express.js with Apollo
```sh
npm install --save @apollo/server graphql @graphql-tools/schema
```

```sh
mkdir src/server/services/
mkdir src/server/services/graphql
```

## Writing your first GraphQL schemas
## Implementing GraphQL resolvers

## Sending GraphQL queries
- send POST request to ```http://127.0.0.1:8000/graphql```:

## Using multiple types in GraphQL schemas
## test with fake data

## Writing your first GraphQL mutation
- add input type and mutation to schema

### json format request 

```json
{
  "operationName": null,
  "query": "mutation addPost($post: PostInput!, $user: UserInput!) { addPost(post: $post, user: $user) { id text user { username avatar } }}",
  "variables": {
    "post": {
      "text": "You just added a post."
    },
    "user": {
      "avatar": "/uploads/avatar3.png",
      "username": "Fake User"
    }
  }
}
```

### graphql format

#### query
  
```#graphql
mutation addPost($post: PostInput!, $user: UserInput!) {
  addPost(post: $post, user: $user) {
    id
    text
    user {
      username
      avatar
    }
  }
}
```

#### variable 
  
```#graphql
{
  "post": {
    "text": "You just added a post."
  },
  "user": {
    "avatar": "/uploads/avatar3.png",
    "username": "Fake User"
  }
}
```
 
## Backend debugging and logging
### Logging in Node.js
```sh
npm install --save winston
mkdir src/server/helpers


