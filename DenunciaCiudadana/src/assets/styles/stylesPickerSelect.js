import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.2,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
  },
});

export {pickerSelectStyles};
