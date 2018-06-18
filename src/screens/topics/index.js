import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Card,
  CardItem
} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabAllTopics} from '../../actions';
import LoadingPage from '../loadingscreen';
import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');

const datas = [
  {
    route: 'BasicCard',
    text: 'Basic Card'
  },
  {
    route: 'NHCardHeaderAndFooter',
    text: 'Card Header & Footer'
  },
  {
    route: 'NHCardItemBordered',
    text: 'Bordered CardItem'
  },
  {
    route: 'NHCardTransparent',
    text: 'Transparent Card'
  },
  {
    route: 'NHCardItemButton',
    text: 'Button CardItem'
  },
  {
    route: 'NHCardList',
    text: 'Card List'
  },
  {
    route: 'NHCardImage',
    text: 'Card Image'
  },
  {
    route: 'NHCardShowcase',
    text: 'Card Showcase'
  }
];

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: ''
    }
  }

  async componentDidMount() {
    await this.props.grabAllTopics();
    this.setState({topics: this.props.topics});
  }

  render() {
    const topics = !this.state.topics ? '' : this.state.topics.map(topic => <ListItem style={styles.listItem} key={topic.title}><Card style={styles.card}><CardItem style={styles.cardItem} button onPress={() => this.props.navigation.navigate('SingleItems', { id: topic.id, name: topic.title})}><Body><Text style={styles.cardText}>{topic.title}</Text></Body></CardItem></Card></ListItem>);
    if(!this.state.topics) {
      return <LoadingPage />
    }
    return (
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <Container>
          <Header style={styles.headerStyle}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>টপিকস</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List style={styles.list}>
              {topics}
            </List>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state){
  return {
    topics : state.topics
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({grabAllTopics}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Topics);
