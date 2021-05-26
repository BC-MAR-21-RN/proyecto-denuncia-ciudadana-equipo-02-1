import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const CheckAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);

  function onAuthStateChanged(info) {
    setUser(info);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return user ? <LoggedIn /> : <NotLoggedIn />;
};
export default CheckAuth;
