import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './src/reducers/';

const store = createStore(RootReducer);

const MediaShowcase = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

AppRegistry.registerComponent('MediaShowcase', () => MediaShowcase);
