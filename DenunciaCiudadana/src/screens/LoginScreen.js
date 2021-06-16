import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {useDispatch} from 'react-redux';
import {login} from '../actions/authActions';
import translate from '../utils/language.utils.js';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText={translate('SIGN_IN')} />
      <View>
        <FormText titleText={translate('EMAIL')} />
        <FormInput
          labelValue={email}
          placeholderText={translate('EMAIL')}
          onChangeText={userEmail => setEmail(userEmail)}
          type={'email'}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View>
        <FormText titleText={translate('PASSWORD')} />
        <FormInput
          labelValue={password}
          placeholderText={translate('PASSWORD')}
          onChangeText={userPassword => setPassword(userPassword)}
          type={'password'}
          secureTextEntry={true}
        />
      </View>

      <FormButton
        buttonTitle={translate('SIGN_IN')}
        onPress={() => dispatch(login(email, password))}
      />

      <FormText titleText="O" />
      <FormButton
        buttonTitle={translate('SIGN_IN_GOOGLE')}
        onPress={() => Alert.alert(translate('SIGN_IN_GOOGLE'))}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <FormText titleText={translate('NAV_SIGN_UP')} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
