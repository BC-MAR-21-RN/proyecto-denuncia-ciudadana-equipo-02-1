import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {stylesHome} from '../assets/styles/styleHomeDesing';

const LikeButton = ({likes, handleLike}) => {
  return (
    <View style={stylesHome.buttonContainer}>
      <Text style={stylesHome.LikesNumber}>{likes}</Text>
      <TouchableOpacity style={stylesHome.button} onPress={handleLike}>
        <Text style={stylesHome.textButton}>Me Gusta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LikeButton;
