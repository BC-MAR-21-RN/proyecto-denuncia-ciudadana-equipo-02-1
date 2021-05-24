import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Tinput from '../components/Tinput';
import FormButton from '../components/FormButton';
import Toolbar from '../components/Toolbar';
import styles from '../assets/styles/styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loggedIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
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
      <Text style={styles.Title}>Iniciar sesión</Text>
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
        value={password}
        placeholderText="Contraseña"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton btntitle="Login" style={styles.FormButton} onPress={() =>loggedIn(email, password)} />
      <Text style={styles.sub}>O</Text>
      <FormButton btntitle="Login with Google" style={styles.FormButton} />
      <Toolbar />
    </View>
  );
};
export default Login;
