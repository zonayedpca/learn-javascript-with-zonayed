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

class AboutMe extends Component {
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
              <Title>আমার সম্পর্কে</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <View style={styles.viewStyle}>
              <Image style={styles.imageHeadStyle} resizeMode={'contain'} source={profileImage}/>
              <Text style={styles.pHeadStyle}>I AM</Text>
              <H1 style={styles.h1Styles}>ZONAYED AHMED</H1>
              <H3 style={styles.h3Styles}>FRONT END ENGINEER</H3>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>PROGRAMMING LANGUAGE</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>C</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>C++</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>JAVA</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>JAVASCRIPT</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>PYTHON</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>PHP</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>WEB SKILLS</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>HTML5</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>CSS3</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>JQUERY</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>BOOTSTRAP</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>ES6</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>REACT</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>REACT NATIVE</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>REDUX</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>ELECTRON JS</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>NODE JS</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>EXPRESS JS</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>MONGODB</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>SOFT SKILLS</Text>
              <Text style={styles.skillsContainerStyle}>
                <Text style={styles.skillsStyle}>SASS</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>STYLUS</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>GULP</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>GIT</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>GITHUB</Text>
                <Text> </Text>
                <Text style={styles.skillsStyle}>AND MORE</Text>
              </Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <Text style={styles.pHeadStyle}>ON THE WEB</Text>
              <Icon
                name='attach'
                style={{ width: null, height: 30, justifyContent: 'center', textAlign: 'center' }}
              /><Text style={styles.pStyle}>zonayed.me</Text>
              <Icon
                name='mail'
                style={styles.iconStyle}
              /><Text style={styles.pStyle}>zonayedpca@yahoo.com</Text>
              <Icon
                name='logo-github'
                style={styles.iconStyle}
              /><Text style={styles.pStyle}>github.com/zonayedpca</Text>
              <Icon
                name='logo-facebook'
                style={styles.iconStyle}
              /><Text style={styles.pStyle}>facebook.com/zonayedpca</Text>
              <Icon
                name='logo-twitter'
                style={styles.iconStyle}
              /><Text style={styles.pStyle}>twitter.com/zonayedpca</Text>
              <Text style={styles.pHeadStyle}>|</Text>
              <H1 style={styles.h1Styles}>THANK YOU!</H1>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default AboutMe;
