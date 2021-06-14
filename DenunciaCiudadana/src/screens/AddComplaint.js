import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Claimant from './AddComplaint/Claimant';
import Data from './AddComplaint/Data';
import Dates from './AddComplaint/Dates';
import Location from './AddComplaint/Location';
import Evidence from './AddComplaint/Evidence';

const Stack = createStackNavigator();

const AddComplaint = () => {
  const header = {
    headerStyle: {
      backgroundColor: '#f3f3f3',
      elevation: 0,
    },
    headerTitle: '',
  };

  return (
    <Stack.Navigator initialRouteName="Claimant">
      <Stack.Screen
        name="Claimant"
        component={Claimant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Data" component={Data} options={header} />
      <Stack.Screen name="Dates" component={Dates} options={header} />
      <Stack.Screen name="Location" component={Location} options={header} />
      <Stack.Screen name="Evidence" component={Evidence} options={header} />
    </Stack.Navigator>
  );
};

export default AddComplaint;
