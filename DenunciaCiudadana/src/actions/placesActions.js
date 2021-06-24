import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import {types} from '../types/type';
import {API_URL, API_METHOD, API_KEY} from '@env';
import {Alert} from 'react-native';

export const getPlacesAPI = value => {
  return async dispatch => {
    const BASE_URL = `${API_URL}/${API_METHOD}/${value}?=type=simplified&token=${API_KEY}`;
    try {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        let allPlacesAPI = [];
        res.data.forEach(element => {
          let colony = element.response.asentamiento;
          allPlacesAPI.push({
            label: colony,
            element: colony,
          });
        });
        dispatch({
          type: types.GET_PLACES,
          payload: allPlacesAPI,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPlace = (zipcode, settlement) => {
  return async dispatch => {
    const places = await firestore()
      .collection('places')
      .where('zipCode', '==', zipcode)
      .where('colony', '==', settlement)
      .get();

    let existPlaces = '';
    places.forEach(documentSnapshot => {
      existPlaces = documentSnapshot.data();
    });

    if (existPlaces !== '') {
      Alert.alert('Este lugar ya ha sido añadido antes.');
    } else {
      firestore()
        .collection('places')
        .add({
          zipCode: zipcode,
          colony: settlement,
        })
        .then(() => {
          Alert.alert('¡Lugar añadido!');
        });
    }
  };
};

export const getPlaces = async zipcode => {
  const places = await firestore()
    .collection('places')
    .where('zipCode', '==', zipcode)
    .get();
  places.forEach(documentSnapshot => {
    console.log(documentSnapshot.data());
  });
};

export const cleanPlaces = () => {
  return async dispatch => {
    dispatch({
      type: types.GET_PLACES,
      payload: [],
    });
  };
};
