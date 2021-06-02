import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {useDispatch} from 'react-redux';
import {login} from '../actions/authActions';

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
        onPress={() => Alert.alert('Iniciar sesión con Google')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <FormText titleText="No tienes cuenta, registrate." />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
