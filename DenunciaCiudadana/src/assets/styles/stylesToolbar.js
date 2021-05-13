import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const stylesToolbar = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    opacity: 0.8,
    color: '#007AFF',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default stylesToolbar;
