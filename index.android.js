/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers';
import LoggedOut from './src/screens/LoggedOut';

StatusBar.setBarStyle('light-content', true);

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // used to dispatch() functions
      loggerMiddleware, // used for logging actions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <LoggedOut />
  </Provider>
)

AppRegistry.registerComponent('AirbnbClone', () => App);
