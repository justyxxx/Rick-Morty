import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import listReducer from './store/reducers/list';
import {watchList} from './store/sagas';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

const rootReducer = combineReducers({listReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

window.store = store;

sagaMiddleware.run(watchList);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
