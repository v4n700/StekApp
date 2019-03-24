import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import FAQComponent from '../components/FAQComponent';

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
        <FAQComponent navigation={this.props.navigation}/>
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