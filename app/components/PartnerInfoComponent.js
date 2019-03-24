import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { scale, verticalScale } from '../utilities/Scaling';
import PartnerInfoTextViewComponent from './PartnerInfoTextViewComponent';

export default class PartnerInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style = {styles.container} alwaysBounceVertical={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}> {this.props.categoryName} </Text>
          <Image source={{uri:this.props.imagePath}} style={styles.partnerLogo}/>
        </View>
        <PartnerInfoTextViewComponent text={this.props.description} iconName={'description'}/>
        <PartnerInfoTextViewComponent text={this.props.discount} iconName={'percent'}/>
        <PartnerInfoTextViewComponent text={this.props.address} iconName={'marker'}/>
        <PartnerInfoTextViewComponent text={this.props.phoneNumber} iconName={'phone'}/>
        <PartnerInfoTextViewComponent text={this.props.link} iconName={'link'}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    alignItems: 'center'
  },
  headerText: {
    marginTop: verticalScale(17),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24
  },
  partnerLogo: {
    marginTop: verticalScale(17),
    marginBottom: verticalScale(50),
    height: scale(133),
    width: scale(133)
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
    color: 'black'
  }
});