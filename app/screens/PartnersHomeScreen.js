import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import PartnersCategoriesListComponent from '../components/PartnersCategoriesListComponent';
import HeaderComponent from '../components/HeaderComponent';

export default class PartnersScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Партнеры',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Partners/drawable-hdpi/Group12.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <PartnersCategoriesListComponent navigation={this.props.navigation}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  icon: {
    height: 34,
    width: 34
  }
});