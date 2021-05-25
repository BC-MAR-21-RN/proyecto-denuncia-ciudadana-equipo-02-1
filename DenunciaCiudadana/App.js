import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import IsLogin from './src/navigation/IsLogin';
import LogOut from './src/navigation/LogOut';

import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
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

  return (
    <Provider store={store}>
      {user ? <IsLogin user={user} /> : <LogOut />}
    </Provider>
  );
};
export default App;
