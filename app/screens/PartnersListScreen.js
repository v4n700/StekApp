import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Alert, RefreshControl, FlatList} from 'react-native';
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
  keyExtractor = (item, index) => item.name.toString();

  renderSeparator = () => {
    return (
      <View
        style={{
          marginTop: '3%',
          height: verticalScale(2),
          backgroundColor: 'rgba(166, 166, 173, 0.3)'
        }}
      />
    );
  };

  render() {
    return (
    <View style={styles.container}>
      <HeaderComponent navigation = {this.props.navigation}/>
      <FlatList 
          data={this.state.partners}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
          ListEmptyComponent={<Text style={styles.emptyText}>Ожидается появление партнеров</Text>}
          onRefresh={this.getPartners}
          renderItem={({item}) => 
            <PartnerCardComponent 
              partnerName={item.name} 
              discount={item.discount}
              url={item.url}
              image={item.image}
              phone={item.telephone}
              address={item.address}
              description={item.description}
              navigation={this.props.navigation}
            />
          }
      />
      {/* <ScrollView style={styles.scroll} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.getPartners}/>}>
        {this.renderPartners()}
      </ScrollView> */}
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
  },
  emptyText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    textAlign:'center'
  }
});