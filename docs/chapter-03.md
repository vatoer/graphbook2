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
