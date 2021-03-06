import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
'use strict';

var React = require('react');
var ReactNative = require('react-native');
import Dimensions from 'dd-dimensions'

const CARD_PREVIEW_WIDTH = 60
const CARD_MARGIN = 5;
const GET_CARD_WIDTH = () => { return Dimensions.get('window').width - (CARD_MARGIN) * 2 - CARD_PREVIEW_WIDTH }

class FeedCardWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var child = this.props.children

        return (
          <View style={[ styles.wrapper, this.props.style ]}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{this.props.title}</Text>
              <TouchableHighlight style={styles.dismissButton} onPress={this.props.onDismiss}>
                <Text style={styles.dismissButtonText}>×</Text>
              </TouchableHighlight>
            </View>
            {child}
          </View>
        );
    }
}

var styles = ReactNative.StyleSheet.create({
    header: {
      flexDirection: 'row',
      flex: 1,
      paddingLeft: 5,
      paddingRight: 0,
      height: 30,
    },
    headerText: {
      color: '#888',
      lineHeight: 24,
      fontWeight: '600',
      fontSize: 16
    },
    dismissButton: {
      height: 24,
      width: 24,
      right: 0,
      top: 0,
      position: 'absolute',
      alignItems: 'center',
    },
    dismissButtonText: {
      lineHeight: 24,
      fontSize: 24,
      color: '#888',
      fontWeight: '400',
    },
    wrapper :{
      paddingLeft: 5,
      flex: 1,
      backgroundColor: 'rgba(255,255,255,1)',
      opacity: 1.5,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    separator: {
        height: 19
    },
    content: {
      marginTop: 0,
      paddingLeft: CARD_MARGIN,
      paddingRight: CARD_PREVIEW_WIDTH,
      alignItems: 'flex-start',
      flex: 1,
      marginBottom: 5
    },
});

export { FeedCardWrapper as default, CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH };
