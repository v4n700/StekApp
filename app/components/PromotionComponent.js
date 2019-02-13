import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class PromotionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgWidth: 0,
      imgHeight: 0,
    }
  }


  componentDidMount() {
    Image.getSize(this.props.image, (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width - 10
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
    })
  }

  render() {
    const {imgWidth, imgHeight} = this.state
    return (
      <View style = {styles.container}>
          <Text style={styles.headerText}>{this.props.title}</Text>
          <Image style={{width: imgWidth, height: imgHeight, alignSelf:'center'}} source={{uri : this.props.image}} />
          <Text style={styles.promotionText}>{this.props.description}</Text>
          <View style={styles.underline}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '3%',
    textAlign: 'center'
  },
  promotionText: {
    margin: '3%',
    fontSize: 20,
  },
  underline: {
    marginTop: '1%',
    alignSelf: 'center',
    width: '95%',
    height: 1,
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});