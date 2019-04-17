import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, RefreshControl, SafeAreaView, Platform} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PromotionComponent from '../components/PromotionComponent';
import API from '../api/API';

export default class PromotionsScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      promotions: []
    }
  }


  static navigationOptions = {
    drawerLabel: 'Акции',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Promotions/drawable-hdpi/Group14.png')} style={styles.icon}/>
    )
  }

  
  async componentDidMount() {
    this.getPromotions();
  }

  getPromotions = async () => {
    this.setState({ refreshing: true })

    await API.Promotions().GetPromotions().then(
      async(response) => {
        this.setState({ promotions: response, refreshing: false })
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }

  renderPromotions = () => {
    return this.state.promotions.map((promotion, i) => {
      return (
        <PromotionComponent key={i} title={promotion.title}  description={promotion.description} image={promotion.image}/>
      )
    }); 
  }


  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <ScrollView refreshControl={<RefreshControl refreshing={Platform.select({android: this.state.refreshing, ios: false})} onRefresh={this.getPromotions}/>}>
          { this.renderPromotions() }
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