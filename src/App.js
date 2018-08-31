import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Contacts from './Contacts';

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h2 className="App-title">CRM</h2>
          </header>
          <Contacts />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
