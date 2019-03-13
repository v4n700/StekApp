import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Alert, RefreshControl, FlatList, SafeAreaView} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import { Toolbar } from 'react-native-material-ui';

import PartnerCardComponent from '../components/PartnerCardComponent';

import API from '../api/API';

export default class PartnersListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      refreshing: false,
      partners: []
    }

    this.arrayholder = [];
  }

  async componentDidMount() {
    this.getPartners();
  }

  getPartners = async () => {
    this.setState({ refreshing: true })

    await API.Partners().GetPartners(this.props.navigation.getParam('categoryID')).then(
      async(response) => {
        this.setState({ partners: response, refreshing: false })
        this.arrayholder = response;
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

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.toUpperCase()}`;
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });    
    this.setState({ partners: newData });  
  };

  render() {
    return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Toolbar
          leftElement="menu"
          centerElement="СТЭК"
          style={{ container: { backgroundColor: 'orange' } }}
          searchable={{
            autoFocus: true,
            placeholder: 'Поиск',
            onChangeText: text => this.searchFilterFunction(text)
          }}
          onLeftElementPress={() => this.props.navigation.openDrawer()}
        />
      </SafeAreaView>
      <FlatList 
          data={this.state.partners}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
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
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  safeAreaView: {
    backgroundColor: 'orange',
    shadowColor: 'gray',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
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