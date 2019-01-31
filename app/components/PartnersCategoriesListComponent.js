import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';

import RoundCategoryComponent from '../components/RoundCategoryComponent';

export default class PartnersCategoriesListComponent extends Component{
  render(){
    let toolbarHeight = (Platform.OS === 'ios' ) ? 64 : 56;
    let screenHeight = Dimensions.get('window').height;
    return(
          <ScrollView style={styles.scroll}>
            <View style={styles.categoriesView}>
              <View style={styles.leftColumn}>
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Food/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Кафе, доставка еды'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Sport/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Спорт, здоровье, красота'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/CarService/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Авто-сервис'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Clothing/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Одежда, обувь, аксессуары'
                />
              </View>
              <View style={styles.rightColumn}>
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Entertainment/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Развлечения'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Typography/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Цветы, подарки, полиграфия'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Gadgets/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Техника, гаджеты'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Education/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  categoryName='Образование'
                />
              </View>
            </View>
            <View style={styles.othersView}>
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Others/drawable-hdpi/Canvas.png')}
                style={styles.categoryOthers}
                categoryName='Разное'
              />
            </View>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    height: '5%'
  },
  othersView: {
    marginTop: '25%',
    alignItems: 'center'
  },
  scroll: {
  }
});