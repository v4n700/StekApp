import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import { CachedImage, ImageCacheProvider } from 'react-native-cached-image';

export default class RoundCategoryComponent extends Component{

  constructor(props) {
    super(props);
  }


  render() {
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity} onPress={()=> navigation.navigate('PartnersListScreen', {categoryID :this.props.categoryID})}>
          <View style={styles.shadow}>
            <CachedImage source={{uri : this.props.imagePath}} style={styles.roundImageView}/>
          </View>
          <Text multiline={true} style={styles.categoryName}>{this.props.categoryName}</Text>
        </TouchableOpacity>
        <View style={styles.underline}/>
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