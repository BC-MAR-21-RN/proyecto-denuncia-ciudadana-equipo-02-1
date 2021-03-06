import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import tabFocus from '../helpers/tabFocus';
import HomeScreen from '../screens/HomeScreen';
import UserSettingsScreen from '../screens/UserSettingsScreen';
import AddComplaint from '../screens/AddComplaint';
import AddPlacesScreen from '../screens/AddPlacesScreen';
import LogoutScreen from '../screens/LogoutScreen';
import MyComplaints from '../screens/MyComplaints';

const Tab = createBottomTabNavigator();

const LoggedIn = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>
            tabFocus(route.name, focused, color, size),
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={UserSettingsScreen} />
        <Tab.Screen name="Add" component={AddComplaint} />
        <Tab.Screen name="AddPlace" component={AddPlacesScreen} />
        <Tab.Screen name="List" component={MyComplaints} />
        <Tab.Screen name="LogOut" component={LogoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LoggedIn;
