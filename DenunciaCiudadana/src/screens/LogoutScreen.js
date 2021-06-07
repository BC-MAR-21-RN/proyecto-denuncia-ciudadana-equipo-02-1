import React from 'react';
import {View} from 'react-native';
import FormButton from '../components/FormButton';
import {logout, logoutWithGoogle} from '../actions/authActions';
import {useDispatch} from 'react-redux';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <FormButton buttonTitle="Cerrar sesión" onPress={dispatch(logout)} />

      <FormButton
        buttonTitle="Cerrar sesión con Google"
        onPress={() => dispatch(logoutWithGoogle)}
      />
    </View>
  );
};

export default LogoutScreen;
