import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Linking} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import { CachedImage, ImageCacheProvider } from 'react-native-cached-image';

export default class CircleLinksComponent extends Component{

  constructor(props) {
    super(props);
  }


  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity} onPress={()=>{Linking.openURL(this.props.link)}}>
          <View style={styles.shadow}>
            <Image source={this.props.imagePath} style={styles.roundImageView}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 1,
  },
  opacity: {
    marginLeft: '3%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  roundImageView: {
    marginTop: '3%',
    width: scale(80),
    height: scale(80)
  },
  categoryName: {
    marginTop: '3%',
    marginLeft: '6%',
    width:'70%',
    fontFamily: 'Roboto',
    fontSize: scale(17),
    fontWeight: '900',
    color: '#828282'
  },
  underline: {
    marginTop: '3%',
    height: verticalScale(2),
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});