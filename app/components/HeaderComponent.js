import React, {Component} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Toolbar } from 'react-native-material-ui';


export default class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={styles.safeAreaView}>
        <Toolbar
          leftElement="menu"
          centerElement="СТЭК"
          style={{ container: { backgroundColor: '#ffa500' } }}
          onLeftElementPress={() => navigation.openDrawer()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ffa500',
    shadowColor: 'gray',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
  }
});