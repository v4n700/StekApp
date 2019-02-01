import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import PartnersListComponent from '../components/PartnersListComponent'

export default class PartnersListScreen extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Icon name="menu" style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}/>
          <Text style={styles.stek}>СТЭК</Text>
        </Left>
        <Right>
        </Right>
      </Header>
      <PartnersListComponent/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  menuButton: {
    marginLeft: 16,
    color: "white"
  },
  header: {
    backgroundColor: 'orange',
  },
  left: {
    flexDirection: 'row',
  },
  stek: {
    fontSize: 22,
    color: 'white',
    marginLeft: 32,
    marginTop: 2,
    fontWeight: 'bold',
  }
});