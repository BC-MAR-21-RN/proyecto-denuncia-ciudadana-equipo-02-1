import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {useDispatch} from 'react-redux';
import {createUser} from '../actions/authActions';
import translate from '../utils/language.utils.js';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  return (
    <View style={styles.container}>
      <FormTitle titleText={translate('SIGN_UP')} />
      <View>
        <FormText titleText={translate('USERNAME')} />
        <FormInput
          labelValue={userName}
          placeholderText={translate('USERNAME')}
          onChangeText={userNames => setUserName(userNames)}
          type={'username'}
        />
      </View>
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
      <View>
        <FormText titleText={translate('REPEAT_PASSWORD')} />
        <FormInput
          labelValue={password2}
          placeholderText={translate('REPEAT_PASSWORD')}
          onChangeText={userPassword2 => setPassword2(userPassword2)}
          type={'password'}
          secureTextEntry={true}
        />
      </View>

      <FormButton
        buttonTitle={translate('SIGN_UP')}
        onPress={() =>
          password === password2
            ? dispatch(createUser(userName, email, password))
            : Alert.alert(translate('PASSWORD_SAME'))
        }
      />
      <FormText titleText="O" />
      <FormButton
        buttonTitle={translate('SIGN_UP_GOOGLE')}
        onPress={() => Alert.alert(translate('SIGN_UP_GOOGLE'))}
      />

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <FormText titleText={translate('NAV_SIGN_IN')} />
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
