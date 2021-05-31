import {types} from '../types/type';

const initialState = {
  places: [],
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
};
