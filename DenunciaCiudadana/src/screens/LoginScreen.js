import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {login} from '../actions/authActions';
import translate from '../utils/language.utils.js';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isValid = useSelector(state => state.validations.isValid);

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
        onPress={() =>
          isValid
            ? dispatch(login(email, password))
            : Alert.alert(translate('VALIDATION_MSG_BUTTON'))
        }
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
