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

export const LoadingMyComplaints = () => {
  return async (dispatch, getState) => {
    const {userUid} = getState().authReducer;

    const getMyComplaints = await firestore()
      .collection('complaints')
      .where('user', '==', userUid)
      .get();
    const complaints = await [];

    getMyComplaints.forEach(doc => {
      complaints.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch(setMyComplaints(complaints));
  };
};

export const createComplaint = newComplaint => {
  return async dispatch => {
    firestore()
      .collection('complaints')
      .add(newComplaint)
      .then(() => {
        dispatch(setCreateComplaint());
      });
  };
};

export const setCreateComplaint = () => {
  return {
    type: types.createComplaint,
  };
};

export const setComplaints = complaints => {
  return {
    type: types.loadAllComplaints,
    payload: complaints,
  };
};

export const setMyComplaints = myComplaints => {
  return {
    type: types.loadMyComplaints,
    payload: myComplaints,
  };
};
