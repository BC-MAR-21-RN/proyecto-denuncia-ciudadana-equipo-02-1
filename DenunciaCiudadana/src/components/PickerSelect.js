import React from 'react';
import {pickerSelectStyles} from '../assets/styles/stylesPickerSelect';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = ({text, setText}) => {
  const dataArea = [
    {label: 'Seguridad', value: 'Seguridad'},
    {label: 'Servicios', value: 'Servicios'},
    {label: 'Infraestructura', value: 'Infraestructura'},
    {label: 'Política', value: 'Política'},
    {label: 'Educación', value: 'Educación'},
    {label: 'Derechos humanos', value: 'Derechos humanos'},
    {label: 'Desastres naturales', value: 'Desastres naturales'},
  ];

  return (
    <RNPickerSelect
      placeholder={{
        label: 'Selecciona un área...',
        value: null,
      }}
      value={text}
      onValueChange={value => setText(value)}
      style={{...pickerSelectStyles}}
      useNativeAndroidPickerStyle={false}
      items={dataArea}
    />
  );
};

export default PickerSelect;
