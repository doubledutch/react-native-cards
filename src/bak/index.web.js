import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Feed from './Feed';
import Dimensions from './Dimensions'

class ReactNativeWeb extends Component {
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

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });

// AppRegistry.registerComponent('Feed', () => Feed);
// AppRegistry.runApplication('Feed', { rootTag: document.getElementById('react-app') });
