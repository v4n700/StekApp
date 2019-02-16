import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Alert, RefreshControl} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import HeaderComponent from '../components/HeaderComponent';
import PartnerCardComponent from '../components/PartnerCardComponent';

import API from '../api/API';

export default class PartnersListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      partners: []
    }
  }

  async componentDidMount() {
    this.getPartners();
  }

  getPartners = async () => {
    this.setState({ refreshing: true })

    await API.Partners().GetPartners(this.props.navigation.getParam('categoryID')).then(
      async(response) => {
        this.setState({ partners: response, refreshing: false })
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }

  renderPartners = () => {
    return this.state.partners.map((partner, i) => {
      return (
        <PartnerCardComponent 
          key={i} 
          partnerName={partner.name} 
          discount={partner.discount}
          url={partner.url}
          image={partner.image}
          phone={partner.telephone}
          address={partner.address}
          description={partner.description}
          navigation={this.props.navigation}
          />
      )
    }); 
  }

  render() {
    return (
    <View style={styles.container}>
      <HeaderComponent navigation = {this.props.navigation}/>
      <ScrollView style={styles.scroll} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.getPartners}/>}>
        {this.renderPartners()}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scroll: {
    marginLeft: scale(9)
  }
});