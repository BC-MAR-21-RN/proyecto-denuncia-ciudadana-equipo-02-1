import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormText from '../../components/FormText';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';

const Location = ({route, navigation}) => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [colony, setColony] = useState('');
  const [street, setStreet] = useState('');
  const [numberHouse, setNumberHouse] = useState('');
  const {name, area, title, description, timestamp, dateEvent} = route.params;
  const location = {state, city, zipCode, colony, street, numberHouse};

  return (
    <KeyboardAvoidingView
      style={stylesAddComplaint.container}
      behavior="padding">
      <View>
        <FormTitle titleText={'Dirección de los hechos'} />
        <View>
          <FormText titleText={'Estado'} />
          <FormInput
            labelValue={state}
            placeholderText={'Colima'}
            onChangeText={state => setState(state)}
          />
        </View>
        <View>
          <FormText titleText={'Municipio'} />
          <FormInput
            labelValue={city}
            placeholderText={'Colima'}
            onChangeText={city => setCity(city)}
          />
        </View>
        <View>
          <FormText titleText={'Código postal'} />
          <FormInput
            labelValue={zipCode}
            placeholderText={'28046'}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={zipCode => setZipCode(zipCode)}
          />
        </View>
        <View>
          <FormText titleText={'Asentamiento'} />
          <FormInput
            labelValue={colony}
            placeholderText={'Colima'}
            onChangeText={colony => setColony(colony)}
          />
        </View>
        <View>
          <FormText titleText={'Calle'} />
          <FormInput
            labelValue={street}
            placeholderText={'Estapilla'}
            onChangeText={street => setStreet(street)}
          />
        </View>
        <View>
          <FormText titleText={'Número'} />
          <FormInput
            labelValue={numberHouse}
            placeholderText={'1231'}
            keyboardType="numeric"
            onChangeText={numberHouse => setNumberHouse(numberHouse)}
          />
        </View>
        <FormButton
          buttonTitle={'Siguiente'}
          onPress={() =>
            navigation.navigate('Evidence', {
              name,
              area,
              title,
              description,
              timestamp,
              dateEvent,
              location,
            })
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Location;
