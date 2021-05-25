import React, {useState} from 'react';
import {View} from 'react-native';
import {login} from '../database/Firebase';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText="Iniciar sesión" />
      <View>
        <FormText titleText="Correo electrónico" />
        <FormInput
          labelValue={email}
          placeholderText="Email"
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View>
        <FormText titleText="Contraseña" />
        <FormInput
          labelValue={password}
          placeholderText="Contraseña"
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>

      <FormButton
        buttonTitle="Iniciar sesión"
        onPress={() => login(email, password)}
      />

      <FormText titleText="O" />
      <FormButton buttonTitle="Iniciar sesión con Google" />

      <FormText
        titleText="No tienes cuenta, registrate."
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}
      />
    </View>
  );
};

export default LoginScreen;
