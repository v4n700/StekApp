import React, {Component} from 'react';
import {View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';

import HeaderComponent from '../components/HeaderComponent';
import API from '../api/API';

export default class MapScreen extends Component{

  constructor(props) {
    super(props);

    this.state = {
      locations: []
    }
  }

  static navigationOptions = {
    drawerLabel: 'Карта',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Maps/drawable-hdpi/Group13.png')} style={styles.icon}/>
    )
  }

  async componentDidMount() {
    this.getLocations();
  }

  getLocations = async () => {
    await API.Map().GetLocations().then(
      async(response) => {
        // Alert.alert(JSON.stringify(response))
        this.setState({locations: response})
      }, (error) => {

      }
    )
  }

  renderLocations = () => {
    return this.state.locations.map((location, i) => {
      return (
        <MapView.Marker key={i} coordinate={location} title={location.name}/>
      )
    }); 
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
        >
          {this.renderLocations()}
        </MapView>
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
  }
});