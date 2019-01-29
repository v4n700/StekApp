import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import PartnersScreen from './screens/PartnersHomeScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import CustomDrawerComponent from './components/CustomDrawerComponent';


export default class App extends Component{
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <Drawer/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  PartnersScreen: PartnersScreen,
  PromoScreen: PromotionsScreen
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
})

const Drawer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
