import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {useDispatch} from 'react-redux';
import {createUser} from '../actions/authActions';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText="Regístrate" />
      <View>
        <FormText titleText="Usuario" />
        <FormInput
          labelValue={userName}
          placeholderText="Usuario"
          onChangeText={userNames => setUserName(userNames)}
        />
      </View>
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
      <View>
        <FormText titleText="Repetir Contraseña" />
        <FormInput
          labelValue={password2}
          placeholderText="Repetir Contraseña"
          onChangeText={userPassword2 => setPassword2(userPassword2)}
          secureTextEntry={true}
        />
      </View>

      <FormButton
        buttonTitle="Registrarse"
        onPress={() =>
          password === password2
            ? dispatch(createUser(userName, email, password))
            : Alert.alert('Contraseñas no son iguales')
        }
      />
      <FormText titleText="O" />
      <FormButton
        buttonTitle="Registrarse con Google"
        onPress={() => Alert.alert('Registro con Google')}
      />

      <FormText
        titleText="Si ya tienes cuenta, inicia sesión."
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default RegisterScreen;
