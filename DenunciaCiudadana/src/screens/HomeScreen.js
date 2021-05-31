import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';
import FormTitle from '../components/FormTitle';

import Complaint from '../components/Complaint';

import {useDispatch, useSelector} from 'react-redux';
import {startLoadingComplaints} from '../actions/complaintsAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.compliants.allComplaints);
  useEffect(() => {
    dispatch(startLoadingComplaints());
  }, []);
  return (
    <View style={stylesHome.container}>
      <FormTitle titleText="Denuncias" />
      <View style={stylesHome.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => <Complaint item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
