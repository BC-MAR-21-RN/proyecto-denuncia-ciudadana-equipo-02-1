import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducer} from '../reducers/authReducer';
import {complaintsReducer} from '../reducers/complaintsReducer';
import {placesReducer} from '../reducers/placesReducers';
import {validationReducer} from '../reducers/validationReducer';

const reducers = combineReducers({
  authReducer: authReducer,
  compliants: complaintsReducer,
  places: placesReducer,
  validations: validationReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
