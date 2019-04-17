import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, RefreshControl, SafeAreaView, Platform} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/PromotionComponent';
import API from '../api/API';

export default class NewsScreen extends Component{

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      news: []
    }
  }

  static navigationOptions = {
    drawerLabel: 'Новости',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/NEWS/drawable-hdpi/Group15.png')} style={styles.icon}/>
    )
  }

  async componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    this.setState({ refreshing: true })

    await API.News().GetNews().then(
      async(response) => {
        this.setState({ news: response, refreshing: false })
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }

  renderNews = () => {
    return this.state.news.map((newsItem, i) => {
      return (
        <NewsComponent key={i} description={newsItem.description} image={newsItem.image}/>
      )
    }); 
  }

  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <ScrollView refreshControl={<RefreshControl refreshing={Platform.select({android: this.state.refreshing, ios: false})} onRefresh={this.getNews}/>}>
          {this.renderNews()}
        </ScrollView>
        <SafeAreaView style={styles.bottomArea}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    height: 34,
    width: 34
  },
  bottomArea: {
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowOffset: {height: -5, width: 0},
    shadowOpacity: 5,
  }
});