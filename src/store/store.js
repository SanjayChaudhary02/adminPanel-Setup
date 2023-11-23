/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
// import { logger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const configureHistory = (url) => {
    let history = null;

    if (typeof window !== 'undefined') {
        history = createBrowserHistory();
    } else {
        const config = {};
        if (url) {
            config.initialEntries = [url];
        }
        history = createMemoryHistory(config);
    }
    return history;
};

const sagaMiddleware = createSagaMiddleware();

const devTools =  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
    : () => (noop) => noop;
const middlewares = [
    sagaMiddleware, // Redux-Saga
    // logger,
];
const enhancers = [applyMiddleware(...middlewares), devTools()];
const composedEnhancers = compose(...enhancers);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
