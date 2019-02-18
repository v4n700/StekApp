import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import SpoilerComponent from '../components/SpoilerComponent';

export default class FAQScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Вопросы',
    drawerIcon: () => (
      <Image source={require('../assets/menu/menu/FAQ/drawable-hdpi/Group16.png')} style={styles.icon}/>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderComponent navigation = {this.props.navigation}/>
        <SpoilerComponent
          spoilerText = 'Что делать если потерял СТЭК?'
          underSpoiler = 'Тут ответ на вопрос'
        />
        <SpoilerComponent
          spoilerText = 'Хочу скидку в заведении, где нет СТЭК'
          underSpoiler = 'Тут ответ на вопрос'
        />
        <SpoilerComponent
          spoilerText = 'Мне не сделали скидку, где действует СТЭК!'
          underSpoiler = 'Тут ответ на вопрос'
        />
        <SpoilerComponent
          spoilerText = 'Что делать, если у меня непродленный СТЭК?'
          underSpoiler = 'Тут ответ на вопрос'
        />
        <SpoilerComponent
          spoilerText = 'Заметил недочёт/ошибку в приложении, что делать?'
          underSpoiler = 'Тут ответ на вопрос'
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
  icon: {
    height: 34,
    width: 34
  }
});