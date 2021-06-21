import {types} from '../types/type';

const initialState = {
  usernameValidation: null,
  emailValidation: null,
  passwordValidation: null,
  numberValidation: null,
  textValidation: null,
  errorValidation: '',
  isValid: false,
};

export const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERNAME_VALIDATION:
      return {
        ...state,
        usernameValidation: action.payload,
      };
    case types.EMAIL_VALIDATION:
      return {
        ...state,
        emailValidation: action.payload,
      };
    case types.PASSWORD_VALIDATION:
      return {
        ...state,
        passwordValidation: action.payload,
      };
    case types.NUMBER_VALIDATION:
      return {
        ...state,
        numberValidation: action.payload,
      };
    case types.TEXT_VALIDATION:
      return {
        ...state,
        textValidation: action.payload,
      };
    case types.ERROR_VALIDATION:
      return {
        ...state,
        errorValidation: action.payload,
      };
    case types.IS_VALID:
      return {
        ...state,
        isValid: action.payload,
      };
    default:
      return state;
  }
};
