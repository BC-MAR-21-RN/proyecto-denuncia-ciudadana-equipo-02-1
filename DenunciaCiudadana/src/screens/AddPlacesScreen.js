import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import {getPlacesAPI, createPlace} from '../actions/placesActions';
import translate from '../utils/language.utils.js';

const AddPlacesScreen = () => {
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState('');
  const [colony, setColony] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText={translate('ADD_PLACES_TITLE')} />
      <View>
        <FormText titleText={translate('ADD_PLACES_POSTAL_CODE')} />
        <FormInput
          labelValue={zipCode}
          placeholderText={translate('ADD_PLACES_POSTAL_CODE')}
          onChangeText={zipcode => setZipCode(zipcode)}
          type={'number'}
        />
      </View>
      <View>
        <FormText titleText={translate('ADD_PLACES_SETTLEMENT')} />
        <FormInput
          labelValue={colony}
          placeholderText={translate('ADD_PLACES_SETTLEMENT')}
          onChangeText={col => setColony(col)}
          type={'text'}
        />
      </View>

      <FormButton
        buttonTitle={translate('ADD_PLACES_SEARCH')}
        onPress={() => dispatch(getPlacesAPI(zipCode))}
      />

      <FormButton
        buttonTitle={translate('SAVE')}
        onPress={() => dispatch(createPlace(zipCode, colony))}
      />
    </View>
  );
};

export default AddPlacesScreen;
