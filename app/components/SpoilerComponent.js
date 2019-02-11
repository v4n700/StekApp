import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class SpoilerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spoilerTextVisible: false,
    };
  }

  _spoilerTextToggle = () => this.setState({spoilerTextVisible: !this.state.spoilerTextVisible});

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.head}>
        <TouchableOpacity onPress={this._spoilerTextToggle}>
          <Text style={styles.spoilerText} multiline={true}>{this.props.spoilerText}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {this.state.spoilerTextVisible && <SpoilerText text={this.props.underSpoiler}/>}
        </View>
        <View style={styles.underline}/>
      </View>
    );
  }
}

export class SpoilerText extends Component {
  render() {
    return (
      <Text style={styles.underSpoiler} multiline={true}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '3%'
  },
  head: {
    alignItems: 'center'
  },
  body: {
    marginTop: verticalScale(5),
    paddingLeft: scale(15),
    paddingRight: scale(15)
  },
  spoilerText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  underSpoiler: {
    fontFamily: 'Roboto',
    color: '#828282',
    fontWeight: '900'
  },
  underline: {
    alignSelf: 'center',
    marginTop: verticalScale(5),
    width: '92%',
    height: verticalScale(1),
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});