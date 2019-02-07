import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView from 'react-native-maps';

import HeaderComponent from '../components/HeaderComponent';

export default class MapScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Карта',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Maps/drawable-hdpi/Group13.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 61.7877502,
            longitude: 34.3794617,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  icon: {
    height: 34,
    width: 34
  }
});