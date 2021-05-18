import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { stylesHome } from '../assets/styles/styleHomeDesing';

const HomeScreen = () => {
    return (
        <View style={stylesHome.container}>
            <Text style={stylesHome.title}>Denuncias</Text>
            {/* eache complaint that wil be donwload from firebase -> start*/}
            <View style={stylesHome.complaint}>
                <View>
                    <Text style={stylesHome.titleComplaint}>Nos cortaron el internet</Text>
                    <View style={stylesHome.nameAndService}>
                        <Text>Antonio Morales Gonzalez</Text>
                        <Text>Servicios</Text>
                    </View>
                    <Text>Se fue la luz en la colonia Miguel Hidalgo.</Text>
                </View>
                <View>
                    <Image 
                        style={stylesHome.img}
                        source={{
                           uri: 'https://c8.alamy.com/compes/r163f2/escena-callejera-con-una-masa-de-alambres-y-cables-enredados-en-la-parte-superior-de-un-poste-electrico-kyoto-japon-cableado-subterraneo-no-es-comun-r163f2.jpg'
                        }}
                    />
                    <Image
                        style={stylesHome.img}
                        source={{
                            uri: 'https://thumbs.dreamstime.com/z/sobresaliendo-cables-desde-el-suelo-la-base-de-una-nueva-l%C3%A1mpara-calle-instalaci%C3%B3n-iluminaci%C3%B3n-callejera-205431720.jpg'
                        }}
                    />
                </View>
                <View style={stylesHome.buttonContainer}>
                    <TouchableOpacity
                        style={stylesHome.button}
                    >
                        <Text style={stylesHome.textButton}>Me Gusta</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* -> finish */}
        </View>
    );
};

export default HomeScreen;