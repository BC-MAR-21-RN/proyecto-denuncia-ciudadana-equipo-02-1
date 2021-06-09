import React from 'react';
import {View} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';
import FormInput from '../components/FormText';
import translate from '../utils/language.utils.js';

const ThereIsNotComplaint = () => {
  return (
    <View style={stylesHome.containerNoComplaint}>
      <FormInput titleText={translate('THERE_IS_NOT_COMPLAINT')} />
    </View>
  );
};

export default ThereIsNotComplaint;
