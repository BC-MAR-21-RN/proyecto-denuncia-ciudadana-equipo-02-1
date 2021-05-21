import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import tabFocus from '../helpers/tabFocus';
import UserSettingsScreen from '../screens/UserSettingsScreen';
import styles from '../assets/styles/styles';

const Tab = createBottomTabNavigator();

//Provisional screen
function ListComplaintScreen() {
  return (
    <View style={styles.container}>
      <Text>My list of complaints</Text>
    </View>
  );
}
//provisional screen
function AddComplaintScreen() {
  return (
    <View style={styles.container}>
      <Text>Add New complaint!</Text>
    </View>
  );
}

//provisional screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

const IsLogin = () => {
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
        <Tab.Screen name="List" component={ListComplaintScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default IsLogin;
