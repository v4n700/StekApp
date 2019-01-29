import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';

export default class CustomDrawerComponent extends Component{
  render() {
    const {...props} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/drawerStekLogo.png')}/>
        </View>
        <DrawerItems {...props}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    height: 150,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center'
  },
  logo: {
    resizeMode: "contain",
    height: 120,
    width: 200,
  }
});