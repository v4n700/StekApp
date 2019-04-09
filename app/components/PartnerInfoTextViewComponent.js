import React, {Component} from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import { scale, verticalScale } from '../utilities/Scaling';
import stekIconConfig from '../fonts/Stek/config.json';
const Icon = createIconSetFromFontello(stekIconConfig);

export default class PartnerInfoTextViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
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
          <View style={styles.iconView}>
            <Icon name={this.props.iconName} size={24} color="#E37926"/>
          </View>
          <Text selectable={true} multiline={true} style={styles.bodyText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconView: {
    width: 24,
    height: 24,
    alignItems: 'center'
  },
  bodyTextRowView: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    marginLeft: scale(29),
    marginRight: scale(29)
  },  
  bodyText: {
    marginLeft: scale(10),
    paddingRight: scale(10),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: 20,
    width: '95%',
    color: 'black'
  },
});