import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';

const Complaint = ({item}) => {
  const {name, area, description, image, image2} = item;
  return (
    <View style={stylesHome.complaint}>
      <View>
        <Text style={stylesHome.titleComplaint}>Nos cortaron el internet</Text>
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
      <View style={stylesHome.buttonContainer}>
        <TouchableOpacity style={stylesHome.button}>
          <Text style={stylesHome.textButton}>Me Gusta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Complaint;
