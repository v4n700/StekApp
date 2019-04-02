import React, {Component, Alert} from 'react';
import { StyleSheet, Image, AsyncStorage } from 'react-native';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';

import PartnersScreen from './screens/PartnersHomeScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import FAQScreen from './screens/FAQScreen';
import NewsScreen from './screens/NewsScreen';
import MapScreen from './screens/MapScreen';
import PartnersListScreen from './screens/PartnersListScreen';
import PartnerInfoScreen from './screens/PartnerInfoScreen';
import BarcodeScreen from './screens/BarcodeScreen';

import API from './api/API';

import CustomDrawerComponent from './components/CustomDrawerComponent';



export default class App extends Component{

  async componentDidMount() {
    this.createNotificationListeners();
    SplashScreen.hide()
    firebase.messaging().hasPermission()
    .then(enabled => {
      if (enabled) {
        firebase.messaging().getToken().then(token => {
          this.postToken(token)
        })
      } else {
        firebase.messaging().requestPermission()
          .then(() => {
            alert("User Now Has Permission")
          })
          .catch(error => {
            alert("Error", error)
            // User has rejected permissions  
          });
      }
    });
  }

  postToken = async (token) => {
    firstLaunch = await AsyncStorage.getItem('@FirstLaunch', false)
    if (firstLaunch) {
      return;
    }

    await API.Token().SetToken(token).then(
      async(response) => {
        if (response.status === 201) {
          await AsyncStorage.setItem('@FirstLaunch', JSON.stringify(true))
        }
      }, (error) => {

      }
    )
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        firebase.notifications().displayNotification(notification)
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      Alert.alert('test');
        const { title, body } = notificationOpen.notification;
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      //FireBase.notifications().displayNotification(message);
    });
  }

  render() {
    return (
      <Drawer/>
    );
  }
}



const StackNavigator = createStackNavigator(
  {
    PartnersScreen: PartnersScreen,
    PartnersListScreen: PartnersListScreen,
    PartnerInfoScreen: PartnerInfoScreen,
    BarcodeScreen: BarcodeScreen
  },
  {
    headerMode: 'none',
    stateName: 'PartnersNav',
    initialRouteName: 'PartnersScreen'
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  PartnersScreen: {
    screen: StackNavigator,
    navigationOptions: {
      drawerLabel: 'Партнеры',
      drawerIcon: () => (
        <Image source={require('./assets/menu/menu/Partners/drawable-hdpi/Group12.png')} style={styles.icon}/>
      )
    }
  },
  AboutUsScreen: AboutUsScreen,
  PromoScreen: PromotionsScreen,
  NewsScreen: NewsScreen,
  MapScreen: MapScreen,
  FAQScreen: FAQScreen
}, {
  contentComponent: CustomDrawerComponent,
  initialRouteName: 'PartnersScreen',
  contentOptions: {
    activeTintColor: '#ffa500',
    labelStyle:{fontFamily:'Phenomena'}
  }
})

const Drawer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    height: 34,
    width: 34
  }
});
