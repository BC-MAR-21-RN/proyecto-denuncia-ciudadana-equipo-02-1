import React from 'react';
import {Text, View} from 'react-native';
import Tinput from '../components/Tinput';
import FormButton from '../components/FormButton';
import Toolbar from '../components/Toolbar';
import styles from '../assets/styles/styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Iniciar sesión</Text>
      <Text style={styles.sub}>Correo electrónico</Text>
      <Tinput style={styles.rect} />
      <Text style={styles.sub}>Contraseña</Text>
      <Tinput style={styles.rect} />
      <FormButton btntitle="Registrarse" style={styles.FormButton} />
      <Text style={styles.sub}>O</Text>
      <FormButton btntitle="Registrarse con Google" style={styles.FormButton} />
      <Toolbar />
    </View>
  );
};
export default Login;
