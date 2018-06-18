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
    height: 280
  },
  textareaStyle: {
    padding: 15
  },
  buttonStyle: {
    backgroundColor: '#f0db4f'
  },
  buttonTextStyle: {
    color: '#323330'
  },
  textWhite: {
    color: '#fff'
  },
  resultCard: {
    backgroundColor: '#4CAF50',
    padding: 15
  },
  errorCard: {
    backgroundColor: '#F44336',
    padding: 15
  },
  moreInfoCard: {
    backgroundColor: '#FFC107',
    padding: 15
  }
};
