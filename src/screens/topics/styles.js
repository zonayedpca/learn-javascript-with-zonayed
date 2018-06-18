import { StatusBar } from 'react-native';

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  headerStyle: {
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },
  list: {
    marginTop: 25,
    marginBottom: 25
  },
  listItem: {
    borderBottomWidth: 0,
    paddingTop: 5,
    paddingBottom: 5
  },
  card: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0
  },
  cardItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingTop: 25,
    paddingBottom: 25
  },
  cardText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18
  },
  viewStyle: {
    backgroundColor: '#fff',
    padding: 25,
    marginBottom: 25,
  },
  h1Style: {
    fontSize: 36,
    color: 'rgba(0,0,0,.84)',
    lineHeight: 50,
    fontWeight: '900',
    marginBottom: 25
  },
  textStyle: {
    fontSize: 22,
    color: 'rgba(0,0,0,.84)',
    lineHeight: 35,
    marginBottom: 15
  },
  listStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  listItemStyle: {
    fontSize: 22,
    marginBottom: 15,
    lineHeight: 35
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: 240
  },
  codeStyle: {
    backgroundColor: '#e7e7e7',
    padding: 15,
    marginBottom: 30
  },
  footerTabStyle: {
    backgroundColor: '#f0db4f'
  },
  footerTextStyle: {
    color: '#323330',
    fontSize: 16
  }
};
