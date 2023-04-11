# Section 2: Building the Application
- Chapter 4, Hooking Apollo into React
- Chapter 5, Reusable React Components and React Hooks
- Chapter 6, Authentication with Apollo and React
- Chapter 7, Handling Image Uploads
- Chapter 8, Routing in React
- Chapter 9, Implementing Server-Side Rendering
- Chapter 10, Real-Time Subscriptions
- Chapter 11, Writing Tests for React and Node.js

# Chapter 4, Hooking Apollo into React
-  Installing and configuring Apollo Client
-  Sending requests with GQL and Apollo's Query component
-  Mutating data with Apollo Client
-  Implementing chats and messages
-  Pagination in React and GraphQL
-  Debugging with the Apollo Client Devtools

## installing apollo client 
```sh
npm install --save @apollo/client graphql
mkdir src/client/apollo
touch src/client/apollo/index.js
```

## Testing Apollo Client
## Binding Apollo Client to React
## Using Apollo Client in React
## Querying in React with Apollo Client

## Mutating data with Apollo Client
## Apollo useMutation Hook
## Updating the UI with Apollo Client
There are two different ways to update the UI after a mutation, as follows:
- Refetching the dataset: This is easy to implement but it refetches all of the data,
which is inefficient.
- Updating the cache according to the inserted data: This is harder to understand
and implement, but it attaches the new data to the cache of Apollo Client, so no
refetching is needed.

### Refetching the dataset
### Updating the Apollo Client cache
- Refetching the dataset-Updating the Apollo Client cache #2

### Optimistic UI
To set a particular class on the list item, we conditionally set the correct className
property in our map loop.

## Polling with Apollo Client

## Implementing chats and messages
### get last message
###  useQuery Hook in order to fetch all of the data from our GraphQL API

## Fetching and displaying messages
## Sending messages through mutations

## Pagination in React and GraphQL
```sh
npm install react-infinite-scroll-component --save
```
