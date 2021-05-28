import {types} from '../types/type';
import firestore from '@react-native-firebase/firestore';

export const startLoadingComplaints = () => {
  return async dispatch => {
    const getComplaints = await firestore().collection('complaints').get();
    const complaints = await [];

    getComplaints.forEach(doc => {
      complaints.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    dispatch(setComplaints(complaints));
  };
};

export const setComplaints = complaints => {
  return {
    type: types.loadAllComplaints,
    payload: complaints,
  };
};
