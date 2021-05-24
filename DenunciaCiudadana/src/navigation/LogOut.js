import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import styles from '../assets/styles/styles';

import {exampleActions} from '../actions/exampleActions';

const Stack = createStackNavigator();

//provisional screen
function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>SignInScreen!</Text>
    </View>
  );
}

//provisional screen
function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>SignUp!</Text>
    </View>
  );
}

const LogOut = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LogOut;
