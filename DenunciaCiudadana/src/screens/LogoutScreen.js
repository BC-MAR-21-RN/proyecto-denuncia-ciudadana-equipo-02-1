import React from 'react';
import {View} from 'react-native';
import FormButton from '../components/FormButton';
import {logout} from '../database/Firebase';

const LogoutScreen = () => {
  return (
    <View>
      <FormButton buttonTitle="Cerrar sesión" onPress={logout} />
    </View>
  );
};

export default LogoutScreen;
