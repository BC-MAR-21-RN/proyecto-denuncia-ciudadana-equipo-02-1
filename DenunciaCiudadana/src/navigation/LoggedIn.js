import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import tabFocus from '../helpers/tabFocus';
import HomeScreen from '../screens/HomeScreen';
import UserSettingsScreen from '../screens/UserSettingsScreen';
import AddPlacesScreen from '../screens/AddPlacesScreen';
import LogoutScreen from '../screens/LogoutScreen';
import MyComplaints from '../screens/MyComplaints';
import styles from '../assets/styles/styles';

const Tab = createBottomTabNavigator();

//provisional screen
function AddComplaintScreen() {
  return (
    <View style={styles.container}>
      <Text>Add New complaint!</Text>
    </View>
  );
}

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
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={UserSettingsScreen} />
        <Tab.Screen name="Add" component={AddComplaintScreen} />
<<<<<<< HEAD
        <Tab.Screen name="List" component={ListComplaintScreen} />
        <Tab.Screen name="AddPlace" component={AddPlacesScreen} />
=======
        <Tab.Screen name="List" component={MyComplaints} />
>>>>>>> Desing of the screens of my complaints
        <Tab.Screen name="LogOut" component={LogoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LoggedIn;
