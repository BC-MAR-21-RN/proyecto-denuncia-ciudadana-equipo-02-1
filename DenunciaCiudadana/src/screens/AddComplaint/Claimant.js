import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import RadioButtonRN from 'radio-buttons-react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';

const Claimant = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const data = [{label: user.email}, {label: 'Anónimo'}];
  const [name, setName] = useState('');

  return (
    <View style={stylesAddComplaint.container}>
      <FormTitle titleText={'¿Con qué nombre quieres hacer tu denuncia?'} />
      <View style={stylesAddComplaint.containerRadioBtn}>
        <RadioButtonRN
          data={data}
          selectedBtn={nameComplaint => setName(nameComplaint.label)}
          textStyle={stylesAddComplaint.radioButton}
          boxDeactiveBgColor="transparent"
          activeColor="#007aff"
          deactiveColor="black"
        />
      </View>
      <View style={stylesAddComplaint.btnNext}>
        <FormButton
          buttonTitle={'Siguiente'}
          onPress={() => navigation.navigate('Data', name)}
        />
      </View>
    </View>
  );
};

export default Claimant;
