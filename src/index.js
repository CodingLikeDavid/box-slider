import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {useRouterHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import 'babel-polyfill';
import 'bootstrap/dist/js/bootstrap.js';

import Reducers from './reducers';

import '../style/layout.scss';
import App from './app';

const browserHistory = createHistory({basename: '/'});
const myRouterMiddleware = routerMiddleware(browserHistory);

let middleware = applyMiddleware(thunkMiddleware, myRouterMiddleware);

export const store = createStore(
    Reducers,
    middleware
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <App>
            </App>
        </ConnectedRouter>
    </Provider>
    , document.querySelector('#root'));

export default browserHistory;