import React, {Component} from 'react';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { DrawerItems} from 'react-navigation';

export default class CustomDrawerComponent extends Component{

  render() {
    const {...props} = this.props

    return (
      
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/drawerStekLogo.png')}/>
        </View> */}
        <TouchableOpacity style={styles.header} onPress={()=> this.props.navigation.navigate('BarcodeScreen')}>
          <Image style={styles.logo} source={require('../assets/drawerStekLogo.png')}/>
        </TouchableOpacity>
        <DrawerItems {...props}
        onItemPress={({ route, focused }) => {
          this.props.navigation.navigate(route.routeName)
          this.props.onItemPress({ route, focused });
        }}
        />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    height: 150,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center'
  },
  logo: {
    resizeMode: "contain",
    height: 120,
    width: 200,
  }
});