import React, {Component} from 'react';
import {View, StyleSheet, Image, Alert, AsyncStorage } from 'react-native';
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
        await AsyncStorage.setItem('@Locations', JSON.stringify(response))
        this.setState({locations: response})
      }, async (error) => {
        let marks = await AsyncStorage.getItem('@Locations')
        this.setState({locations: JSON.parse(marks)})
      }
    )
  }

  isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  renderLocations = () => {
    var locations = [];
    for (var i = 0; i < this.state.locations.length; i++) {
      var location = this.state.locations[i];
      for (var j = 0; j < location.locations.length; j++) {
        var coordinate = location.locations[j];
        locations.push({
          id: location.id,
          name: location.name,
          coordinate: coordinate
        });
      }
    }
    return locations.map((location, i) => {
      return (
        <MapView.Marker key={i} coordinate={location.coordinate} title={location.name}/>
      )
    });
    /*
    this.state.locations.map((location) => {
      if (!this.isEmpty(location.locations) ) {
        return location.locations.map((locations, i) => {
          return (
            <MapView.Marker key={i} coordinate={{
              latitude: 61.7877502,
              longitude: 34.3794617
            }} title={'хуй'}/>
          )
        });
    }
    }); 
    */
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