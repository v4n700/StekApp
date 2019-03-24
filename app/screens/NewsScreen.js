import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, RefreshControl} from 'react-native';

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
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.getPromotions}/>}>
          {this.renderNews()}
        </ScrollView>
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
  }
});