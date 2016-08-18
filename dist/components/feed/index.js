'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_CARD_WIDTH = exports.CARD_MARGIN = exports.CARD_PREVIEW_WIDTH = exports.FeedCardWrapper = exports.FeedCard = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ddDdview = require('dd-ddview');

var _ddDdview2 = _interopRequireDefault(_ddDdview);

var _feedData = require('./feed.data.js');

var _feedData2 = _interopRequireDefault(_feedData);

var _feedRecommendedPeople = require('./feed.recommended-people-1.js');

var _feedRecommendedPeople2 = _interopRequireDefault(_feedRecommendedPeople);

var _feedRecommendedChannels = require('./feed.recommended-channels-1.js');

var _feedRecommendedChannels2 = _interopRequireDefault(_feedRecommendedChannels);

var _feedCheckin = require('./feed.checkin.js');

var _feedCheckin2 = _interopRequireDefault(_feedCheckin);

var _feedCard = require('./feed.card.js');

var _feedCard2 = _interopRequireDefault(_feedCard);

var _feedCardwrapper = require('./feed.cardwrapper.js');

var _feedCardwrapper2 = _interopRequireDefault(_feedCardwrapper);

var _ddDimensions = require('dd-dimensions');

var _ddDimensions2 = _interopRequireDefault(_ddDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactNative = require('react-native');
var React = require('react');
var DD = require('dd-nativemodules').DDBindings;
var Text = ReactNative.Text;
var View = ReactNative.View;
var TouchableHighlight = ReactNative.TouchableHighlight;
var ListView = ReactNative.ListView;
var Image = ReactNative.Image;

var Feed = function (_React$Component) {
  _inherits(Feed, _React$Component);

  function Feed(props) {
    _classCallCheck(this, Feed);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Feed).call(this, props));

    var dataSource = new ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });
    _this.state = {
      dataSource: dataSource.cloneWithRows([{ Name: 'Loading...', Activities: [{}] }])
    };

    _this._renderRow = _this._renderRow.bind(_this);
    _this._rowPressed = _this._rowPressed.bind(_this);
    _this.isFetching = false;
    return _this;
  }

  _createClass(Feed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
  }, {
    key: 'fetchFeed',
    value: function fetchFeed() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {

        resolve(_feedData2.default.cards);
        return;
        DD.requestAccessToken(function (err, token) {
          var url = DD.apiRootURL + '/activitygroups/?count=20&applicationId=' + DD.currentEvent.EventId;
          // TODO - if we have auth, we need to set the head
          fetch(url, { method: 'GET', headers: { Authorization: 'Bearer ' + token } }).then(function (response) {
            return response.json();
          }).catch(function (error) {
            _this2.isFetching = false;
            console.error(error);
            alert('error');
          }).then(function (responseData) {
            resolve(responseData.Value);
          });
        });
      });
    }
  }, {
    key: 'getDataSource',
    value: function getDataSource(data) {
      var filteredData = data;
      return this.state.dataSource.cloneWithRows(filteredData);
    }
  }, {
    key: '_rowPressed',
    value: function _rowPressed(row) {
      if (this.props.rowPressed) {
        this.props.rowPressed(row);
      }
      console.log(row);
    }
  }, {
    key: '_rowFavoritePressed',
    value: function _rowFavoritePressed(row) {
      // We will bookmark here
      row.IsFavorite = true;
    }
  }, {
    key: '_formatDate',
    value: function _formatDate(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = 'am';
      if (hours === 0) {
        hours = 12;
      } else if (hours >= 12) {
        ampm = 'pm';
        if (hours > 12) {
          hours = hours - 12;
        }
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      return hours + ':' + minutes + ' ' + ampm;
    }
  }, {
    key: '_formatDateRange',
    value: function _formatDateRange(row) {
      var start = new Date(row.StartDate);
      var end = new Date(row.EndDate);

      return this._formatDate(start) + ' - ' + this._formatDate(end);
    }
  }, {
    key: '_renderRow',
    value: function _renderRow(rowData, sectionID, rowID) {
      var selectedStyle = rowData.IsFavorite ? styles.rowButtonSelected : {};
      var underlayColor = rowData.IsFavorite ? 'white' : 'blue';
      var dateRange = this._formatDateRange(rowData);

      var card = null;
      var act = rowData;

      switch (act.template) {
        case 'people-recommendations-1':
          // Checkin
          card = React.createElement(_feedRecommendedPeople2.default, { data: act.data });
          break;
        case 'channel-recommendations-1':
          // Checkin
          card = React.createElement(_feedRecommendedChannels2.default, { data: act.data });
          break;
        case 'checkins':
          card = React.createElement(_feedCheckin2.default, { data: act.data });
          break;
      }

      if (!card && this.props.templates) {
        if (this.props.templates[act.template]) {
          card = this.props.templates[act.template](act.data);
        }
      }

      if (!card) {
        card = React.createElement(_feedCard2.default, { data: act.data });
      }

      return React.createElement(
        View,
        { style: styles.container },
        card
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.state.feed) {
        this.setState({
          feed: this.props.data,
          dataSource: this.getDataSource(nextProps.data)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(ListView, {
        dataSource: this.state.dataSource,
        renderRow: this._renderRow,
        initialListSize: 10,
        styles: styles.list,
        contentContainerStyle: styles.content
      });
    }
  }]);

  return Feed;
}(React.Component);

var styles = ReactNative.StyleSheet.create({
  list: {},
  content: {
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
    color: '#aaa'
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
    height: 75
  },
  rowTracks: {
    width: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0
  },
  rowBody: {
    flex: 1,
    marginLeft: 10,
    marginRight: 60
  },
  rowButton: {
    position: 'absolute',
    right: 10,
    top: 12,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green'
  },
  rowButtonSelected: {
    backgroundColor: 'green'
  },
  rowImage: {
    height: 30,
    width: 30,
    margin: 10
  }
});

exports.default = Feed;
exports.FeedCard = _feedCard2.default;
exports.FeedCardWrapper = _feedCardwrapper2.default;
exports.CARD_PREVIEW_WIDTH = _feedCardwrapper.CARD_PREVIEW_WIDTH;
exports.CARD_MARGIN = _feedCardwrapper.CARD_MARGIN;
exports.GET_CARD_WIDTH = _feedCardwrapper.GET_CARD_WIDTH;