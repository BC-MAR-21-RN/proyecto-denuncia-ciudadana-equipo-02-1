import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import stylesForm from '../assets/styles/stylesForm';
import {COLOR} from '../assets/constanst/theme';

const FormInput = ({labelValue, placeholderText, type, ...rest}) => {
  const [error, setError] = useState('');
  const validate = () => {
    let regexp = null;
    let res = false;
    switch (type) {
      case 'username':
        regexp = new RegExp('^([a-z0-9_-]{3,16})');
        res = regexp.test(labelValue);
        if (res === false) {
          setError('Please enter valid username');
        }
        break;
      case 'email':
        regexp =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        res = regexp.test(labelValue);
        if (res === false) {
          setError('Please enter valid email');
        }
        break;
      case 'password':
        regexp = new RegExp('^(?=.{6,})');
        res = regexp.test(labelValue);
        if (res === false) {
          setError('Password must be at least 6 characters');
        }
        break;
      case 'number':
        regexp = new RegExp('^([0-9]{5})');
        res = regexp.test(labelValue);
        if (res === false) {
          setError('This field is required');
        }
        break;
      case 'text':
        regexp = new RegExp('^\s*');
        res = regexp.test(labelValue);
        if (res === false) {
          setError('This field is required');
        }
        break;
      default:
        regexp = new RegExp('^([^s]*)');
        res = regexp.test(labelValue);
        if (res === false) {
          setError('This field is required');
        }
        break;
    }
  };
  return (
    <>
      <TextInput
        value={labelValue}
        style={stylesForm.input}
        onBlur={() => validate()}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        minLength={3}
        {...rest}
      />
      {error === '' ? (
        <Text style={{color: COLOR.WHITE}}>{''}</Text>
      ) : (
        <Text style={{color: COLOR.RED}}>{error}</Text>
      )}
    </>
  );
};

export default FormInput;
