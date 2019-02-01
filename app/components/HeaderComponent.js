import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';


export default class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Icon name="menu" style={styles.menuButton} onPress={() => navigation.openDrawer()}/>
          <Text style={styles.stek}>СТЭК</Text>
        </Left>
        <Right>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 16,
    color: "white"
  },
  header: {
    backgroundColor: 'orange',
  },
  left: {
    flexDirection: 'row',
  },
  stek: {
    fontSize: 22,
    fontFamily: 'Roboto',
    color: 'white',
    marginLeft: 32,
    fontWeight: 'bold'
  },
});