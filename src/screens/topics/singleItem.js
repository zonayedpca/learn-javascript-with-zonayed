import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView } from 'react-native';
import {
  H1,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Footer,
  FooterTab,
  View,
  List,
  ListItem
} from 'native-base';
import uuidv1 from 'uuid/v1';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabOneItem} from '../../actions';
import LoadingPage from '../loadingscreen';
import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  async componentDidMount() {
    const pid = this.props.navigation.state.params.pid;
    const id = this.props.navigation.state.params.id;
    const item = await this.props.grabOneItem(pid, id);
    this.setState({item: this.props.item});
  }

  render() {
    if(!this.state.item) {
      return <LoadingPage />
    }
    const contents = this.state.item.description.map(content => {
      if(content.type == 'p') {
        return <Text key={uuidv1()} style={styles.textStyle}>{content.content}</Text>
      } else if(content.type == 'h1') {
        return <H1 key={uuidv1()} style={styles.h1Style}>{content.content}</H1>;
      } else if(content.type == 'ol') {
        return <View key={uuidv1()} style={styles.listStyle}>{content.content.map(one => <Text key={uuidv1()} style={styles.listItemStyle}>{one}</Text>)}</View>;
      } else if(content.type == 'hr') {
        return <Text key={uuidv1()}>...</Text>
      } else if(content.type == 'code') {
        return <View key={uuidv1()} style={styles.codeStyle}>{content.content.map(one => <ScrollView key={uuidv1()} horizontal><Text>{one}</Text></ScrollView>)}</View>;
      } else if(content.type == 'img') {
        return <Image key={uuidv1()} style={styles.imageStyle} resizeMode={'contain'} source={{uri: content.content[0]}}/>
      }
    });

    return (
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <Container style={styles.container}>
          <Header style={styles.headerStyle}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.navigation.state.params.name}</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <View style={styles.viewStyle}>
              {!this.state.item ? <Text>Loading...</Text> : <View>{contents}</View>}
            </View>
          </Content>
          {(this.state.item.prevItem || this.state.item.nextItem) ? <Footer>
            <FooterTab style={styles.footerTabStyle}>
              {this.state.item.prevItem ? <Button onPress={() => this.toggleTab1()}>
                <Text style={styles.footerTextStyle}>আগের পোস্ট</Text>
              </Button> : null}
              {this.state.item.nextItem ? <Button onPress={() => this.toggleTab4()}>
                <Text style={styles.footerTextStyle}>পরের পোস্ট</Text>
              </Button> : null}
            </FooterTab>
          </Footer> : null}
        </Container>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state){
  return {
    item : state.item
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({grabOneItem}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleItem);
