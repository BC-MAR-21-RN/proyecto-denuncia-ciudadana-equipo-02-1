import {createAppContainer, createSwithNavigator} from 'reac-navigation';
import {createStackNavitator} from 'react-navigation-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import UserSettingsScreen from '../screens/UserSettingsScreen';
import CheckAuth from './CheckAuth';

const AuthStack = createStackNavitator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const AppStack = createStackNavitator(
  {
    Home: HomeScreen,
    Settings: UserSettingsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(
  createSwithNavigator(
    {
      Check: CheckAuth,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      inicialRouteName: 'Check',
    },
  ),
);

export default createAppContainer(AppNavigator);
