import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';


export default class RoundCategoryComponent extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch}>
        <Image source={require('../assets/test/coffessor.png')} resizeMode="contain" style={styles.partnerLogo}/>
        <View style={styles.textView}>
          <Text style={styles.upperText}>Скидка 15% </Text>
          <Text style={styles.partnerName}>Coffessor</Text> 
        </View>
        </TouchableOpacity>
          <View style={styles.underline}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: scale(344),
    height: verticalScale(110),
    marginTop: verticalScale(10)
  },
  touch: {
    flexDirection: 'row'
  },
  textView: {
    flexDirection: 'column',
    marginLeft: scale(10)
  },
  partnerLogo: {
    marginTop: verticalScale(15),
    marginLeft: scale(2),
    width: scale(90),
    height: scale(90),
  },
  upperText: {
    marginTop: verticalScale(16),
    fontFamily: 'Roboto',
    fontSize: moderateScale(12)
  },
  partnerName: {
    marginTop: verticalScale(10),
    fontFamily: 'Roboto',
    fontSize: moderateScale(24),
    fontWeight: 'bold'
  },
  underline: {
    marginTop: verticalScale(15),
    width: scale(322),
    height: verticalScale(3),
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});