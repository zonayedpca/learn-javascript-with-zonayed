const React = require('react-native');
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get('window').height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 40 : 50,
    top: Platform.OS === 'android' ? 0 : 50,
    width: 280,
    height: 240
  },
  text: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    color: '#333',
    bottom: 6,
    marginTop: 5
  }
};
