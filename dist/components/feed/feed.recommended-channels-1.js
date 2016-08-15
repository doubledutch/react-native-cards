'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _feedCardwrapper = require('./feed.cardwrapper.js');

var _feedCard = require('./feed.card.js');

var _feedCard2 = _interopRequireDefault(_feedCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var React = require('react');
var ReactNative = require('react-native');

var ChannelRecommendations1 = function (_FeedCard) {
  _inherits(ChannelRecommendations1, _FeedCard);

  function ChannelRecommendations1() {
    _classCallCheck(this, ChannelRecommendations1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChannelRecommendations1).apply(this, arguments));
  }

  _createClass(ChannelRecommendations1, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _feedCardwrapper.FeedCardWrapper,
        { title: 'Recommended Channels' },
        React.createElement(
          _reactNative.ScrollView,
          {
            showsHorizontalScrollIndicator: false,
            automaticallyAdjustInsets: false,
            decelerationRate: 0,
            snapToAlignment: 'start',
            snapToInterval: (0, _feedCardwrapper.GET_CARD_WIDTH)() + _feedCardwrapper.CARD_MARGIN * 1,
            horizontal: true, style: { flex: 1 },
            contentContainerStyle: styles.content },
          this.props.data.map(function (d) {
            return React.createElement(
              _reactNative.View,
              { key: d.ID, style: [styles.personCard, { width: (0, _feedCardwrapper.GET_CARD_WIDTH)() }] },
              React.createElement(
                _reactNative.TouchableHighlight,
                { style: styles.dismissButton },
                React.createElement(
                  _reactNative.Text,
                  { style: styles.dismissButtonText },
                  '×'
                )
              ),
              React.createElement(
                _reactNative.View,
                { style: styles.profile },
                React.createElement(
                  _reactNative.View,
                  { style: { marginLeft: 0 } },
                  React.createElement(
                    _reactNative.Text,
                    { style: styles.profileTitle },
                    d.Type
                  ),
                  React.createElement(
                    _reactNative.Text,
                    { style: [styles.profileName, { width: (0, _feedCardwrapper.GET_CARD_WIDTH)() - 20 }], numberOfLines: 2, lineBreakMode: 'tail' },
                    d.Name
                  )
                )
              ),
              React.createElement(
                _reactNative.View,
                { style: styles.actionBar },
                React.createElement(
                  _reactNative.TouchableHighlight,
                  { style: { marginRight: 10 } },
                  React.createElement(
                    _reactNative.View,
                    { style: { flexDirection: 'row' } },
                    d.Users.map(function (u, idx) {
                      var style = {};
                      return React.createElement(_reactNative.Image, { key: u.User.ID, source: { uri: u.User.ImageURL }, style: [style, styles.profileImage] });
                    }),
                    React.createElement(
                      _reactNative.Text,
                      { style: styles.profileCount },
                      '+37 others'
                    )
                  )
                ),
                React.createElement(
                  _reactNative.TouchableHighlight,
                  { style: styles.cardButton },
                  React.createElement(
                    _reactNative.Text,
                    { style: styles.cardButtonText },
                    'Message'
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return ChannelRecommendations1;
}(_feedCard2.default);

exports.default = ChannelRecommendations1;


var styles = ReactNative.StyleSheet.create({
  profile: {
    flex: 1,
    height: 52,
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 4,
    marginLeft: 4
  },
  profileTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: '#777',
    marginRight: 10
  },
  profileName: {
    height: 70,
    lineHeight: 20,
    fontWeight: 'bold',
    fontSize: 16
  },
  profileCount: {
    marginLeft: 24,
    lineHeight: 32
  },
  profileImage: {
    resizeMode: 'contain',
    height: 36,
    width: 36,
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: 'green',
    marginRight: -20
  },
  dismissButton: {
    height: 24,
    width: 24,
    right: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center'
  },
  dismissButtonText: {
    lineHeight: 24,
    fontSize: 24,
    color: '#888',
    fontWeight: '400'
  },
  personCard: {
    //width: CARD_WIDTH,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: _feedCardwrapper.CARD_MARGIN,
    padding: 3,
    justifyContent: 'center'
  },
  cardButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'blue'
  },
  cardButtonText: {
    color: 'white'
  },
  actionBar: {
    flex: 1,
    height: 50,
    marginLeft: 4,
    flexDirection: 'row'
  }
});