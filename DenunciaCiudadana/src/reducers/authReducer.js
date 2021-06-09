import {types} from '../types/type';

const initialState = {
  userUid: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_UID:
      return {
        ...state,
        userUid: action.payload,
      };
    default:
      return state;
  }
};
