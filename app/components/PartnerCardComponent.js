import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';


export default class PartnerCardComponent extends Component{
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.touch} 
          onPress={()=> navigation.navigate('PartnerInfoScreen', {
            partnerName: this.props.partnerName,
            discount:this.props.discount,
            url:this.props.url,
            image:this.props.image,
            phone:this.props.phone,
            address:this.props.address,
            description:this.props.description
          })}>
        <Image source={{uri : this.props.image}} resizeMode="contain" style={styles.partnerLogo}/>
        <View style={styles.textView}>
          <Text style={styles.upperText}>{this.props.discount}</Text>
          <Text style={styles.partnerName}>{this.props.partnerName}</Text> 
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
    fontWeight: 'bold',
    color: 'black'
  },
  underline: {
    marginTop: verticalScale(15),
    width: scale(322),
    height: verticalScale(3),
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});