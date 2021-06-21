import React from 'react';
import {TextInput, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import stylesForm from '../assets/styles/stylesForm';
import {COLOR} from '../assets/constanst/theme';
import {validate} from '../actions/validationsActions';

const FormInput = ({labelValue, placeholderText, type, ...rest}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.validations.errorValidation);
  return (
    <>
      <TextInput
        value={labelValue}
        style={stylesForm.input}
        onBlur={() => dispatch(validate(labelValue, type))}
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
