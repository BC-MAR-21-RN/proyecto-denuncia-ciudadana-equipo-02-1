import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {useDispatch} from 'react-redux';
import {login, loginWithGoogle, logoutWithGoogle} from '../actions/authActions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

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
        onPress={() => dispatch(login(email, password))}
      />

      <FormText titleText="O" />
      <FormButton
        buttonTitle="Iniciar sesión con Google"
        onPress={() => dispatch(loginWithGoogle())}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <FormText titleText="No tienes cuenta, registrate." />
      </TouchableOpacity>

      <FormButton
        buttonTitle="Cerrar sesión con Google"
        onPress={() => dispatch(logoutWithGoogle())}
      />
    </View>
  );
};

export default LoginScreen;
