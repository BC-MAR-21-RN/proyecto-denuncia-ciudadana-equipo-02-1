import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import {getPlacesAPI, createPlace, cleanPlaces} from '../actions/placesActions';
import translate from '../utils/language.utils.js';
import PickerSelect from '../components/PickerSelect';

const AddPlacesScreen = () => {
  const dispatch = useDispatch();
  const isValid = useSelector(state => state.validations.isValid);
  const dataPlaces = useSelector(state => state.places.allPlaces);
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
        {dataPlaces.length === 0 ? (
          <FormInput
            labelValue={colony}
            placeholderText={translate('ADD_PLACES_SETTLEMENT')}
            onChangeText={col => setColony(col)}
            type={'text'}
          />
        ) : (
          <PickerSelect text={colony} setText={setColony} data={dataPlaces} />
        )}
      </View>
      <FormButton
        buttonTitle={translate('ADD_PLACES_SEARCH')}
        onPress={() => dispatch(getPlacesAPI(zipCode))}
      />
      {dataPlaces.length !== 0 && (
        <FormButton
          buttonTitle={'Escribir asentamiento'}
          onPress={() => dispatch(cleanPlaces())}
        />
      )}
      <FormButton
        buttonTitle={translate('SAVE')}
        onPress={() =>
          isValid
            ? dispatch(createPlace(zipCode, colony))
            : Alert.alert(translate('VALIDATION_MSG_BUTTON'))
        }
      />
    </View>
  );
};

export default AddPlacesScreen;
