import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Toolbar from '../components/Toolbar';
import styles from '../assets/styles/styles';

const AddPlaces = () => {
  const [zipCode, setZipCode] = useState('');
  const [colony, setColony] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText={'Agregar Lugares de Interés'} />
      <View>
        <FormText titleText={'Código Postal'} />
        <FormInput
          labelValue={zipCode}
          placeholderText={'Código Postal'}
          onChangeText={zipcode => setZipCode(zipcode)}
        />
      </View>
      <View>
        <FormText titleText={'Asentamiento'} />
        <FormInput
          labelValue={colony}
          placeholderText={'Asentamiento'}
          onChangeText={col => setColony(col)}
        />
      </View>

      <FormButton buttonTitle={'Guardar'} />

      <Toolbar />
    </View>
  );
};

export default AddPlaces;
