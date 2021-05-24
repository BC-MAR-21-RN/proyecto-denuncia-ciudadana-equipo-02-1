import React, {useState} from 'react';
import {View} from 'react-native';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import auth from '@react-native-firebase/auth';
import {updateProfile} from '../database/Firebase';

const UserSettingsScreen = () => {
  const user = auth().currentUser;

  const [username, setUserName] = useState(!user ? '' : user.displayName);
  const [email, setEmail] = useState(!user ? '' : user.email);
  const [password, setPassword] = useState(!user ? '' : user.password);

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

      <FormButton
        buttonTitle={'Guardar'}
        onPress={() =>
          !user
            ? console.log('No hay usuario')
            : updateProfile(username, email, password)
        }
      />
    </View>
  );
};

export default UserSettingsScreen;
