import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  View,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Textarea
} from 'native-base';

import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');

class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      result: '',
      error: ''
    }
    this.evaluateCode = this.evaluateCode.bind(this);
    this.resetCode = this.resetCode.bind(this);
  }

  evaluateCode() {
    this.setState({result: '', error: ''});
    try {
      let data = this.state.data;
      // console.log(data);
      if(data.includes('console.log')) {
        console.log('included');
        var oldLog = console.log;
        console.log = function(value){
          oldLog(value);
          return value;
        }
        console.log(data);
      } else if(data == 'window') {
        data = 'var error = "This app is still in Beta version, not configured yet for this type of action"; error;';
      }
      console.log(result);
      let result = eval(data);
      console.log(result);
      result = JSON.stringify(result, undefined, 2);
      this.setState({result});
      console.log('From Here: ' + result);
    } catch(err) {
      this.setState({error: err});
    }
  }

  resetCode() {
    this.setState({data: '', result: '', error: ''});
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.ImageBGStyle}>
          <Header style={styles.headerStyle}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>প্লে-গ্রাউন্ড</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <View style={styles.viewStyle}>
              <Textarea onChangeText={(code) => this.setState({data: code})} rowSpan={11} style={styles.textareaStyle} value={this.state.data} placeholder="Put your code here and see it in action" />
            </View>
            <Button onPress={this.evaluateCode} block style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Excecute</Text>
            </Button>
            <Button onPress={this.resetCode} block danger>
              <Text>Reset</Text>
            </Button>
            {this.state.result ? <View style={styles.resultCard}>
              {this.state.result ? <Text style={styles.textWhite}>{this.state.result}</Text> : <Text style={styles.textWhite}>No Result</Text>}
            </View> : null}
            {this.state.error ? <View style={styles.errorCard}>
              {this.state.error ? <Text style={styles.textWhite}>{this.state.error.message}</Text> : <Text style={styles.textWhite}>No Error</Text>}
            </View> : null}
            {this.state.error ? <View style={styles.moreInfoCard}>
              {this.state.error ? <Text>{this.state.error.stack}</Text> : null}
            </View> : null}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default PlayGround;
