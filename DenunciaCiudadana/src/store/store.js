import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducer} from '../reducers/authReducer';
import {complaintsReducer} from '../reducers/complaintsReducer';

const reducers = combineReducers({
  authReducer: authReducer,
  compliants: complaintsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
