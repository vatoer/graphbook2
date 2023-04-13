# Chapter 6 - Authentication with Apollo and React
- What is a JWT?
- Cookies versus localStorage
- Implementing authentication in Node.js and Apollo
- Signing up and logging in users
- Authenticating GraphQL queries and mutations
- Accessing the user from the request context

## Authentication with GraphQL
```sh
sequelize migration:create --migrations-path src/server/migrations --name add-email-password-to-post
```

execute migration
```sh
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

execute seeders
```sh
sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js
```

### Apollo login mutation
```sh
npm install --save jsonwebtoken bcrypt
```

```sh
export JWT_SECRET=awv4BcIzsRysXkhoSAb8t8lNENgXSqBruVlLwd45kGdYjeJHLap9LUJ1t9DTdw36DvLcWs3qEkPyCY6vOyNljlh2Er952h2gDzYwG82rs1qfTzdVIg89KTaQ4SWI1YGY
```

run in powershel 
```sh
node --print 'process.env'
$env:NODE_ENV="development"
$env:JWT_SECRET="awv4BcIzsRysXkhoSAb8t8lNENgXSqBruVlLwd45kGdYjeJHLap9LUJ1t9DTdw36DvLcWs3qEkPyCY6vOyNljlh2Er952h2gDzYwG82rs1qfTzdVIg89KTaQ4SWI1YGY"
node --print 'process.env'
```

## The React login form
