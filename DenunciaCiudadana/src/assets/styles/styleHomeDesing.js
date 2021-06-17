import {StyleSheet} from 'react-native';
import {COLOR} from '../constanst/theme';

const stylesHome = StyleSheet.create({
  title: {
    fontSize: 20,
    color: COLOR.BLUE,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: '2.5%',
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
  },
  complaint: {
    borderColor: COLOR.BLUE,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    marginVertical: 15,
  },
  titleComplaint: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameAndService: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    marginVertical: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLOR.RED,
    padding: 10,
    borderRadius: 7,
  },
  textButton: {
    color: COLOR.WHITE,
  },
  containerNoComplaint: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoComplaint: {
    fontSize: 18,
  },
});

export {stylesHome};
