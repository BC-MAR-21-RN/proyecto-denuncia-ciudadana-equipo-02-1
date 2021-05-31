import {types} from '../types/type';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUser = (displayName, email, password) => {
  return dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        const userDB = firestore().collection('users').doc(user.uid);
        userDB.set({
          displayName: displayName,
          email: email,
        });
        dispatch(userUidActions(user.uid));
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
};

export const login = (email, password) => {
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(userUidActions(user.uid));
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
};

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export const userUidActions = value => {
  return {
    type: types.SET_USER_UID,
    payload: value,
  };
};
