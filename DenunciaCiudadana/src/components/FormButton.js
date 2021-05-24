import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import stylesForm from '../assets/styles/stylesForm';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={stylesForm.buttonContainer} {...rest}>
      <Text style={stylesForm.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
