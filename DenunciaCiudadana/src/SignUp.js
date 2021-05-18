import React from 'react';
import {View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const SIGN_IN = 'Sign in';
  const LOG_IN = 'Login';

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

  const loggedIn = () => {
    auth()
      .signInWithEmailAndPassword('juanperez@email.com', 'unodostres')
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
    <View>
      <Button title={SIGN_IN} onPress={createUser} />
      <Button title={LOG_IN} onPress={loggedIn} />
    </View>
  );
};

export default SignUp;
