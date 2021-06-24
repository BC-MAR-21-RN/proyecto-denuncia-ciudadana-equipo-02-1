import React from 'react';
import {pickerSelectStyles} from '../assets/styles/stylesPickerSelect';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = ({text, setText, data}) => {
  return (
    <RNPickerSelect
      placeholder={{
        label: 'Selecciona una opción...',
        value: null,
      }}
      value={text}
      onValueChange={value => setText(value)}
      style={{...pickerSelectStyles}}
      useNativeAndroidPickerStyle={false}
      items={data}
    />
  );
};

export default PickerSelect;
