import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import SpoilerComponent from '../components/SpoilerComponent';

import API from '../api/API';

export default class FAQComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  async componentDidMount() {
    this.getFAQs();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  getFAQs = async () => {

    await API.FAQs().GetFAQs().then(
      async(response) => {
        this.setState({ questions: response})
      }, (error) => {
      }
    )
  }

  keyExtractor = (item, index) => item.id.toString();

  render(){
    return(
      <FlatList
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
        data={this.state.questions}
        keyExtractor={this.keyExtractor}
        renderItem={({item}) =>
          <View>
            <SpoilerComponent
              spoilerText={item.question} 
              underSpoiler={item.answer}
            />
          </View>
        }
      />
    );
  }
}