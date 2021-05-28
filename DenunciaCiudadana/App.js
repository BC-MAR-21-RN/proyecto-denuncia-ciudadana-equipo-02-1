import React from 'react';
import 'react-native-gesture-handler';
import CheckAuth from './src/navigation/CheckAuth';

import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <CheckAuth />
    </Provider>
  );
};
export default App;
