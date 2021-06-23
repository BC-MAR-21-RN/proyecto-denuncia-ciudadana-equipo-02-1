import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import FormTitle from '../components/FormTitle';
import FormText from '../components/FormText';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../assets/styles/styles';
import auth from '@react-native-firebase/auth';
import {updateProfile} from '../database/Firebase';
import translate from '../utils/language.utils.js';

const UserSettingsScreen = () => {
  const user = auth().currentUser;
  const isValid = useSelector(state => state.validations.isValid);

  const [username, setUserName] = useState(!user ? '' : user.displayName);
  const [email, setEmail] = useState(!user ? '' : user.email);
  const [password, setPassword] = useState(!user ? '' : user.password);

  return (
    <View style={styles.container}>
      <FormTitle titleText={'Configuración de Usuario'} />
      <View>
        <FormText titleText={translate('USERNAME')} />
        <FormInput
          labelValue={username}
          placeholderText={translate('USERNAME')}
          onChangeText={userName => setUserName(userName)}
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
        buttonTitle={translate('SAVE')}
        onPress={() =>
          isValid
            ? updateProfile(username, email, password)
            : Alert.alert(translate('VALIDATION_MSG_BUTTON'))
        }
      />
    </View>
  );
};

export default UserSettingsScreen;
