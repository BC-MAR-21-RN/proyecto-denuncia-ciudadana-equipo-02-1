import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducer} from '../reducers/authReducers';

const reducers = combineReducers({
  authReducer: authReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
