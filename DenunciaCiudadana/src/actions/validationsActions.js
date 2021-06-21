import {types} from '../types/type';

export const getErrorValidation = value => {
  return {
    type: types.ERROR_VALIDATION,
    payload: value,
  };
};

export const getIsValid = value => {
  return {
    type: types.IS_VALID,
    payload: value,
  };
};

export const validate = (labelValue, type) => {
  return dispatch => {
    let regexp = null;
    let res = false;
    switch (type) {
      case 'username':
        regexp = new RegExp(
          '^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]',
        );
        res = regexp.test(labelValue);
        if (res === false) {
          dispatch(getErrorValidation('Please enter valid username'));
          dispatch(getIsValid(false));
        } else {
          dispatch(getErrorValidation(''));
          dispatch(getIsValid(true));
        }
        break;
      case 'email':
        regexp =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        res = regexp.test(labelValue);
        if (res === false) {
          dispatch(getErrorValidation('Please enter valid email'));
          dispatch(getIsValid(false));
        } else {
          dispatch(getErrorValidation(''));
          dispatch(getIsValid(true));
        }
        break;
      case 'password':
        regexp = new RegExp('^(?=.{6,})');
        res = regexp.test(labelValue);
        if (res === false) {
          dispatch(
            getErrorValidation('Password must be at least 6 characters'),
          );
          dispatch(getIsValid(false));
        } else {
          dispatch(getErrorValidation(''));
          dispatch(getIsValid(true));
        }
        break;
      case 'number':
      case 'text':
      default:
        if (labelValue.trim() === '') {
          dispatch(getErrorValidation('This field is required'));
          dispatch(getIsValid(false));
        } else {
          dispatch(getErrorValidation(''));
          dispatch(getIsValid(true));
        }
        break;
    }
  };
};
