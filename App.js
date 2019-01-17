/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

// Stores
import { Provider } from 'mobx-react';
import userStore from './src/store/UserStore';
import estStore from './src/store/EstStore';

import CustomStyles from './src/styles/CustomStyle';

import AppRouter from './src/navigation/Router';
import { ApolloProvider } from 'react-apollo';
import clientApollo from './src/graphql/ClientGql';


export default class App extends Component {
  render() {
    return (
      <Provider UserStore={ userStore } EstStore={ estStore }>
          <ApolloProvider client={ clientApollo }>
              <AppRouter/>
          </ApolloProvider>
      </Provider>
    );
  }
}
