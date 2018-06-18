import React, { Component } from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { Container, Button, H3, Text } from 'native-base';

import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');
const launchscreenLogo = require('../../../assets/jsbannerdark.png');

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle='light-content' />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 50,
              backgroundColor: 'transparent'
            }}
          >
            <H3 style={styles.text}>জাভাস্ক্রিপ্ট শিখুন</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>with.zonayed.me</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: '#f0db4f', alignSelf: 'center', padding: 15 }}
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Text style={{color: '#323330', fontSize: 18}}>এখানে শুরু করুন</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
