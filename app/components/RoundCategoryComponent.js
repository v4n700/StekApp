import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { scale } from '../utilities/Scaling';
import { CachedImage, ImageCacheProvider } from 'react-native-cached-image';

export default class RoundCategoryComponent extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity} onPress={()=> navigation.navigate('PartnersListScreen', {categoryID :this.props.categoryID})}>
          <View style={styles.shadow}>
            <CachedImage source={{uri : this.props.imagePath}} style={styles.roundImageView}/>
          </View>
          <Text multiline={true} style={styles.categoryName}>{this.props.categoryName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingBottom: '1%',
    marginLeft: '3%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 1,
  },
  opacity: {
    marginLeft: '3%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  roundImageView: {
    marginTop: '5%',
    width: scale(80),
    height: scale(80)
  },
  categoryName: {
    marginTop: '3%',
    marginLeft: '6%',
    width:'70%',
    fontFamily: 'Roboto',
    fontSize: scale(17),
    fontWeight: '900',
    color: '#828282'
  }
});