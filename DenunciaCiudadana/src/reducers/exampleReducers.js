import {types} from '../types/type';

const initialState = {
  example: '',
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.example:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
};
