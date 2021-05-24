import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Tinput from '../components/Tinput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import Toolbar from '../components/Toolbar';
import auth from '@react-native-firebase/auth';

const Register = () => {
  const[UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword('bruce@wayne.com', 'Im.B4tm4n')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text />
      <Text style={styles.Title}>Regístrate</Text>
      <Text style={styles.sub}>Usuario</Text>
      <Tinput style={styles.rect}
        value={UserName}
        placeholderText="Usuario"
        onChangeText={UserNames => setUserName(UserNames)}
        autoCorrect={false}
      />
      <Text style={styles.sub}>Correo electrónico</Text>
      <Tinput style={styles.rect} 
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Text style={styles.sub}>Contraseña</Text>
      <Tinput style={styles.rect} 
        value={Password}
        placeholderText="Contraseña"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <Text style={styles.sub}>Repetir Contraseña</Text>
      <Tinput style={styles.rect} 
        value={password2}
        placeholderText="Repetir Contraseña"
        onChangeText={userPassword2 => setPassword2(userPassword2)}
        secureTextEntry={true}
      />
      <FormButton btntitle="Registrarse" style={styles.BtnLog} onPress={() =>createUser(UserName, email, Password)} />
      <Text style={styles.sub}>O</Text>
      <FormButton btntitle="Register with Google" style={styles.BtnLog} />
      <Toolbar />
    </View>
  );
};

export default Register;
