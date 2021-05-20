import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const login = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export const updateProfile = (username, email, password) => {
  const user = auth().currentUser;

  const update = {
    displayName: username,
  };
  user
    .updateProfile(update)
    .then(function () {
      const userDB = firestore().collection('users').doc(user.uid);
      userDB.update(update);
      console.log('Actualización realizada');
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
  user
    .updateEmail(email)
    .then(function () {
      const userDB = firestore().collection('users').doc(user.uid);
      userDB.update({email: email});
      console.log('Email actualizada');
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
  user
    .updatePassword(password)
    .then(function () {
      console.log('Contraseña actualizada');
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
};

export const createComplaint = (userInfo, complaint) => {
  firestore()
    .collection('complaints')
    .add({
      title: complaint.title,
      description: complaint.description,
      area: complaint.area,
      like: complaint.like,
      signedBy: complaint.signedBy,
      user: 'users/' + userInfo.uid,
      dateEvent: complaint.dateEvent,
      timestamp: Date.now(),
    })
    .then(() => {
      console.log('Complaint added!');
    });
};

export const getComplaints = async () => {
  const complaints = await firestore().collection('complaints').get();
  complaints.forEach(documentSnapshot => {
    console.log(documentSnapshot.data());
  });
};
