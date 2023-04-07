# Connecting to the Database

This chapter will cover the following topics:
• Using databases in GraphQL
• Using Sequelize in Node.js
• Writing database models
• Seeding data with Sequelize
• Using Apollo with Sequelize
• Performing database migrations with Sequelize

## Using databases in GraphQL
- create database graphbook
  
## Integrating Sequelize into our Node.js stack
```sh
npm install --save sequelize mysql2
```

## Connecting to a database with Sequelize
```sh
mkdir src/server/database
touch src/server/database/index.js
```

## Using a configuration file with Sequelize
```sh
mkdir src/server/config
touch src/server/config/index.js
```

## Writing database models
```sh
mkdir src/server/models
mkdir src/server/migrations
```

### Your first database model
```sh 
npm install -g sequelize-cli

sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Post --attributes text:text
```

## Your first database migration
execute migration
```sh
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

## Importing models with Sequelize
Create an index.js file in the models folder
```sh
touch src/server/models/index.js
```

```sh
npm install --save-dev babel-plugin-require-context-hook
```

We need to load the Babel plugin at the start of our development server, so, open the
package.json file and edit the server script

## Seeding data with Sequelize
```sh
mkdir src/server/seeders
sequelize seed:generate --name fake-posts --seeders-path src/server/seeders
```

```sh
sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js
```

## Using Sequelize with GraphQL
### Global database instance

## Running the first database query

### JSON
```json
{
 "operationName": null,
 "query": "{ posts { id text user { avatar username } } }",
 "variables": {}
}
```
### graphql
```#graphql
{ posts { id text user { avatar username } } }
```

## One-to-one relationships in Sequelize
generate User model
```sh
sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name User --attributes avatar:string,username:string
```