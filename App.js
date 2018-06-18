import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';

import Setup from './src/boot/setup';
import allReducers from './src/reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default class App extends React.Component {
  render() {
    return (
      <Provider store= {createStoreWithMiddleware(allReducers)}>
        <Setup />
      </Provider>
    );
  }
}
