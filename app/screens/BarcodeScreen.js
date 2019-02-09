import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Barcode from 'react-native-barcode-builder';


export default class BarcodeScreen extends Component{
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.barcodeView}>
          <Barcode value="Stek Test" format="CODE128" />
        </View>


        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonView}  onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}> ГОТОВО</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  barcodeView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonView: {
    backgroundColor: '#E37926',
    width: '90%',
    height: 40,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white'
  },
  bottom: {
    flex: 1,
    width: '100%',
    paddingBottom: '7%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});