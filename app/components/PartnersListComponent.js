import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import PartnerCardComponent from './PartnerCardComponent';


export default class PartnersListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <PartnerCardComponent/>
        <PartnerCardComponent/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: scale(9)
  }
});