import {types} from '../types/type';

const initialState = {
  allComplaints: [],
};

export const complaintsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadAllComplaints:
      return {
        ...state,
        allComplaints: [...action.payload],
      };
    default:
      return state;
  }
};
