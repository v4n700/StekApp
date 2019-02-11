import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';

export default class NewsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Новости',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/NEWS/drawable-hdpi/Group15.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <Text>Новости</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    height: 34,
    width: 34
  }
});