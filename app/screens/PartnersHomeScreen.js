import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';
import PartnersCategoriesListComponent from '../components/PartnersCategoriesListComponent';


export default class PartnersScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Партнеры',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Partners/drawable-hdpi/Group12.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <Icon name="menu" style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}/>
            <Text style={styles.stek}>СТЭК</Text>
          </Left>
          <Right>
          </Right>
        </Header>
        <PartnersCategoriesListComponent/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  menuButton: {
    marginLeft: 16,
    color: "white"
  },
  header: {
    backgroundColor: 'orange',
  },
  left: {
    flexDirection: 'row',
  },
  stek: {
    fontSize: 22,
    color: 'white',
    marginLeft: 32,
    marginTop: 2,
    fontWeight: 'bold',
  },
  icon: {
    height: 34,
    width: 34
  },
  categoriesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  category: {
    width: 90,
    height: 90
  },
  categoryOthers: {
    width: 74,
    height: 74
  },
  space: {
    width: '100%',
    height: '3%'
  },
  othersView: {
    alignItems: 'center'
  },
  scroll: {
    flex: 1,
  }
});