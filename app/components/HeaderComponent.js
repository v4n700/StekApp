import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';
import { Toolbar } from 'react-native-material-ui';


export default class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={styles.safeAreaView}>
        <Toolbar
          leftElement="menu"
          centerElement="СТЭК"
          style={{ container: { backgroundColor: 'orange' } }}
          onLeftElementPress={() => navigation.openDrawer()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'orange',
    shadowColor: 'gray',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
  }
});