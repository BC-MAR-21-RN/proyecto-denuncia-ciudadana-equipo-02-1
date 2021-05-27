import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {placesReducer} from '../reducers/placesReducers';

const reducers = combineReducers({
  places: placesReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
