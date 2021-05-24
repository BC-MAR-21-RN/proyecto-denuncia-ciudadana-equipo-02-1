import React from 'react';
import {TextInput, View} from 'react-native';
import styles from '../assets/styles/styles';

const Tinput = ({labelValue, placeholderText, ...rest}) => {
  return (
    <View>
      <TextInput style={styles.rect}
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
      {...rest}
      />
    </View>
  );
};
export default Tinput;
