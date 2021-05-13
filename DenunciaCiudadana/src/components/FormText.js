import React from 'react';
import {Text} from 'react-native';
import stylesForm from '../assets/styles/stylesForm';

const FormInput = ({titleText, ...rest}) => {
  return (
    <Text style={stylesForm.text} {...rest}>
      {titleText}
    </Text>
  );
};

export default FormInput;
