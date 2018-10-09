import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import {applyMiddleware, compose, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import initialState from './initialState';

const middleware = [promiseMiddleware(), thunk];
const enhancers =[];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
rootReducer,
initialState,
composeEnhancers(applyMiddleware (...middleware),...enhancers)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));