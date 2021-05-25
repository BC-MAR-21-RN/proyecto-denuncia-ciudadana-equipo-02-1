import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';

const Complaint = ({item}) => {



  return (
    <View style={stylesHome.complaint}>
      <View>
        <Text style={stylesHome.titleComplaint}>Nos cortaron el internet</Text>
        <View style={stylesHome.nameAndService}>
          <Text>{item.name}</Text>
          <Text>{item.area}</Text>
        </View>
        <Text>{item.description}</Text>
      </View>
      <View>
        {
          item.image
            ? <Image style={stylesHome.img} source={{ uri: `${item.image}`}}/>
            : null
        }
        {
          item.image2
            ? <Image style={stylesHome.img} source={{ uri: 'https://thumbs.dreamstime.com/z/sobresaliendo-cables-desde-el-suelo-la-base-de-una-nueva-l%C3%A1mpara-calle-instalaci%C3%B3n-iluminaci%C3%B3n-callejera-205431720.jpg'}}/>
            : null
        }
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
