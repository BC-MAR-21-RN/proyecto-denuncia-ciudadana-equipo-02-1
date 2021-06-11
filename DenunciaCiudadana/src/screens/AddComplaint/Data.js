import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormText from '../../components/FormText';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import PickerSelect from '../../components/PickerSelect';

const Data = ({route, navigation}) => {
  const name = route.params;
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={stylesAddComplaint.container}>
      <FormTitle titleText={'Datos generales'} />
      <View>
        <FormText titleText={'Área'} />
        <PickerSelect text={area} setText={setArea} />
      </View>
      <View>
        <FormText titleText={'Título'} />
        <FormInput
          labelValue={title}
          placeholderText={'Corte de luz'}
          onChangeText={title => setTitle(title)}
        />
      </View>
      <View>
        <FormText titleText={'Descripción'} />
        <FormInput
          labelValue={description}
          placeholderText={'Ayer por la noche nos cortaron la luz'}
          multiline
          onChangeText={description => setDescription(description)}
        />
      </View>
      <FormButton
        buttonTitle={'Siguiente'}
        onPress={() =>
          navigation.navigate('Dates', {name, area, title, description})
        }
      />
    </View>
  );
};

export default Data;
