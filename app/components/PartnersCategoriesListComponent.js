import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert, Dimensions, Platform} from 'react-native';

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
        <RoundCategoryComponent key={category.id} categoryName={category.name} navigation={this.props.navigation} imagePath={require('../assets/categories/Services.png')}/>
      )
    }); 
  }

  render(){
    return(
          <ScrollView alwaysBounceVertical={false}>
            {this.renderCategories()}
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    width: 90,
    height: 90
  },
  categoryOthers: {
    width: 74,
    height: 74
  },
});