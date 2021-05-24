import {types} from '../types/type';

export const exampleActions = value => {
  return {
    type: types.example,
    payload: value,
  };
};
