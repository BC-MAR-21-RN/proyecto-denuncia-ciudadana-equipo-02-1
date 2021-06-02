import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';
import {useDispatch} from 'react-redux';
import {userUidActions} from '../actions/authActions';

const CheckAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();

  function onAuthStateChanged(info) {
    setUser(info);
    if (initializing) {
      setInitializing(false);
    }
    if (info == null) {
      return;
    }
    if (info) {
      dispatch(userUidActions(info.uid));
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return user ? <LoggedIn /> : <NotLoggedIn />;
};
export default CheckAuth;
