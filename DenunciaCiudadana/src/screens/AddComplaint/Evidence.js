import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Alert, Image} from 'react-native';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import * as ImagePicker from 'react-native-image-picker';
import {stylesAddComplaint} from '../../assets/styles/stylesAddComplaint';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createComplaint,
  startLoadingComplaints,
  LoadingMyComplaints,
} from '../../actions/complaintsAction';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

const Evidence = ({route, navigation}) => {
  const user = auth().currentUser.uid;
  const dispatch = useDispatch();
  const [pathImg, setPathImg] = useState('');
  const [fileNameImg, setFileNameImg] = useState('');
  const {name, area, title, description, timestamp, dateEvent, location} =
    route.params;

  let options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 200,
    maxWidth: 200,
  };

  const imageSelect = response => {
    if (response.didCancel) {
      Alert.alert('No seleccionaste ninguna imagen.');
    } else if (response.error) {
      Alert.alert('Hubo un problema, vuelve a intentar.');
    } else {
      const source = response.assets;
      setPathImg(source[0].uri);
      setFileNameImg(source[0].fileName);
    }
  };

  const uploadImage = async (path, fileName) => {
    try {
      const imageRef = storage().ref(fileName);
      await imageRef.putFile(path);
      const image = await imageRef.getDownloadURL();
      dispatch(
        createComplaint({
          area,
          dateEvent,
          description,
          image,
          location,
          name,
          timestamp,
          title,
          user,
          likes: 0,
        }),
      );
      dispatch(startLoadingComplaints());
      dispatch(LoadingMyComplaints());
      return navigation.navigate('Home');
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={stylesAddComplaint.container}>
      <FormTitle titleText={'Evidencia'} />
      <View style={stylesAddComplaint.imageContainer}>
        {pathImg === '' ? (
          <Ionicons name="image" size={250} color={'royalblue'} />
        ) : (
          <Image
            source={{uri: pathImg}}
            style={stylesAddComplaint.imageBox}
            resizeMode="contain"
          />
        )}
      </View>
      <FormButton
        buttonTitle={'Subir imagen'}
        onPress={() => {
          ImagePicker.launchImageLibrary(options, response =>
            imageSelect(response),
          );
        }}
      />
      {pathImg !== '' && (
        <FormButton
          buttonTitle={'Terminar'}
          onPress={() => uploadImage(pathImg, fileNameImg)}
        />
      )}
    </View>
  );
};

export default Evidence;
