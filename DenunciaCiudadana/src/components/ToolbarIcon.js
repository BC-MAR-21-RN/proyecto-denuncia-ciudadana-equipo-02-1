import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import stylesToolbar from '../assets/styles/stylesToolbar';

const ToolbarIcon = ({name, ...rest}) => {
  return (
    <TouchableOpacity style={stylesToolbar.buttonWrapper}>
      <Text style={stylesToolbar.icon}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ToolbarIcon;
