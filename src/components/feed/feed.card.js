import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
'use strict';

var React = require('react');

export default class FeedCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View>
            <Text>Unimplemented Card {JSON.stringify(this.props.data)}</Text>
          </View>
        );
    }
}
