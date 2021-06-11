import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '../../utils/Dimensions';

const stylesAddComplaint = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnNext: {
    alignItems: 'center',
  },
  containerRadioBtn: {
    width: windowWidth / 1.2,
  },
  datefield: {
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    width: '28%',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
  },
  enabled: {
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    width: '28%',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'gainsboro',
  },
  imageBox: {
    width: windowWidth / 1.5,
    height: windowHeight / 4,
  },
  imageContainer: {
    marginVertical: 10,
    borderWidth: 5,
    padding: 10,
    borderColor: 'royalblue',
  },
});

export {stylesAddComplaint};
