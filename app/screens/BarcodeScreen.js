import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Barcode from 'react-native-barcode-builder';


export default class BarcodeScreen extends Component{
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.barcodeView}>
          <Barcode value="Stek Test" format="CODE128" />
        </View>


        <View style={styles.bottom}>
          <View style={styles.buttonView}>
            <Button 
              fontFamily='Roboto'
              fontWeight='Bold'
              color='white'
              title='ГОТОВО'
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
  },
  bottom: {
    flex: 1,
    width: '100%',
    paddingBottom: '7%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});