import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingMyComplaints} from '../actions/complaintsAction';
import FormTitle from '../components/FormTitle';
import {stylesHome} from '../assets/styles/styleHomeDesing';
import Complaint from '../components/Complaint';
import ThereIsNotComplaint from '../components/ThereIsNotComplaint';

const MyComplaints = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.compliants.myComplaints);

  useEffect(() => {
    dispatch(LoadingMyComplaints());
  }, []);

  return (
    <View style={stylesHome.container}>
      <FormTitle titleText="Mis denuncias" />
      <View style={stylesHome.flatListContainer}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => <Complaint item={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <ThereIsNotComplaint />
        )}
      </View>
    </View>
  );
};

export default MyComplaints;
