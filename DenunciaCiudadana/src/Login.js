import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = ({user}) => {
  const SIGN_OFF = 'Sign off';
  const CREATE_COMPLAINT = 'Create complaint';

  useEffect(() => {
    async function getComplaints() {
      const complaints = await firestore().collection('complaints').get();
      complaints.forEach(documentSnapshot => {
        console.log(documentSnapshot.data());
      });
    }
    getComplaints();
  }, []);

  const handleSalir = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const crearNota = userInfo => {
    firestore()
      .collection('complaints')
      .add({
        title: 'Funcionario público es visto comprando votos',
        description: 'Un funcionario público fue visto comprando votos',
        area: 'Goverment',
        like: 0,
        signedBy: true,
        user: 'users/' + userInfo.uid,
        dateEvent: Date.now(),
        timestamp: Date.now(),
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <View>
      <Text>Estás logeado</Text>
      <Button title={CREATE_COMPLAINT} onPress={crearNota(user)} />
      <Button title={SIGN_OFF} onPress={handleSalir} />
    </View>
  );
};

export default Login;
