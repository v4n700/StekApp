import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';


export default class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <Header style={styles.header}>
        <StatusBar backgroundColor="orange" barStyle="light-content" />
        <Left style={styles.left}>
          <TouchableOpacity style={styles.opacity} onPress={() => navigation.openDrawer()}>
            <Icon name="menu" style={styles.menuButton}/>
          </TouchableOpacity>
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
    color: "white",
    marginLeft: 8
  },
  opacity: {
    width: 60,
    height: 50,
    justifyContent:'center'
  },
  header: {
    backgroundColor: 'orange',
  },
  left: {
    flexDirection: 'row',
    alignItems:'center'
  },
  stek: {
    fontSize: 22,
    fontFamily: 'Roboto',
    color: 'white',
    marginLeft: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 1
  },
});