import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';

export default class PromotionsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Акции',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/Promotions/drawable-hdpi/Group14.png')} style={styles.icon}/>
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
        </Header>
        <Text>Акции</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    fontFamily: 'Roboto',
    color: 'white',
    marginLeft: 32,
    fontWeight: 'bold'
  },
  icon: {
    height: 34,
    width: 34
  }
});