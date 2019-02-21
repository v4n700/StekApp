import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert, Dimensions, ScrollView, RefreshControl, AsyncStorage} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

import RoundCategoryComponent from '../components/RoundCategoryComponent';

import API from '../api/API';

export default class PartnersCategoriesListComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      categories: []
    }
  }

  async componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    this.setState({ refreshing: true })

    await API.Categories().GetCategories().then(
      async(response) => {
        this.setState({ categories: response, refreshing: false })
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }

  keyExtractor = (item, index) => item.id.toString();

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

  render(){
    return(
        <FlatList 
          data={this.state.categories}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.getCategories}
          renderItem={({item}) => 
            <RoundCategoryComponent
              categoryName={item.name} 
              imagePath={item.image}
              categoryID={item.id}
              navigation={this.props.navigation} 
            />
          }
        />
    );
  }
}