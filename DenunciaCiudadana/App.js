import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import IsLogin from './src/navigation/IsLogin';
import LogOut from './src/navigation/LogOut';

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isSignedIn, setIsSignedIn] = useState(true);

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

  // if (initializing) {
  //   return null;
  // }


  return(
       isSignedIn 
        ? 
          <IsLogin user={user}/> 
        : 
          <LogOut/>
  )
}
export default App;
