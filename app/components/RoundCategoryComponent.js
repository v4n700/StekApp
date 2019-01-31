import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';

export default class RoundCategoryComponent extends Component{

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity}>
          <View style={styles.shadow}>
            <Image source={(this.props.imagePath)} style={[styles.roundImageView, this.props.style]}/>
          </View>
          <Text multiline = {true} style={styles.categoryName}>{this.props.categoryName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    marginTop: 19,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  roundImageView: {

  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 1
  },
  opacity: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryName: {
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '900',
    color: '#828282'
  }
});