import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PartnerInfoComponent from '../components/PartnerInfoComponent';

export default class PartnerInfoScreen extends Component{

  render(){
    Alert.alert('cat', JSON.stringify(this.props.categoryName))
    Alert.alert('descr', JSON.stringify(this.props.description))
    Alert.alert('addr', JSON.stringify(this.props.address))
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