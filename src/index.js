import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import listReducer from './store/reducers/list';
import localeReducer from './store/reducers/locale';
import {watchList} from './store/sagas';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})

const rootReducer = combineReducers({listReducer, localeReducer});
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
