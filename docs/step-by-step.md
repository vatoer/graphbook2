
# Preparing Your Development Environment

## Setting up React

```sh
mkdir ~/graphbook
cd ~/graphbook
npm init
npm install --save react react-dom
```

## Preparing and configuring webpack

```sh
mkdir public
cd public
touch index.html
```

### Create a separate directory for our index.html file

```sh
mkdir public
cd public
touch index.html
```

```sh
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react clean-webpack-plugin css-loader file-loader html-webpack-plugin style-loader url-loader webpack webpack-cli webpack-dev-server
```

```sh
touch webpack.client.config.js
```

```sh
mkdir -p src/client
cd src/client
touch index.js
```

## Rendering your first React component

- load Babel for our JavaScript file and tell Babel to transpile and what not to transpile, create a .babelrc file
- You may have to restart the server
  
  ```sh
  npm run client
  ```



