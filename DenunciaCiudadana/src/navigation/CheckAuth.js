import React from 'react';
import auth from '@react-native-firebase/auth';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const CheckAuth = () => {
  const user = auth().currentUser;
  return user ? <LoggedIn /> : <NotLoggedIn />;
};
export default CheckAuth;
