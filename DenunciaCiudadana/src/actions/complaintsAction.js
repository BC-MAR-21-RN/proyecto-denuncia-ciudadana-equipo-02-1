import {types} from '../types/type';
import firestore from '@react-native-firebase/firestore';

export const startLoadingComplaints = () => {
  return dispatch => {
    firestore()
      .collection('complaints')
      .onSnapshot(querySnapshot => {
        const complaints = [];
        querySnapshot.forEach(doc => {
          complaints.push({
            id: doc.id,
            ...doc.data(),
          });
          dispatch(setComplaints(complaints));
        });
      });
  };
};

export const likeButtonPress = (id, likes) => {
  return dispatch => {
    const allLikes = likes + 1;
    firestore()
      .collection('complaints')
      .doc(id)
      .update({
        likes: allLikes,
      })
      .then(() => {});
  };
};

export const unlikeButtonPress = (id, likes) => {
  return dispatch => {
    const allLikes = likes - 1;
    firestore()
      .collection('complaints')
      .doc(id)
      .update({
        likes: allLikes,
      })
      .then(() => {});
  };
};

export const LoadingMyComplaints = () => {
  return (dispatch, getState) => {
    const {userUid} = getState().authReducer;

    firestore()
      .collection('complaints')
      .where('user', '==', userUid)
      .onSnapshot(querySnapshot => {
        const complaints = [];
        querySnapshot.forEach(doc => {
          complaints.push({
            id: doc.id,
            ...doc.data(),
          });
          dispatch(setMyComplaints(complaints));
        });
      });
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
