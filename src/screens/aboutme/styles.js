import { StatusBar } from 'react-native';

export default {
  container: {
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight
  },
  ImageBGStyle: {
    flex: 1,
    width: null,
    height: null
  },
  headerStyle: {
    backgroundColor: 'transparent'
  },
  viewStyle: {
    backgroundColor: '#fff',
    padding: 30,
    marginBottom: 25
  },
  imageHeadStyle: {
    height: 60,
    width: null
  },
  h1Styles: {
    fontWeight: '900',
    textAlign: 'center'
  },
  pHeadStyle: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: '900'
  },
  h3Styles: {
    textAlign: 'center',
  },
  skillsContainerStyle: {
    textAlign: 'center'
  },
  skillsStyle: {
    fontSize: 12
  },
  pStyle: {
    fontSize: 13,
    textAlign: 'center'
  },
  iconStyle: {
    width: null,
    height: 15,
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center'
  }
};
