import React, {Component} from 'react';
import { StyleSheet, Text, View, Linking, Alert } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import { scale, verticalScale } from '../utilities/Scaling';
import stekIconConfig from '../fonts/Stek/config.json';
const Icon = createIconSetFromFontello(stekIconConfig);

export default class PartnerInfoPhoneComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    if(this.props.text.length) {
      this.setState({visible: true});
    }
  }

  render() {
    return(
      <View>
          {this.state.visible && <PhoneText text={this.props.text} iconName={this.props.iconName}/>}
      </View>
    );
  }
}

export class PhoneText extends Component {

  renderPhones = () => {
    return this.props.text.map((phone, i) => {
      return (
        <Text onPress={()=> Linking.openURL(`tel:+7${phone}`)} key={i} multiline={true} style={styles.phone}>{phone}</Text>
      )
    }); 
  }

  render() {
    return (
      <View style={styles.bodyTextRowView}>
        <View style={styles.iconView}>
          <Icon name={this.props.iconName} size={24} color="#E37926"/>
        </View>
        <View style={styles.phoneView}>
          {this.renderPhones()}
        </View>
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
  phoneView: {
    flexDirection:'column'
  },
  bodyTextRowView: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    marginLeft: scale(29),
    marginRight: scale(29)
  },  
  phone: {
    marginLeft: scale(10),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: 20,
    width: '95%',
    color: '#E37926',
    textDecorationLine: 'underline'
  }
});