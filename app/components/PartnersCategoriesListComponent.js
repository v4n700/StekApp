import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native';

import RoundCategoryComponent from '../components/RoundCategoryComponent';

export default class PartnersCategoriesListComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const { navigation } = this.props;
    return(
          <ScrollView style={styles.scroll} alwaysBounceVertical={false}>
            <View style={styles.categoriesView}>
              <View style={styles.leftColumn}>
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Food/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Кафе, доставка еды'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Sport/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Спорт, здоровье, красота'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/CarService/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Авто-сервис'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Clothing/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Одежда, обувь, аксессуары'
                />
              </View>
              <View style={styles.rightColumn}>
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Entertainment/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Развлечения'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Typography/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Цветы, подарки, полиграфия'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Gadgets/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Техника, гаджеты'
                />
                <View style={styles.space}/>
                <RoundCategoryComponent 
                  imagePath={require('../assets/general_icon/Education/drawable-hdpi/Canvas.png')}
                  style={styles.category}
                  navigation = {navigation}
                  categoryName='Образование'
                />
              </View>
            </View>
            <View style={styles.othersView}>
              <RoundCategoryComponent 
                imagePath={require('../assets/general_icon/Others/drawable-hdpi/Canvas.png')}
                style={styles.categoryOthers}
                navigation = {navigation}
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
    marginTop: '30%',
    alignItems: 'center'
  },
  scroll: {
  }
});