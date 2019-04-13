import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PartnerInfoComponent from '../components/PartnerInfoComponent';

export default class PartnerInfoScreen extends Component{

  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <PartnerInfoComponent 
          categoryName={this.props.navigation.getParam('partnerName')}
          imagePath={this.props.navigation.getParam('image')}
          description={this.props.navigation.getParam('description')}
          address={this.props.navigation.getParam('address')}
          phoneNumber={this.props.navigation.getParam('phone')}
          link={this.props.navigation.getParam('url')}
          discount={this.props.navigation.getParam('discount')}
          navigation={this.props.navigation}
        />
        <SafeAreaView style={styles.bottomArea}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomArea: {
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowOffset: {height: -5, width: 0},
    shadowOpacity: 5,
  }
});