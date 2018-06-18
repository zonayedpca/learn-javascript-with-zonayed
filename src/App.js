import React from 'react';
import { ImageBackground } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './screens/home/';
import SideBar from './screens/sidebar';
import SingleItems from './screens/topics/singleItems';
import SingleItem from './screens/topics/singleItem';
import Topics from './screens/topics/';
import PlayGround from './screens/playground/';
import AboutMe from './screens/aboutme/';
import Contribute from './screens/contribute/';

const Drawer = DrawerNavigator(
  {
    //My Routes
    Home: { screen: Home },
    Topics: { screen: Topics },
    PlayGround: { screen: PlayGround },
    AboutMe: { screen: AboutMe },
    Contribute: { screen: Contribute },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    SingleItems: { screen: SingleItems },
    SingleItem: { screen: SingleItem }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
