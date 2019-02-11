import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import HeaderComponent from '../components/HeaderComponent';

export default class AboutUsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'О нас',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/AboutUs/drawable-hdpi/Group11.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <View style={styles.textView}>
          <Text style={styles.headerText}>Что такое СТЭК?</Text>
          <Text style={styles.bodyText}>Тут куча всякого текста всякого текста всякого текста всякого текста всякого текста всякого текста</Text>
        </View>
        <View style={styles.underlineShadow}>
          <View style={styles.underline}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    height: 34,
    width: 34
  },
  textView: {
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '800',
    marginTop: verticalScale(19),
    marginBottom: verticalScale(18),
    color: 'black'
  },
  bodyText: {
    fontFamily: 'Roboto',
    marginLeft: scale(25),
    fontSize: 15,
    marginRight: scale(25)
  }, 
  underline: {
    alignSelf: 'center',
    marginTop: verticalScale(5),
    width: '92%',
    height: verticalScale(3),
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  },
  underlineShadow: {
    shadowColor: 'gray',
    shadowOffset: {height: verticalScale(2), width: 0},
    shadowOpacity: 1
  }
});