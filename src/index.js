import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Feed from './components/feed';
import Dimensions from './components/dimensions'

class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    backgroundColor: '#F5FCFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
  },
});

module.exports = { Feed, Container }