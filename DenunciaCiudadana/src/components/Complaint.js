import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';
import LikeButton from './LikeButton';
import {useDispatch} from 'react-redux';
import {likeButtonPress, unlikeButtonPress} from '../actions/complaintsAction';

const Complaint = ({item}) => {
  const {id, title, name, area, description, image, image2, likes} = item;
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);

  const handleLike = () => {
    if (isEnabled) {
      dispatch(unlikeButtonPress(id, likes));
      setIsEnabled(false);
    } else {
      dispatch(likeButtonPress(id, likes));
      setIsEnabled(true);
    }
  };

  return (
    <View style={stylesHome.complaint}>
      <View>
        <Text style={stylesHome.titleComplaint}>{title}</Text>
        <View style={stylesHome.nameAndService}>
          <Text>{name}</Text>
          <Text>{area}</Text>
        </View>
        <Text>{description}</Text>
      </View>
      <View>
        {image && <Image style={stylesHome.img} source={{uri: `${image}`}} />}
        {image2 && <Image style={stylesHome.img} source={{uri: `${image2}`}} />}
      </View>
      <View style={stylesHome.buttonAndLike}>
        <LikeButton likes={likes} handleLike={handleLike} />
      </View>
    </View>
  );
};

export default Complaint;
