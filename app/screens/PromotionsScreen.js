import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PromotionComponent from '../components/PromotionComponent';

export default class PromotionsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Акции',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Promotions/drawable-hdpi/Group14.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <ScrollView>
          <PromotionComponent />
        </ScrollView>
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