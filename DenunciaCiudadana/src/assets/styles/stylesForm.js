import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const stylesForm = StyleSheet.create({
  title: {
    color: '#007aff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.2,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonContainer: {
    width: windowWidth / 1.2,
    backgroundColor: '#007aff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default stylesForm;
