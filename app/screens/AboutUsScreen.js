import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';

export default class AboutUsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'О нас',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/AboutUs/drawable-hdpi/Group11.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <Text>О нас</Text>
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