import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Login from './src/Login';
import SignUp from './src/SignUp';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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

  if (initializing) {
    return null;
  }

  if (!user) {
    return <SignUp />;
  }

  return <Login user={user} />;
}
