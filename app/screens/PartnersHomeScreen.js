import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';

export default class PartnersScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Партнеры',
    drawerIcon: () => (
      <Icon name="md-people" style={{color: "green"}}/>
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
        <Text>PartnersScreen</Text>
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
    color: 'white',
    marginLeft: 32,
    marginTop: 2,
    fontWeight: 'bold',
  }
});