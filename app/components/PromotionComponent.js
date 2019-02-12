import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';

import { scale, moderateScale, verticalScale } from '../utilities/Scaling';

export default class PromotionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
          <Text style={styles.headerText}>ДОХУЯ АКЦИЯ</Text>
          <Image style={styles.promotionImage} resizeMode="contain" source={require('../assets/test/promotion.jpg')} />
          <Text style={styles.promotionText}>
          ШаваСет по невероятной скидке - попробуй с другом:
          🔸Наггетсы L
          🔸Шаверма по-американски - 2 шт
          🔸Шаверма по-турецки - 2 шт
          🔸Картофель фри L - 2 шт
          🔸Морс 1л
          🔸2 соуса на выбор

          ❗Акция действует с 11.02 по 17.02❗

          Оформи карту и получи двойную выгоду:
          ✔После первой покупки зачисляется 50 рублей в подарок.
          ✔По карте с каждой покупки зачисляется 5%. Бонусами можно оплатить до 50% от покупки.
          </Text>
          <View style={styles.underline}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '3%',
    textAlign: 'center'
  },
  promotionImage: {
    margin: '3%',
    maxHeight: 400,
    width: 'auto'
  },
  promotionText: {
    margin: '3%',
    fontSize: 20,
  },
  underline: {
    marginTop: '1%',
    alignSelf: 'center',
    width: '95%',
    height: 1,
    backgroundColor: 'rgba(166, 166, 173, 0.3)'
  }
});