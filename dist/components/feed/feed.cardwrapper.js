'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_CARD_WIDTH = exports.CARD_MARGIN = exports.CARD_PREVIEW_WIDTH = exports.FeedCardWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _ddDimensions = require('dd-dimensions');

var _ddDimensions2 = _interopRequireDefault(_ddDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var React = require('react');
var ReactNative = require('react-native');


var CARD_PREVIEW_WIDTH = 60;
var CARD_MARGIN = 5;
var GET_CARD_WIDTH = function GET_CARD_WIDTH() {
  return _ddDimensions2.default.get('window').width - CARD_MARGIN * 2 - CARD_PREVIEW_WIDTH;
};

var FeedCardWrapper = function (_React$Component) {
  _inherits(FeedCardWrapper, _React$Component);

  function FeedCardWrapper(props) {
    _classCallCheck(this, FeedCardWrapper);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FeedCardWrapper).call(this, props));
  }

  _createClass(FeedCardWrapper, [{
    key: 'render',
    value: function render() {
      var child = this.props.children;

      return React.createElement(
        _reactNative.View,
        { style: styles.wrapper },
        React.createElement(
          _reactNative.View,
          { style: styles.header },
          React.createElement(
            _reactNative.Text,
            { style: styles.headerText },
            this.props.title
          ),
          React.createElement(
            _reactNative.TouchableHighlight,
            { style: styles.dismissButton },
            React.createElement(
              _reactNative.Text,
              { style: styles.dismissButtonText },
              '×'
            )
          )
        ),
        child,
        React.createElement(_reactNative.View, { style: styles.separator })
      );
    }
  }]);

  return FeedCardWrapper;
}(React.Component);

var styles = ReactNative.StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 0,
    height: 30
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
    alignItems: 'center'
  },
  dismissButtonText: {
    lineHeight: 24,
    fontSize: 24,
    color: '#888',
    fontWeight: '400'
  },
  wrapper: {
    paddingLeft: 5,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1.5,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  separator: {
    height: 19,
    backgroundColor: '#fff'
  },
  content: {
    marginTop: 0,
    paddingLeft: CARD_MARGIN,
    paddingRight: CARD_PREVIEW_WIDTH,
    alignItems: 'flex-start',
    flex: 1,
    marginBottom: 5
  }
});

exports.FeedCardWrapper = FeedCardWrapper;
exports.CARD_PREVIEW_WIDTH = CARD_PREVIEW_WIDTH;
exports.CARD_MARGIN = CARD_MARGIN;
exports.GET_CARD_WIDTH = GET_CARD_WIDTH;