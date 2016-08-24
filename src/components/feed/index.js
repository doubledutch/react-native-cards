'use strict';

var ReactNative = require('react-native');
var React = require('react');
var DD = require('dd-nativemodules').DDBindings
import DDView from 'dd-ddview'
import Data from './feed.data.js'
import PeopleRecommendations1 from './feed.recommended-people-1.js';
import ChannelRecommendations1 from './feed.recommended-channels-1.js';
import CheckinCard from './feed.checkin.js';
import FeedCard from './feed.card.js';
import FeedCardWrapper, { CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH } from './feed.cardwrapper.js';
import Dimensions from 'dd-dimensions'

const {
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} = ReactNative;

class Feed extends React.Component {
  constructor(props) {
    super(props)

    var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      dataSource: dataSource,
      feed: null
    }

    this._renderRow = this._renderRow.bind(this)
  }

  componentDidMount() {
    if (this.props.data) {
      this.processProps(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.feed) {
      this.processProps(nextProps)
    }
  }

  processProps(props) {
    this.setState({
      feed: props.data,
      dataSource: this.getDataSource(props.data)
    })
  }

  getDataSource(data) {
    return this.state.dataSource.cloneWithRows(data)
  }

  _renderRow(rowData, sectionID, rowID) {
    var selectedStyle = rowData.IsFavorite ? styles.rowButtonSelected : {}
    var underlayColor = rowData.IsFavorite ? 'white' : 'blue'
    var card = null

    switch (rowData.template) {
      case 'people-recommendations-1': // Checkin
        card = <PeopleRecommendations1 data={rowData.data} />
        break
      case 'channel-recommendations-1': // Checkin
        card = <ChannelRecommendations1 data={rowData.data} />
        break
      case 'checkins':
        card = <CheckinCard data={rowData.data} />
        break
    }

    if (!card && this.props.templates) {
      if (this.props.templates[rowData.template]) {
        card = this.props.templates[rowData.template](rowData.id, rowData.data)
      }
    }

    if (!card) {
      console.warn('Template not found: ' + rowData.template)
      return null
    }

    return (
      <View style={styles.container}>
        {card}
      </View>
    )
  }

  render() {
    if (!this.state.feed) {
      // We are loading
      return <View style={styles.messageContainer}><Text style={styles.loading}>Loading...</Text></View>
    } else if (!this.state.feed.length) {
      // We are loaded with no data
      return <View style={styles.messageContainer}><Text style={styles.empty}>No Data...</Text></View>
    }

    // We have data to render
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        initialListSize={10}
        style={styles.list}
        contentContainerStyle={styles.content}
        enableEmptySections={true}
        />
    )
  }
}

var styles = ReactNative.StyleSheet.create({
  list: {
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: 40,
  }
});

export { Feed as default, FeedCard, FeedCardWrapper, CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH };
