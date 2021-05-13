import React from 'react';
import {TextInput} from 'react-native';
import stylesForm from '../assets/styles/stylesForm';

const FormInput = ({labelValue, placeholderText, ...rest}) => {
  return (
    <TextInput
      value={labelValue}
      style={stylesForm.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      {...rest}
    />
  );
};

export default FormInput;
