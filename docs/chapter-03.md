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

## Updating the table structure with migrations
```sh
sequelize migration:create --migrations-path src/server/migrations --name add-userId-to-post
```

rerun migration
```sh
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

to undo recent migration 
```sh
sequelize db:migrate:undo --migrations-path src/server/migrations --config src/server/config/index.js
```

to undo all 
```sh
sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js --migrations-path src/server/migrations --config src/server/config/index.js
```

## Model associations in Sequelize
## Seeding foreign key data
```sh
sequelize seed:generate --name fake-users --seeders-path src/server/seeders
```

undo all seed before
```sh
sequelize db:seed:undo:all --seeders-path src/server/seeders --config src/server/config/index.js
```

rerun seed
```sh
sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js
```

## Mutating data with Sequelize
## Many-to-many relationships
### Model and migrations

#### Chat model
```sh
sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Chat --attributes firstName:string,lastName:string,email:string

sequelize migration:create --migrations-path src/server/migrations --name create-user-chats
```

```sh
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

#### Message model
```sh
sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Message --attributes text:string,userId:integer,chatId:integer
```

## Chats and messages in GraphQL

## Seeding many-to-many data
```sh
sequelize seed:generate --name fake-chats --seeders-path src/server/seeders
```

```sh
sequelize seed:generate --name fake-chats-users-relations --seeders-path src/server/seeders

sequelize seed:generate --name fake-messages --seeders-path src/server/seeders
```

