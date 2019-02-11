import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PartnerInfoComponent from '../components/PartnerInfoComponent';

export default class PartnerInfoScreen extends Component{

  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <PartnerInfoComponent 
          categoryName='Coffessor'
          imagePath={require('../assets/test/coffessor.png')}
          description='Кофе, чай, вкусняхи, акции'
          address='ул. Антикайнена 25'
          phoneNumber='89021112434'
          link='link'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});