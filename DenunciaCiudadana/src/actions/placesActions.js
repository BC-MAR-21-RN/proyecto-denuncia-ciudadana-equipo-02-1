import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import {types} from '../types/type';
import {API_URL, API_METHOD, API_KEY} from '@env';

export const getPlacesAPI = value => {
  return async dispatch => {
    const BASE_URL = `${API_URL}/${API_METHOD}/${value}?=type=simplified&token=${API_KEY}`;
    try {
      const res = await axios.get(`${BASE_URL}`);
      console.log(res.data);
      if (res.data) {
        dispatch({
          type: types.GET_PLACES,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPlace = (zipcode, settlement) => {
  return dispatch => {
    firestore()
      .collection('places')
      .add({
        zipCode: zipcode,
        colony: settlement,
      })
      .then(() => {
        console.log('Place added!');
      });
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
