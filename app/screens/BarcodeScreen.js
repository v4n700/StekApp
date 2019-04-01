import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Barcode from 'react-native-barcode-builder';


export default class BarcodeScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.setState({backgroundColor: new Animated.Value(0)}, () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.backgroundColor, {
            toValue: 100,
            duration: 5000,
            delay: 0
          }),
          Animated.timing(this.state.backgroundColor, {
            toValue: 0,
            duration: 5000
          })
        ]),
        {
          iterations: -1
        }
      ).start()
    });
  }

  render(){
    return (
      <Animated.View style={[
          styles.container,
          {
            backgroundColor: this.state.backgroundColor.interpolate({
              inputRange: [0, 100],
              outputRange: ["white", "#e7c003",]
            })
          }
        ]}
      >
        <View style={styles.barcodeView}>
          <Barcode value="2750901141111" format="CODE128" text="Штрих-код вашей карты СТЭК" flat/>
        </View>


        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonView}  onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}> ГОТОВО</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
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