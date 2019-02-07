import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class PartnerInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> {this.props.categoryName} </Text>
          <Image source={(this.props.imagePath)} style={styles.partnerLogo}/>
        </View>
        <View style={styles.bodyTextRowView}>
          <Icon name="info" size={24} color="#E37926"/>
          <Text style={styles.bodyText}>{this.props.description}</Text>
        </View>
        <View style={styles.bodyTextRowView}>
          <Icon name="location-pin" size={24} color="#E37926"/>
          <Text style={styles.bodyText}>{this.props.address}</Text>
        </View>
        <View style={styles.bodyTextRowView}>
          <Icon name="phone" size={24} color="#E37926"/>
          <Text style={styles.bodyText}>{this.props.phoneNumber}</Text>
        </View>
        <View style={styles.bodyTextRowView}>
          <Icon name="link" size={24} color="#E37926"/>
          <Text style={styles.bodyText}>{this.props.link}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    alignItems: 'center'
  },
  headerText: {
    marginTop: verticalScale(17),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24
  },
  partnerLogo: {
    marginTop: verticalScale(17),
    marginBottom: verticalScale(50),
    height: scale(133),
    width: scale(133)
  },
  bodyTextRowView: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    marginLeft: scale(29)
  },
  bodyText: {
    marginLeft: scale(10),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: 20
  }
});