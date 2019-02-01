import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import PartnerCardComponent from '../components/PartnerCardComponent';

export default class PartnersListScreen extends Component {
  render() {
    return (
    <View style={styles.container}>
      <HeaderComponent navigation = {this.props.navigation}/>
      <ScrollView style={styles.scroll}>
        <PartnerCardComponent/>
        <PartnerCardComponent/>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  scroll: {
    marginLeft: scale(9)
  }
});