import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';

export default class PromotionsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Акции',
    drawerIcon: () => (
      <Icon name="logo-usd" style={{color: "red"}}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon name="menu" style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}/>
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
  }
});