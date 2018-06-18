import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from 'native-base';
import styles from './style';

const drawerCover = require('../../../assets/jsbanner.jpg');
const drawerImage = require('../../../assets/logo.png');
const datas = [
  {
    name: 'হোম',
    route: 'Home',
    icon: 'md-home',
    bg: '#C5F442'
  },
  {
    name: 'টপিকস',
    route: 'Topics',
    icon: 'md-apps',
    bg: '#C5F442'
  },
  {
    name: 'প্লে-গ্রাউন্ড',
    route: 'PlayGround',
    icon: 'md-code',
    bg: '#263238',
    types: 'BETA'
  },
  {
    name: 'আমার সম্পর্কে',
    route: 'AboutMe',
    icon: 'md-person',
    bg: '#C5F442'
  },
  {
    name: 'কন্ট্রিবিউট',
    route: 'Contribute',
    icon: 'md-git-pull-request',
    bg: '#1EBC7C',
    types: 'অনুরোধ'
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: '#777', fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types}`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
