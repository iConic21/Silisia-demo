import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import reducers from './reducers';
import Async from './middlewares/async';
import apiResult from './middlewares/apiResult';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(reducers(history)),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk,
            Async,
            apiResult
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export {
    store
}