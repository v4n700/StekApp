import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';

export default class FAQScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Вопросы',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/FAQ/drawable-hdpi/Group16.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <Text>Вопросы</Text>
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