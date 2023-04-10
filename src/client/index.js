import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client/react';
import client from './apollo'
import App from './App';

//ReactDOM.render(<App/>, document.getElementById('root'));
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(
    <ApolloProvider client={client} >
        <App name="graphbook" />
    </ApolloProvider>
);
