import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert, SafeAreaView, FlatList, StatusBar} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import RoundCategoryComponent from '../components/RoundCategoryComponent';

import API from '../api/API';

export default class PartnersScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Партнеры',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Partners/drawable-hdpi/Group12.png')} style={styles.icon}/>
    )
  }
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      categories: []
    }

    this.arrayholder = [];
  }

  async componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    this.setState({ refreshing: true })

    await API.Categories().GetCategories().then(
      async(response) => {
        this.setState({ categories: response, refreshing: false })
        this.arrayholder = response;
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

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.toUpperCase()}`;
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });    
    this.setState({ categories: newData });  
  };

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <Toolbar
            leftElement="menu"
            centerElement="СТЭК"
            style={{ container: { backgroundColor: '#ffa500' } }}
            searchable={{
              autoFocus: true,
              placeholder: 'Поиск',
              onChangeText: text => this.searchFilterFunction(text)
            }}
            onLeftElementPress={() => this.props.navigation.openDrawer()}
          />
        </SafeAreaView>
        <FlatList
          data={this.state.categories}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={{paddingBottom: '4%'}}
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
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  safeAreaView: {
    backgroundColor: '#ffa500',
    shadowColor: 'gray',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
  },
  icon: {
    height: 34,
    width: 34
  }
});