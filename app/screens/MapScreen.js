import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

export default class MapScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Карта',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Maps/drawable-hdpi/Group13.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <Text>Карта</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  icon: {
    height: 34,
    width: 34
  }
});