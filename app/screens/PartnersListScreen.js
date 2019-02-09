import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import HeaderComponent from '../components/HeaderComponent';
import PartnerCardComponent from '../components/PartnerCardComponent';

export default class PartnersListScreen extends Component {
  render() {
    return (
    <View style={styles.container}>
      <HeaderComponent navigation = {this.props.navigation}/>
      <ScrollView style={styles.scroll}>
        <PartnerCardComponent navigation = {this.props.navigation}/>
        <PartnerCardComponent navigation = {this.props.navigation}/>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scroll: {
    marginLeft: scale(9)
  }
});