import React from 'react';
import {View} from 'react-native';
import ToolbarIcon from './ToolbarIcon';
import stylesToolbar from '../assets/styles/stylesToolbar';

const Toolbar = ({props, ...rest}) => {
  return (
    <View style={stylesToolbar.container}>
      <ToolbarIcon name={'Login'} />
      <ToolbarIcon name={'Register'} />
    </View>
  );
};

export default Toolbar;
