import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import {types} from '../types/type';

export const getPlacesAPI = value => {
  const API_URL = 'https://api.copomex.com/query';
  const API_METHOD = 'info_cp';
  const API_SEARCH = value;
  const API_PARAMS = 'type=simplified';
  const API_KEY = '9ccb35bf-7bc8-467d-a57a-66ea01df0e51';
  const BASE_URL = `${API_URL}/${API_METHOD}/${API_SEARCH}?=${API_PARAMS}&token=${API_KEY}`;
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      console.log(res.data);
      if (res.data) {
        dispatch({
          type: types.GET_PLACES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const createPlace = (zipcode, settlement) => {
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

export const getPlaces = async zipcode => {
  const places = await firestore()
    .collection('places')
    .where('zipCode', '==', zipcode)
    .get();
  places.forEach(documentSnapshot => {
    console.log(documentSnapshot.data());
  });
};
