import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql' // back end can be found over at https://github.com/krynv/flix-chat-server
});

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
