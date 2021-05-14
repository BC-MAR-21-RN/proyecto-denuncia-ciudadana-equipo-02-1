import React from 'react';
import {Text, View} from 'react-native';
import Tinput from '../components/Tinput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import Toolbar from '../components/Toolbar';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text />
      <Text style={styles.Title}>Regístrate</Text>
      <Text style={styles.sub}>Usuario</Text>
      <Tinput style={styles.rect} />
      <Text style={styles.sub}>Correo electrónico</Text>
      <Tinput style={styles.rect} />
      <Text style={styles.sub}>Contraseña</Text>
      <Tinput style={styles.rect} />
      <Text style={styles.sub}>Repetir Contraseña</Text>
      <Tinput style={styles.rect} />
      <FormButton btntitle="Login" style={styles.BtnLog} />
      <Text style={styles.sub}>O</Text>
      <FormButton btntitle="Login with Google" style={styles.BtnLog} />
      <Toolbar />
    </View>
  );
};

export default Register;
