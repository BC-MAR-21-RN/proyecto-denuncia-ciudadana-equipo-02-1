import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormText from '../../components/FormText';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import translate from '../../utils/language.utils.js';

const Location = ({route, navigation}) => {
  const isValid = useSelector(state => state.validations.isValid);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [colony, setColony] = useState('');
  const [street, setStreet] = useState('');
  const [numberHouse, setNumberHouse] = useState('');
  const {name, area, title, description, timestamp, dateEvent} = route.params;
  const location = {state, city, zipCode, colony, street, numberHouse};

  return (
    <ScrollView >
      <View style={stylesAddComplaint.container}>
        <FormTitle titleText={'Dirección de los hechos'} />
        <View>
          <FormText titleText={'Estado'} />
          <FormInput
            labelValue={state}
            placeholderText={'Colima'}
            onChangeText={stateComplaint => setState(stateComplaint)}
            type={'text'}
          />
        </View>
        <View>
          <FormText titleText={'Municipio'} />
          <FormInput
            labelValue={city}
            placeholderText={'Colima'}
            onChangeText={cityComplaint => setCity(cityComplaint)}
            type={'text'}
          />
        </View>
        <View>
          <FormText titleText={'Código postal'} />
          <FormInput
            labelValue={zipCode}
            placeholderText={'28046'}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={zipCodeComplaint => setZipCode(zipCodeComplaint)}
            type={'number'}
          />
        </View>
        <View>
          <FormText titleText={'Asentamiento'} />
          <FormInput
            labelValue={colony}
            placeholderText={'Colima'}
            onChangeText={colonyComplaint => setColony(colonyComplaint)}
            type={'text'}
          />
        </View>
        <View>
          <FormText titleText={'Calle'} />
          <FormInput
            labelValue={street}
            placeholderText={'Estapilla'}
            onChangeText={streetComplaint => setStreet(streetComplaint)}
            type={'text'}
          />
        </View>
        <View>
          <FormText titleText={'Número'} />
          <FormInput
            labelValue={numberHouse}
            placeholderText={'1231'}
            keyboardType="numeric"
            onChangeText={numberHouseComplaint =>
              setNumberHouse(numberHouseComplaint)
            }
            type={'text'}
          />
        </View>
        <FormButton
          buttonTitle={'Siguiente'}
          onPress={() =>
            isValid
              ? navigation.navigate('Evidence', {
                  name,
                  area,
                  title,
                  description,
                  timestamp,
                  dateEvent,
                  location,
                })
              : Alert.alert(translate('VALIDATION_MSG_BUTTON'))
          }
        />
      </View>
      </ScrollView>
  );
};

export default Location;
