import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormText from '../../components/FormText';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import DateField from 'react-native-datefield';

const Dates = ({route, navigation}) => {
  const [dateEvent, setDateEvent] = useState('');
  const timestamp = new Date().toUTCString();
  const {name, area, title, description} = route.params;

  return (
    <View style={stylesAddComplaint.container}>
      <FormTitle titleText={'Fechas de la denuncia'} />
      <View>
        <FormText titleText={'Fecha de registro'} />
        <DateField
          editable={false}
          defaultValue={new Date()}
          styleInput={stylesAddComplaint.enabled}
        />
      </View>
      <View>
        <FormText titleText={'Fecha de los hechos'} />
        <DateField
          labelDate="Día"
          labelMonth="Mes"
          labelYear="Año"
          maximumDate={new Date()}
          minimumDate={new Date(2010, 1, 1)}
          styleInput={stylesAddComplaint.datefield}
          onSubmit={dateEventComplaint =>
            setDateEvent(dateEventComplaint.toUTCString())
          }
        />
      </View>
      <FormButton
        buttonTitle={'Siguiente'}
        onPress={() =>
          navigation.navigate('Location', {
            name,
            area,
            title,
            description,
            timestamp,
            dateEvent,
          })
        }
      />
    </View>
  );
};

export default Dates;
