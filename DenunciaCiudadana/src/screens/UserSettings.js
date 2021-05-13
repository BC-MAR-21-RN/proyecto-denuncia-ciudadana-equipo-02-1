import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Toolbar from '../components/Toolbar';
import styles from '../assets/styles/styles';

const UserSettings = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText={'Configuración de Usuario'} />
      <View>
        <FormText titleText={'Nombre de Usuario'} />
        <FormInput
          labelValue={username}
          placeholderText={'Nombre de Usuario'}
          onChangeText={userName => setUserName(userName)}
        />
      </View>
      <View>
        <FormText titleText={'Correo electrónico'} />
        <FormInput
          labelValue={email}
          placeholderText={'Correo electrónico'}
          onChangeText={userEmail => setEmail(userEmail)}
        />
      </View>
      <View>
        <FormText titleText={'Contraseña'} />
        <FormInput
          labelValue={password}
          placeholderText={'Contraseña'}
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>

      <FormButton buttonTitle={'Guardar'} />

      <Toolbar />
    </View>
  );
};

export default UserSettings;
