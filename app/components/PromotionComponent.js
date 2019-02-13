import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class PromotionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
          <Text style={styles.headerText}>{this.props.title}</Text>
          <Image style={styles.promotionImage} resizeMode="contain" source={{uri : this.props.image}} />
          <Text style={styles.promotionText}>{this.props.description}</Text>
          <View style={styles.underline}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '3%',
    textAlign: 'center'
  },
  promotionImage: {
    margin: '3%',
    maxHeight: 400,
    width: 'auto'
  },
  promotionText: {
    margin: '3%',
    fontSize: 20,
  },
  underline: {
    marginTop: '1%',
    alignSelf: 'center',
    width: '95%',
    height: 1,
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});