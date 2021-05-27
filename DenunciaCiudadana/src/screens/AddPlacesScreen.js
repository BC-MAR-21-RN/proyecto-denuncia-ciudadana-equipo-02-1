import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import {getPlacesAPI, createPlace} from '../actions/placesActions';

const AddPlacesScreen = () => {
  const dispatch = useDispatch();
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

      <FormButton
        buttonTitle={'Buscar Lugar de Interés en API'}
        onPress={() => dispatch(getPlacesAPI(zipCode))}
      />

      <FormButton
        buttonTitle={'Guardar'}
        onPress={() => createPlace(zipCode, colony)}
      />
    </View>
  );
};

export default AddPlacesScreen;
