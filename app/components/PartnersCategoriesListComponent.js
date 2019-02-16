import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert, Dimensions, ScrollView, RefreshControl, AsyncStorage} from 'react-native';

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

  renderCategories = () => {
    return this.state.categories.map((category) => {
      return (
        <RoundCategoryComponent 
          key={category.id} 
          categoryName={category.name} 
          imagePath={category.image}
          categoryID={category.id}
          navigation={this.props.navigation} 
        />
      )
    }); 
  }

  render(){
    return(
          <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.getCategories}/>}>
            {this.renderCategories()}
          </ScrollView>
    );
  }
}