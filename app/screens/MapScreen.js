import React, {Component} from 'react';
import {View, StyleSheet, Image, Alert, AsyncStorage, SafeAreaView } from 'react-native';
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
        <SafeAreaView style={styles.bottomArea}/>
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
  bottomArea: {
    backgroundColor: '#f9f5ed',
    shadowColor: '#f9f5ed',
    shadowOffset: {height: -5, width: 0},
    shadowOpacity: 5,
  }
});