import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert, Dimensions, ScrollView, RefreshControl, AsyncStorage} from 'react-native';
import SpoilerComponent from '../components/SpoilerComponent';

import API from '../api/API';

export default class FAQComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      questions: []
    }
  }

  async componentDidMount() {
    this.getFAQs();
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.getFAQs();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.getFAQs();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  getFAQs = async () => {
    this.setState({ refreshing: true })

    await API.FAQs().GetFAQs().then(
      async(response) => {
        this.setState({ questions: response, refreshing: false })
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }

  keyExtractor = (item, index) => item.id.toString();

  render(){
    return(
          <FlatList
              style={{
                flex: 1,
                backgroundColor: 'white',
              }}
              data={this.state.questions}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              keyExtractor={this.keyExtractor}
              renderItem={({item}) =>
                <View>
                  <SpoilerComponent
                    spoilerText={item.question} 
                    underSpoiler={item.answer}
                  />
                </View>
                 
            }
          />
    );
  }
}