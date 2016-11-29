import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';
import reducers from './reducers/reducer';
//import ReduxPromise from 'redux-promise';
//import owlCarousel from 'owl.carousel';
require('owl.carousel');
//const createStoreWithMiddleware = applyMiddleWare(ReduxPromise)(createStore);
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
