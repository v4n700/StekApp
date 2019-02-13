import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class RoundCategoryComponent extends Component{

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity} onPress={()=> navigation.navigate('PartnersListScreen')}>
          <View style={styles.shadow}>
            <Image source={(this.props.imagePath)} style={styles.roundImageView}/>
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
    marginTop: '3%'
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
    width: scale(80),
    height: scale(80)
  },
  categoryName: {
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