import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Right, Icon, Body, Title} from 'native-base';

import RoundCategoryComponent from '../components/RoundCategoryComponent';

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

        <View style={styles.column}>
          <View style={styles.categoriesView}>
            <View style={styles.column}>
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Food/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Кафе, доставка еды'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Sport/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Спорт, здоровье, красота'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/CarService/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Авто-сервис'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Clothing/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Одежда, обувь, аксессуары'
              />
            </View>
            <View style={styles.column}>
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Entertainment/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Развлечения'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Typography/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Цветы, подарки, полиграфия'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Gadgets/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Техника, гаджеты'
              />
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Education/drawable-hdpi/Canvas.png')}
                style={styles.category}
                categoryName='Образование'
              />
            </View>
          </View>
          <RoundCategoryComponent 
            imagePath={require('../assets/general_icon/Others/drawable-hdpi/Canvas.png')}
            style={styles.categoryOthers}
            categoryName='Разное'
          />
        </View>
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
  },
  icon: {
    height: 34,
    width: 34
  },
  categoriesView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  category: {
    width: 90,
    height: 90
  },
  categoryOthers: {
    width: 74,
    height: 74
  }
});