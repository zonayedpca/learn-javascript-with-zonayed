import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  ListItem,
  List,
  Text,
  Body,
  Left,
  Right
} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabAllItems} from '../../actions';
import LoadingPage from '../loadingscreen';
import styles from './styles';

const launchscreenBg = require('../../../assets/bg.jpg');

class SingleItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ''
    }
  }

  async componentDidMount() {
    const id = this.props.navigation.state.params.id;
    const items = await this.props.grabAllItems(id);
    this.setState({items: this.props.items});
  }

  render() {
    if(!this.state.items) {
      return <LoadingPage />
    }
    const id = this.props.navigation.state.params.id;
    const items = this.state.items.map(item => <ListItem key={item.title} style={styles.listItem}><Card style={styles.card}><CardItem button onPress={() => this.props.navigation.navigate('SingleItem', { id: item.id, pid: id, name: item.title})} style={styles.cardItem}><Body><Text style={styles.cardText}>{item.title}</Text></Body></CardItem></Card></ListItem>);
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
            <List style={styles.list}>
              {items}
            </List>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state){
  return {
    items : state.items
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({grabAllItems}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleItems);
