import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import Icon from 'react-native-vector-icons/Entypo';

export default class PartnerInfoTextViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    if(this.props.text) {
      this.setState({visible: true});
    }
  }

  render() {
    return(
      <View>
          {this.state.visible && <SpoilerText text={this.props.text} iconName={this.props.iconName}/>}
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
  }
});