import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert, RefreshControl} from 'react-native';

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
      Alert.alert('hui', JSON.stringify(promotion.image))
      return (
        <PromotionComponent key={i} title={promotion.title}  description={promotion.description} image={promotion.image}/>
      )
    }); 
  }


  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.getPromotions}/>}>
          { this.renderPromotions() }
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