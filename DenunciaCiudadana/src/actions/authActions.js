import {Alert} from 'react-native';
import {types} from '../types/type';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '@env';

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
        dispatch(userAuthActions(true));
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

export const loginWithGoogle = () => {
  return dispatch => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
    async function signIn() {
      try {
        await GoogleSignin.hasPlayServices();
        const {accessToken, idToken} = await GoogleSignin.signIn();
        dispatch(userUidActions(idToken));
        dispatch(userAuthActions(true));
        const credential = auth.GoogleAuthProvider.credential(
          idToken,
          accessToken,
        );
        await auth().signInWithCredential(credential);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          Alert.alert('You cancelled the sign in.');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          Alert.alert('Google sign In operation is in process');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          Alert.alert('Play Services not available');
        } else {
          Alert.alert(
            'Something unknown went wrong with Google sign in. ',
            error.message.toString(),
          );
        }
      }
    }
    signIn();
  };
};

export const logout = () => {
  return dispatch => {
    try {
      auth()
        .signOut()
        .then(() => {
          dispatch(userUidActions(''));
          dispatch(userAuthActions(false));
          console.log('User signed out!');
        });
    } catch (error) {
      Alert.alert(
        'Something unknown went wrong with sign out. ',
        error.message.toString(),
      );
    }
  };
};

export const logoutWithGoogle = () => {
  return dispatch => {
    GoogleSignin.configure({
      androidClientId: WEB_CLIENT_ID,
    });
    async function signOut() {
      try {
        await GoogleSignin.revokeAccess();
        const userInfo = await GoogleSignin.signOut();
        dispatch(userUidActions(''));
        dispatch(userAuthActions(false));
        console.log(userInfo);
      } catch (error) {
        Alert.alert(
          'Something unknown went wrong with Google sign out. ',
          error.message.toString(),
        );
      }
    }
    signOut();
  };
};

export const userUidActions = value => {
  return {
    type: types.SET_USER_UID,
    payload: value,
  };
};

export const userAuthActions = value => {
  return {
    type: types.SET_USER_AUTH,
    payload: value,
  };
};
