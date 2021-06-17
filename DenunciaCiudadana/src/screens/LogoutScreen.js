import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {logout} from '../actions/authActions';
import styles from '../assets/styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowWidth} from '../utils/Dimensions';
import {COLOR} from '../assets/constanst/theme';

const LogoutScreen = () => {
  return (
    <View style={styles.containercenter}>
      <TouchableOpacity onPress={logout}>
        <Ionicons name={'power'} size={windowWidth / 2} color={COLOR.BLUE} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;
