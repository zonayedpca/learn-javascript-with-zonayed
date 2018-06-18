import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  View,
  H1,
  H2,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from 'native-base';

import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');
const profileImage = require('../../../assets/zonayed.png');

class Contribute extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.ImageBGStyle}>
          <Header style={styles.headerStyle}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon name='ios-menu' />
              </Button>
            </Left>
            <Body>
              <Title>কন্ট্রিবিউট</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <View style={styles.viewStyle}>
              <Icon
                name='md-git-pull-request'
                style={styles.iconStyle}
              />
              <Text style={styles.pHeadStyle}>YOU ARE REQUESTED TO</Text>
              <H1 style={styles.h1Styles}>CONTRIBUTE</H1>
              <H3 style={styles.h3Styles}>TO THIS PROJECT</H3>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>SOURCE CODE</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>http://bit.ly/lrnjspca</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>SUGGESTIONS</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>Any kind of improvement or new feature is expected. Also if you find any bug, please let me know or you can fix that and send me a pull request</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>PULL REQUESTS</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>Any kind of improvement, feature or even a small typo fix can be submitted.</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>OPEN SOURCE</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>Though this application is using for my own blog posts, but the whole code is open source. So by contributing something on this application, you can be connected with open source world. Also it will work as a good portfolio for you.</Text>
              </Text>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Contribute;
