import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {stylesHome} from '../assets/styles/styleHomeDesing';

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
      <Text style={stylesHome.title}>Denuncias</Text>
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
