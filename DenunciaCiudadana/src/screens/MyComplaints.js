import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingMyComplaints} from '../actions/complaintsAction';
import FormTitle from '../components/FormTitle';
import {stylesHome} from '../assets/styles/styleHomeDesing';
import Complaint from '../components/Complaint';

const MyComplaints = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.compliants.myComplaints);

  useEffect(() => {
    dispatch(LoadingMyComplaints());
  }, []);
  return (
    // <View style={stylesHomeAndList.container}>
    //     <Text style={stylesHomeAndList.title}>Mis denuncias</Text>
    //     {/* eache complaint that wil be donwload from firebase -> start*/}
    //     <View style={stylesHomeAndList.complaint}>
    //         <View>
    //             <Text style={stylesHomeAndList.titleComplaint}>Nos cortaron el internet</Text>
    //             <View style={stylesHomeAndList.nameAndService}>
    //                 <Text>Diego Rodriguez Lopez</Text>
    //                 <Text>Servicios</Text>
    //             </View>
    //             <Text>Se fue la luz en la colonia Miguel Hidalgo.</Text>
    //         </View>
    //         <View>
    //             <Image
    //                 style={stylesHomeAndList.img}
    //                 source={{
    //                    uri: 'https://c8.alamy.com/compes/r163f2/escena-callejera-con-una-masa-de-alambres-y-cables-enredados-en-la-parte-superior-de-un-poste-electrico-kyoto-japon-cableado-subterraneo-no-es-comun-r163f2.jpg'
    //                 }}
    //             />
    //             <Image
    //                 style={stylesHomeAndList.img}
    //                 source={{
    //                     uri: 'https://thumbs.dreamstime.com/z/sobresaliendo-cables-desde-el-suelo-la-base-de-una-nueva-l%C3%A1mpara-calle-instalaci%C3%B3n-iluminaci%C3%B3n-callejera-205431720.jpg'
    //                 }}
    //             />
    //         </View>
    //         <View style={stylesHomeAndList.buttonContainer}>
    //             <TouchableOpacity
    //                 style={stylesHomeAndList.button}
    //             >
    //                 <Text style={stylesHomeAndList.textButton}>Me Gusta</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    //     {/* -> finish */}
    // </View>

    <View style={stylesHome.container}>
      <FormTitle titleText="Mis denuncias" />
      <View style={stylesHome.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => <Complaint item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MyComplaints;
