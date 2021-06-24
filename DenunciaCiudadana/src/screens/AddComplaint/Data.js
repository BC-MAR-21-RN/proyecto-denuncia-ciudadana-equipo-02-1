import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import FormTitle from '../../components/FormTitle';
import FormText from '../../components/FormText';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import PickerSelect from '../../components/PickerSelect';
import translate from '../../utils/language.utils.js';
import dataArea from '../../database/dataArea.json';

const Data = ({route, navigation}) => {
  const isValid = useSelector(state => state.validations.isValid);
  const name = route.params;
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={stylesAddComplaint.container}>
      <FormTitle titleText={'Datos generales'} />
      <View>
        <FormText titleText={'Área'} />
        <PickerSelect text={area} setText={setArea} data={dataArea} />
      </View>
      <View>
        <FormText titleText={'Título'} />
        <FormInput
          labelValue={title}
          placeholderText={'Corte de luz'}
          onChangeText={titleComplaint => setTitle(titleComplaint)}
          type={'text'}
        />
      </View>
      <View>
        <FormText titleText={'Descripción'} />
        <FormInput
          labelValue={description}
          placeholderText={'Ayer por la noche nos cortaron la luz'}
          multiline
          onChangeText={descriptionComplaint =>
            setDescription(descriptionComplaint)
          }
          type={'text'}
        />
      </View>
      <FormButton
        buttonTitle={'Siguiente'}
        onPress={() =>
          isValid
            ? navigation.navigate('Dates', {name, area, title, description})
            : Alert.alert(translate('VALIDATION_MSG_BUTTON'))
        }
      />
    </View>
  );
};

export default Data;
