import {types} from '../types/type';

const initialState = {
  allPlaces: [],
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLACES:
      return {
        ...state,
        allPlaces: action.payload,
      };
    default:
      return state;
  }
};
