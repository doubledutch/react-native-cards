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
        super(props);

        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
                dataSource: dataSource.cloneWithRows([{ Name: 'Loading...', Activities : [ {} ] }])
            };

        this._renderRow = this._renderRow.bind(this);
        this._rowPressed = this._rowPressed.bind(this);
        this.isFetching = false
    }

    componentDidMount() {
      if (this.props.data) {
        this.setState({
          feed: this.props.data,
          dataSource : this.getDataSource(this.props.data)
        })
      }
      /*
      if (!this.isFetching) {
        this.isFetching = true

        if (this.props.data) {
          this.setState({
            feed: this.props.data,
            dataSource : this.getDataSource(this.props.data)
          })
          return
        }

        this.fetchFeed().then((feed) => {
          this.isFetching = false

          this.setState({
            feed: feed,
            dataSource : this.getDataSource(feed)
          })
        }).catch((err) => {
          this.isFetching = false
        })
      }*/
    }

    fetchFeed() {
      return new Promise((resolve, reject) => {

        resolve(Data.cards)
        return
        DD.requestAccessToken((err, token) => {
          var url = DD.apiRootURL + '/activitygroups/?count=20&applicationId=' + DD.currentEvent.EventId
          // TODO - if we have auth, we need to set the head
          fetch(url, { method: 'GET', headers: { Authorization: 'Bearer ' + token }})
          .then((response) => response.json())
          .catch((error) => {
            this.isFetching = false
            console.error(error)
            alert('error')
          })
          .then((responseData) => {
            resolve(responseData.Value)
          })
        })
      })
    }

    getDataSource(data) {
      var filteredData = data
      return this.state.dataSource.cloneWithRows(filteredData)
    }

    _rowPressed(row) {
        if (this.props.rowPressed) {
            this.props.rowPressed(row);
        }
        console.log(row);
    }

    _rowFavoritePressed(row) {
      // We will bookmark here
      row.IsFavorite = true
    }

    _formatDate(date) {
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var ampm = 'am'
      if (hours === 0) {
        hours = 12
      } else if (hours >= 12) {
        ampm = 'pm'
        if (hours > 12) {
          hours = hours - 12
        }
      }

      if (minutes < 10) {
        minutes = '0' + minutes
      }

      return hours + ':' + minutes + ' ' + ampm
    }

    _formatDateRange(row) {
      var start = new Date(row.StartDate)
      var end = new Date(row.EndDate)

      return this._formatDate(start) + ' - ' + this._formatDate(end)
    }

    _renderRow(rowData, sectionID, rowID) {
      var selectedStyle = rowData.IsFavorite ? styles.rowButtonSelected : {}
      var underlayColor = rowData.IsFavorite ? 'white' : 'blue'
      var dateRange = this._formatDateRange(rowData)

      var card = null
      var act = rowData

      switch (act.template) {
        case 'people-recommendations-1' : // Checkin
          card = <PeopleRecommendations1 data={act.data} />
          break;
        case 'channel-recommendations-1' : // Checkin
          card = <ChannelRecommendations1 data={act.data} />
          break;
        case 'checkins' :
          card = <CheckinCard data={act.data} />
          break;
      }

      if (!card && this.props.templates) {
        if (this.props.templates[act.template]) {
          card = this.props.templates[act.template](act.id, act.data)
        }
      }

      if (!card) {
        card = <FeedCard data={act.data} onDismiss={this.props.onDismissCard} onUpdate={this.props.onUpdateCard} onLog={this.props.onLog} />
      }

        return (
            <View style={styles.container}>
              {card}
            </View>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.state.feed) {
          this.setState({
            feed: nextProps,
            dataSource : this.getDataSource(nextProps.data)
          })
        }
    }


    render() {
        return (
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              initialListSize={10}
              styles={styles.list}
              contentContainerStyle={styles.content}
              enableEmptySections={true}
          />
        );
    }
}

var styles = ReactNative.StyleSheet.create({
    list : {
    },
    content : {
      //height: Dimensions.get('window').height, 
    },
    separator: {
        height: 1,
        backgroundColor: '#dddde0'
    },
    namecont: {
        padding: 5,
        height: 50,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
        color: '#aaa',
    },
    date: {
        fontSize: 19,
        color: '#aaa',
        padding: 5,
        position: 'absolute',
        bottom: 0
    },
    container: {
      overflow: 'hidden'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 0,
        marginLeft: -15,
        paddingLeft: 0,
        overflow: 'hidden',
        height: 75,
    },
    rowTracks : {
      width: 5,
      backgroundColor: 'green',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0
    },
    rowBody : {
      flex: 1,
      marginLeft: 10,
      marginRight: 60
    },
    rowButton : {
      position: 'absolute',
      right: 10,
      top: 12,
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'green',
    },
    rowButtonSelected : {
      backgroundColor: 'green',
    },
    rowImage : {
      height: 30,
      width: 30,
      margin: 10,
    }
});

export { Feed as default, FeedCard, FeedCardWrapper, CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH };
