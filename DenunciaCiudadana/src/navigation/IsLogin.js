import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import tabFocus from '../helpers/tabFocus';

const Tab = createBottomTabNavigator();

//Provisional screen
function ListComplaintScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My list of complaints</Text>
    </View>
  );
}
//provisional screen
function AddComplaintScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add New complaint!</Text>
    </View>
  );
}

//provisional screen
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

//provisional screen
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const IsLogin = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          //tabFocus help us to change the focused of the icon
          tabBarIcon: ({focused, color, size}) =>
            tabFocus(route.name, focused, color, size),
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Add" component={AddComplaintScreen} />
        <Tab.Screen name="List" component={ListComplaintScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default IsLogin;
