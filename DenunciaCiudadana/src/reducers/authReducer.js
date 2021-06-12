import {types} from '../types/type';

const initialState = {
  userUid: null,
  userAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_UID:
      return {
        ...state,
        userUid: action.payload,
      };
    case types.SET_USER_AUTH:
      return {
        ...state,
        userAuth: action.payload,
      };
    default:
      return state;
  }
};
