# Chapter 5, Reusable React Components and React Hooks
-  Introducing React patterns
-  Structuring our React application
-  Extending Graphbook
-  Documenting React applications

##  Introducing React patterns
-  Controlled components
-  Functional components
-  Conditional rendering
-  Rendering children

### Functional components
```sh
mkdir src/client/components
touch src/client/components/loading.js
```

### Conditional rendering
### Rendering child components

## Structuring our React application
### The React file structure

## Efficient Apollo React components
### Using fragments with Apollo
```sh
mkdir src/client/apollo/queries
mkdir src/client/apollo/fragments
```

### Reusing Apollo Hooks
```sh
mkdir src/client/apollo/mutations
```

cleaned up the functional component from most of the GraphQL request logic and
have it in separate files

## Extending Graphbook
### The React context menu
- Render a simple icon with Font Awesome
- Build React helper components
- Handle the onClick event and set the correct component state
- Use the conditional rendering pattern to show the drop-down menu, if the component state is set correctly
- Add buttons to the menu and bind mutations to them

### Font Awesome in React
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

### React helper components

