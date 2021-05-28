import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const tabFocus = (nameRoute, focused, color, size) => {
  let iconName;
  switch (nameRoute) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Settings':
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    case 'Add':
      iconName = focused ? 'add-circle' : 'add-circle-outline';
      break;
    case 'List':
      iconName = focused ? 'list' : 'list-outline';
      break;
    case 'LogOut':
      iconName = focused ? 'log-out' : 'log-out-outline';
      break;
    default:
      break;
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};

export default tabFocus;
