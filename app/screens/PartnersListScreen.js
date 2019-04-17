import React, {Component} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text, Platform, Alert} from 'react-native';
import { scale, moderateScale, verticalScale } from '../utilities/Scaling';
import { Toolbar } from 'react-native-material-ui';

import PartnerCardComponent from '../components/PartnerCardComponent';

import API from '../api/API';

export default class PartnersListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      refreshing: false,
      searching: false,
      partners: []
    }

    this.arrayholder = [];
  }

  async componentDidMount() {
    this.getPartners();
    
  }

  getPartners = async () => {

    this.setState({ refreshing: true })

    await API.Partners().GetPartners(this.props.navigation.getParam('categoryID')).then(
      async(response) => {
        this.setState({ partners: response, refreshing: false })
        this.arrayholder = response;
      }, (error) => {
        this.setState({ refreshing: false })
      }
    )
  }
  keyExtractor = (item, index) => item.name.toString();

  renderSeparator = () => {
    return (
      <View
        style={{
          marginTop: '3%',
          height: verticalScale(2),
          backgroundColor: 'rgba(166, 166, 173, 0.3)'
        }}
      />
    );
  };

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
        
      return itemData.indexOf(textData) > -1;    
    });    
    this.setState({ partners: newData });  
  };

  resetSearchFilter = () => {
    this.setState({ partners: this.arrayholder, searching: false }); 
  };

  render() {
    return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Toolbar
          leftElement="menu"
          centerElement="СТЭК"
          style={{ container: { backgroundColor: '#ffa500' } }}
          searchable={{
            autoFocus: true,
            autoCorrect: false,
            placeholder: 'Поиск',
            onChangeText: text => this.searchFilterFunction(text),
            onSearchCloseRequested: () => this.resetSearchFilter(),
            onSearchPressed: () => this.setState({searching: true})    
          }}
          onLeftElementPress={() => this.props.navigation.openDrawer()}
        />
      </SafeAreaView>
      <FlatList 
          data={this.state.partners}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={{paddingLeft: '3%', paddingBottom: '4%'}}
          refreshing={Platform.select({android: this.state.refreshing, ios: false})}
          onRefresh={this.state.searching ? null : this.getPartners}
          renderItem={({item}) => 
            <PartnerCardComponent 
              partnerName={item.name} 
              discount={item.discount}
              url={item.url}
              image={item.image}
              phone={item.telephones}
              address={item.locations}
              description={item.description}
              navigation={this.props.navigation}
            />
          }
      />
      <SafeAreaView style={styles.bottomArea}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  safeAreaView: {
    backgroundColor: '#ffa500',
    shadowColor: 'gray',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
  },
  scroll: {
    marginLeft: scale(9)
  },
  emptyText: {
    height: 40,
    fontFamily: 'Roboto',
    fontSize: 22,
    textAlign:'center'
  },
  bottomArea: {
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowOffset: {height: -5, width: 0},
    shadowOpacity: 5,
  }
});