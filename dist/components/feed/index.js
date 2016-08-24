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
      dataSource: dataSource,
      feed: null
    };

    _this._renderRow = _this._renderRow.bind(_this);
    return _this;
  }

  _createClass(Feed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.data) {
        this.processProps(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.state.feed) {
        this.processProps(nextProps);
      }
    }
  }, {
    key: 'processProps',
    value: function processProps(props) {
      this.setState({
        feed: props.data,
        dataSource: this.getDataSource(props.data)
      });
    }
  }, {
    key: 'getDataSource',
    value: function getDataSource(data) {
      return this.state.dataSource.cloneWithRows(data);
    }
  }, {
    key: '_renderRow',
    value: function _renderRow(rowData, sectionID, rowID) {
      var selectedStyle = rowData.IsFavorite ? styles.rowButtonSelected : {};
      var underlayColor = rowData.IsFavorite ? 'white' : 'blue';
      var card = null;

      switch (rowData.template) {
        case 'people-recommendations-1':
          // Checkin
          card = React.createElement(_feedRecommendedPeople2.default, { data: rowData.data });
          break;
        case 'channel-recommendations-1':
          // Checkin
          card = React.createElement(_feedRecommendedChannels2.default, { data: rowData.data });
          break;
        case 'checkins':
          card = React.createElement(_feedCheckin2.default, { data: rowData.data });
          break;
      }

      if (!card && this.props.templates) {
        if (this.props.templates[rowData.template]) {
          card = this.props.templates[rowData.template](rowData.id, rowData.data);
        }
      }

      if (!card) {
        console.warn('Template not found: ' + rowData.template);
        return null;
      }

      return React.createElement(
        View,
        { style: styles.container },
        card
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.feed) {
        // We are loading
        return React.createElement(
          View,
          { style: styles.messageContainer },
          React.createElement(
            Text,
            { style: styles.loading },
            'Loading...'
          )
        );
      } else if (!this.state.feed.length) {
        // We are loaded with no data
        return React.createElement(
          View,
          { style: styles.messageContainer },
          React.createElement(
            Text,
            { style: styles.empty },
            'No Data...'
          )
        );
      }

      // We have data to render
      return React.createElement(ListView, {
        dataSource: this.state.dataSource,
        renderRow: this._renderRow,
        initialListSize: 10,
        style: styles.list,
        contentContainerStyle: styles.content,
        enableEmptySections: true
      });
    }
  }]);

  return Feed;
}(React.Component);

var styles = ReactNative.StyleSheet.create({
  list: {},
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: 40
  }
});

exports.default = Feed;
exports.FeedCard = _feedCard2.default;
exports.FeedCardWrapper = _feedCardwrapper2.default;
exports.CARD_PREVIEW_WIDTH = _feedCardwrapper.CARD_PREVIEW_WIDTH;
exports.CARD_MARGIN = _feedCardwrapper.CARD_MARGIN;
exports.GET_CARD_WIDTH = _feedCardwrapper.GET_CARD_WIDTH;