import {types} from '../types/type';

const initialState = {
  allComplaints: [],
  myComplaints: [],
};

export const complaintsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadAllComplaints:
      return {
        ...state,
        allComplaints: [...action.payload],
      };
    case types.loadMyComplaints:
      return {
        ...state,
        myComplaints: [...action.payload],
      };
    default:
      return state;
  }
};
