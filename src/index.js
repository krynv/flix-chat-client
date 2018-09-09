import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes';

import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql' // back end can be found over at https://github.com/krynv/flix-chat-server
});

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

render(App, document.getElementById('root'));
