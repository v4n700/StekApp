import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Linking, Alert} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import stekIconConfig from '../fonts/Stek/config.json';
const Icon = createIconSetFromFontello(stekIconConfig);

export default class PartnerInfoTextViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      link: false
    };
  }

  componentDidMount() {
    if(this.props.text) {
      this.setState({visible: true});
    }

    if(this.props.iconName === 'link') {
      this.setState({link: true});
    }
  }

  render() {
    return(
      <View>
          {this.state.visible && !(this.state.link) && <SpoilerText text={this.props.text} iconName={this.props.iconName}/>}
          {this.state.visible && this.state.link && <LinkText text={this.props.text} iconName={this.props.iconName}/>}
      </View>
    );
  }
}

export class SpoilerText extends Component {
  render() {
    return (
      <View style={styles.bodyTextRowView}>
        <Icon name={this.props.iconName} size={24} color="#E37926"/>
        <Text multiline={true} style={styles.bodyText}>{this.props.text}</Text>
      </View>
    );
  }
}

export class LinkText extends Component {
  render() {
    return (
      <View style={styles.bodyTextRowView}>
        <Icon name={this.props.iconName} size={24} color="#E37926"/>
        <Text onPress={()=>{Linking.openURL(this.props.text)}} multiline={true} style={styles.link}>{this.props.text}</Text>
      </View>
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
  },
  bodyTextRowView: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    marginLeft: scale(29)
  },
  bodyText: {
    marginLeft: scale(10),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: 20,
    width: '95%',
    color: 'black'
  },
  link: {
    marginLeft: scale(10),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: 20,
    width: '95%',
    color: 'blue',
    textDecorationLine: 'underline'
  }
});