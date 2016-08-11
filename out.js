/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactNative = __webpack_require__(2);

	var _Feed = __webpack_require__(3);

	var _Feed2 = _interopRequireDefault(_Feed);

	var _Dimensions = __webpack_require__(6);

	var _Dimensions2 = _interopRequireDefault(_Dimensions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactNativeWeb = function (_Component) {
	  _inherits(ReactNativeWeb, _Component);

	  function ReactNativeWeb() {
	    _classCallCheck(this, ReactNativeWeb);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactNativeWeb).apply(this, arguments));
	  }

	  _createClass(ReactNativeWeb, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactNative.View,
	        { style: styles.container },
	        _react2.default.createElement(_Feed2.default, null)
	      );
	    }
	  }]);

	  return ReactNativeWeb;
	}(_react.Component);

	var styles = _reactNative.StyleSheet.create({
	  container: {
	    margin: 'auto',
	    backgroundColor: '#F5FCFF',
	    width: _Dimensions2.default.get('window').width,
	    height: _Dimensions2.default.get('window').height,
	    borderWidth: 1,
	    borderColor: 'black',
	    padding: 1
	  }
	});

	_reactNative.AppRegistry.registerComponent('ReactNativeWeb', function () {
	  return ReactNativeWeb;
	});
	_reactNative.AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });

	// AppRegistry.registerComponent('Feed', () => Feed);
	// AppRegistry.runApplication('Feed', { rootTag: document.getElementById('react-app') });

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactNative;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _feedRecommendedPeople = __webpack_require__(4);

	var _feedRecommendedPeople2 = _interopRequireDefault(_feedRecommendedPeople);

	var _feedRecommendedChannels = __webpack_require__(8);

	var _feedRecommendedChannels2 = _interopRequireDefault(_feedRecommendedChannels);

	var _feedCheckin = __webpack_require__(9);

	var _feedCheckin2 = _interopRequireDefault(_feedCheckin);

	var _feedCard = __webpack_require__(7);

	var _feedCard2 = _interopRequireDefault(_feedCard);

	var _Dimensions = __webpack_require__(6);

	var _Dimensions2 = _interopRequireDefault(_Dimensions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactNative = __webpack_require__(2);
	var React = __webpack_require__(1);
	var DD = __webpack_require__(10).DDBindings;
	var DDView = __webpack_require__(11);
	var Data = __webpack_require__(12);
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
	      var _this2 = this;

	      if (!this.isFetching) {
	        this.isFetching = true;

	        // alert(JSON.stringify(DD.currentUser))
	        // alert(JSON.stringify(DD.currentEvent))
	        this.fetchFeed().then(function (feed) {
	          _this2.isFetching = false;

	          _this2.setState({
	            feed: feed,
	            dataSource: _this2.getDataSource(feed)
	          });
	        }).catch(function (err) {
	          _this2.isFetching = false;
	        });
	      }
	    }
	  }, {
	    key: 'fetchFeed',
	    value: function fetchFeed() {
	      var _this3 = this;

	      return new Promise(function (resolve, reject) {

	        resolve(Data.cards);
	        return;
	        DD.requestAccessToken(function (err, token) {
	          var url = DD.apiRootURL + '/activitygroups/?count=20&applicationId=' + DD.currentEvent.EventId;
	          // TODO - if we have auth, we need to set the head
	          fetch(url, { method: 'GET', headers: { Authorization: 'Bearer ' + token } }).then(function (response) {
	            return response.json();
	          }).catch(function (error) {
	            _this3.isFetching = false;
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
	        default:
	          card = React.createElement(_feedCard2.default, { data: act.data });
	          break;
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactNative = __webpack_require__(2);

	var _feedCardwrapper = __webpack_require__(5);

	var _feedCard = __webpack_require__(7);

	var _feedCard2 = _interopRequireDefault(_feedCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var React = __webpack_require__(1);
	var ReactNative = __webpack_require__(2);

	var PeopleRecommendations1 = function (_FeedCard) {
	  _inherits(PeopleRecommendations1, _FeedCard);

	  function PeopleRecommendations1() {
	    _classCallCheck(this, PeopleRecommendations1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PeopleRecommendations1).apply(this, arguments));
	  }

	  _createClass(PeopleRecommendations1, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        _feedCardwrapper.FeedCardWrapper,
	        { title: 'Recommended People' },
	        React.createElement(
	          _reactNative.ScrollView,
	          {
	            showsHorizontalScrollIndicator: false,
	            automaticallyAdjustInsets: false,
	            decelerationRate: 0,
	            snapToAlignment: 'start',
	            snapToInterval: _feedCardwrapper.CARD_WIDTH + _feedCardwrapper.CARD_MARGIN * 1,
	            horizontal: true, style: { flex: 1 },
	            contentContainerStyle: styles.content },
	          this.props.data.map(function (d) {
	            return React.createElement(
	              _reactNative.View,
	              { key: d.User.ID, style: styles.personCard },
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
	                React.createElement(_reactNative.Image, { source: { uri: d.User.ImageURL }, style: styles.profileImage }),
	                React.createElement(
	                  _reactNative.View,
	                  { style: { marginLeft: 5 } },
	                  React.createElement(
	                    _reactNative.Text,
	                    { style: styles.profileName },
	                    d.User.FirstName
	                  ),
	                  React.createElement(
	                    _reactNative.Text,
	                    { style: styles.profileTitle },
	                    d.User.Title + ' @ ' + d.User.Company
	                  )
	                )
	              ),
	              React.createElement(
	                _reactNative.View,
	                { style: styles.actionBar },
	                React.createElement(
	                  _reactNative.TouchableHighlight,
	                  { style: styles.cardButton, underlayColor: 'green' },
	                  React.createElement(
	                    _reactNative.Text,
	                    null,
	                    'Follow'
	                  )
	                ),
	                React.createElement(
	                  _reactNative.TouchableHighlight,
	                  { style: styles.cardButton, underlayColor: "blue" },
	                  React.createElement(
	                    _reactNative.Text,
	                    null,
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

	  return PeopleRecommendations1;
	}(_feedCard2.default);

	var styles = ReactNative.StyleSheet.create({
	  profile: {
	    flex: 1,
	    height: 44,
	    flexDirection: 'row',
	    marginBottom: 8,
	    marginTop: 4,
	    marginLeft: 4
	  },
	  profileTitle: {
	    lineHeight: 20,
	    color: '#777'
	  },
	  profileName: {
	    lineHeight: 20,
	    fontWeight: 'bold',
	    fontSize: 16
	  },
	  profileImage: {
	    //resizeMode: 'center',
	    height: 40,
	    width: 40,
	    margin: 2,
	    borderRadius: 20,
	    borderWidth: 1,
	    borderColor: 'green'
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
	    width: _feedCardwrapper.CARD_WIDTH,
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
	    marginLeft: 5,
	    marginRight: 5,
	    marginBottom: 5
	  },
	  actionBar: {
	    flex: 1,
	    height: 50,
	    flexDirection: 'row'
	  }
	});

	exports.default = PeopleRecommendations1;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CARD_WIDTH = exports.CARD_MARGIN = exports.CARD_PREVIEW_WIDTH = exports.FeedCardWrapper = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactNative = __webpack_require__(2);

	var _Dimensions = __webpack_require__(6);

	var _Dimensions2 = _interopRequireDefault(_Dimensions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var React = __webpack_require__(1);
	var ReactNative = __webpack_require__(2);


	var CARD_PREVIEW_WIDTH = 60;
	var CARD_MARGIN = 5;
	var CARD_WIDTH = _Dimensions2.default.get('window').width - CARD_MARGIN * 2 - CARD_PREVIEW_WIDTH;

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
	exports.CARD_WIDTH = CARD_WIDTH;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import { Dimensions } from 'react-native'

	var dimensions = {};

	var Dimensions = function () {
	  function Dimensions() {
	    _classCallCheck(this, Dimensions);
	  }

	  _createClass(Dimensions, null, [{
	    key: "get",
	    value: function get(dimension) {
	      return dimensions[dimension];
	    }
	  }, {
	    key: "set",
	    value: function set() {
	      dimensions.window = {
	        fontScale: 1,
	        height: 600,
	        scale: 1,
	        width: 410
	      };

	      dimensions.screen = {
	        fontScale: 1,
	        height: 800,
	        scale: 1,
	        width: 410
	      };
	    }
	  }]);

	  return Dimensions;
	}();

	Dimensions.set();
	exports.default = Dimensions;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactNative = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var React = __webpack_require__(1);

	var FeedCard = function (_React$Component) {
	  _inherits(FeedCard, _React$Component);

	  function FeedCard(props) {
	    _classCallCheck(this, FeedCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FeedCard).call(this, props));
	  }

	  _createClass(FeedCard, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        _reactNative.View,
	        null,
	        React.createElement(
	          _reactNative.Text,
	          null,
	          'Unimplemented Card ',
	          JSON.stringify(this.props.data)
	        )
	      );
	    }
	  }]);

	  return FeedCard;
	}(React.Component);

	exports.default = FeedCard;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactNative = __webpack_require__(2);

	var _feedCardwrapper = __webpack_require__(5);

	var _feedCard = __webpack_require__(7);

	var _feedCard2 = _interopRequireDefault(_feedCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var React = __webpack_require__(1);
	var ReactNative = __webpack_require__(2);

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
	            snapToInterval: _feedCardwrapper.CARD_WIDTH + _feedCardwrapper.CARD_MARGIN * 1,
	            horizontal: true, style: { flex: 1 },
	            contentContainerStyle: styles.content },
	          this.props.data.map(function (d) {
	            return React.createElement(
	              _reactNative.View,
	              { key: d.ID, style: styles.personCard },
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
	                    { style: styles.profileName, numberOfLines: 2, lineBreakMode: 'tail' },
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
	    fontSize: 16,
	    width: _feedCardwrapper.CARD_WIDTH - 20
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
	    width: _feedCardwrapper.CARD_WIDTH,
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _feedCardwrapper = __webpack_require__(5);

	var _feedCard = __webpack_require__(7);

	var _feedCard2 = _interopRequireDefault(_feedCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactNative = __webpack_require__(2);

	var bundleURL = 'https://localhost:8081/';

	var timestampImage = bundleURL + 'assets/img/time.png';
	var likeImage = bundleURL + 'assets/img/like.png';
	var likedImage = bundleURL + 'assets/img/liked.png';
	var commentImage = bundleURL + 'assets/img/comment.png';

	var Text = ReactNative.Text;
	var View = ReactNative.View;
	var TouchableHighlight = ReactNative.TouchableHighlight;
	var ListView = ReactNative.ListView;
	var Image = ReactNative.Image;
	var ScrollView = ReactNative.ScrollView;

	var CheckinsCard = function (_FeedCard) {
	  _inherits(CheckinsCard, _FeedCard);

	  function CheckinsCard() {
	    _classCallCheck(this, CheckinsCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckinsCard).apply(this, arguments));
	  }

	  _createClass(CheckinsCard, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        _feedCardwrapper.FeedCardWrapper,
	        { title: 'Status Updates' },
	        React.createElement(
	          ScrollView,
	          {
	            showsHorizontalScrollIndicator: false,
	            automaticallyAdjustInsets: false,
	            decelerationRate: 0,
	            snapToAlignment: 'start',
	            snapToInterval: _feedCardwrapper.CARD_WIDTH + _feedCardwrapper.CARD_MARGIN * 1,
	            horizontal: true, style: { flex: 1 },
	            contentContainerStyle: styles.content },
	          this.props.data.map(function (d) {
	            return React.createElement(CheckinCard, { key: d.Id, data: d.Activities[0] });
	          })
	        )
	      );
	    }
	  }]);

	  return CheckinsCard;
	}(_feedCard2.default);

	exports.default = CheckinsCard;

	var CheckinCard = function (_FeedCard2) {
	  _inherits(CheckinCard, _FeedCard2);

	  function CheckinCard() {
	    _classCallCheck(this, CheckinCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckinCard).apply(this, arguments));
	  }

	  _createClass(CheckinCard, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;
	      var image = this.props.data.Images && this.props.data.Images.length ? React.createElement(Image, { style: styles.image, source: { uri: this.props.data.Images[0].Url } }) : null;

	      var headerStyle = { height: 50 };

	      if (image) {
	        headerStyle.marginBottom = _feedCardwrapper.CARD_WIDTH;
	      }

	      var comments = [];

	      if (data.Notes.length) {
	        comments.push({
	          Id: 0,
	          User: data.Source,
	          MetadataTags: data.MetadataTags,
	          Comments: data.Notes
	        });
	      }

	      comments = comments.concat(data.Comments);

	      var likeBar = data.Likes.length ? React.createElement(LikeBar, { likes: data.Likes }) : null;
	      var commentBar = data.Comments.length ? React.createElement(CommentBar, { comments: comments }) : null;

	      return React.createElement(
	        View,
	        { style: { width: _feedCardwrapper.CARD_WIDTH } },
	        image,
	        React.createElement(
	          View,
	          { style: [styles.header, headerStyle] },
	          React.createElement(Image, { style: styles.headerImage, source: { uri: data.Source.ImageUrl } }),
	          React.createElement(
	            Text,
	            { style: styles.headerName },
	            data.Source.FirstName,
	            ' ',
	            data.Source.LastName
	          ),
	          React.createElement(Image, { style: styles.headerTimeImage, source: { uri: timestampImage } }),
	          React.createElement(
	            Text,
	            { style: styles.headerTime },
	            '10m'
	          )
	        ),
	        likeBar,
	        commentBar,
	        React.createElement(
	          View,
	          { style: styles.actionBar },
	          React.createElement(
	            TouchableHighlight,
	            { style: styles.actionButton },
	            React.createElement(Image, { style: styles.like, source: { uri: likeImage } })
	          ),
	          React.createElement(
	            TouchableHighlight,
	            { style: styles.actionButton },
	            React.createElement(Image, { style: styles.comment, source: { uri: commentImage } })
	          )
	        )
	      );
	    }
	  }]);

	  return CheckinCard;
	}(_feedCard2.default);

	var LikeBar = function (_React$Component) {
	  _inherits(LikeBar, _React$Component);

	  function LikeBar() {
	    _classCallCheck(this, LikeBar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LikeBar).apply(this, arguments));
	  }

	  _createClass(LikeBar, [{
	    key: 'render',
	    value: function render() {
	      var likes = this.props.likes;
	      return React.createElement(
	        View,
	        { style: styles.likeBar },
	        React.createElement(Image, { style: styles.likeBarImage, source: { uri: likeImage } }),
	        React.createElement(
	          View,
	          { style: styles.likeList },
	          likes.map(function (like, index) {
	            return React.createElement(
	              Text,
	              { key: like.Id },
	              like.User.FirstName
	            );
	          }.bind(this))
	        )
	      );
	    }
	  }]);

	  return LikeBar;
	}(React.Component);

	var CommentBar = function (_React$Component2) {
	  _inherits(CommentBar, _React$Component2);

	  function CommentBar() {
	    _classCallCheck(this, CommentBar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBar).apply(this, arguments));
	  }

	  _createClass(CommentBar, [{
	    key: 'render',
	    value: function render() {
	      var comments = this.props.comments;
	      var hasMore = comments.length > 3;
	      var count = 0;
	      var commentCountText = '';

	      if (hasMore) {
	        comments = [];
	        comments.push(this.props.comments[0]);
	        for (var i = this.props.comments.length - 3; i < this.props.comments.length; i++) {
	          comments.push(this.props.comments[i]);
	        }

	        count = this.props.comments.length - 3;
	        commentCountText = count > 1 ? 'comments' : 'comment';
	      }

	      return React.createElement(
	        View,
	        { style: styles.commentBar },
	        React.createElement(Image, { style: styles.commentBarImage, source: { uri: commentImage } }),
	        React.createElement(
	          View,
	          { style: styles.commentList },
	          comments.map(function (comment, index) {
	            if (hasMore && index == 1) {
	              return React.createElement(
	                Text,
	                { key: 'more', style: styles.commentHasMore },
	                count,
	                ' more ',
	                commentCountText
	              );
	            }
	            return React.createElement(
	              View,
	              { key: comment.Id, style: styles.commentWrap },
	              React.createElement(
	                Text,
	                { style: styles.commentText, numberOfLines: 2 },
	                React.createElement(
	                  Text,
	                  { style: styles.commentUser },
	                  comment.User.FirstName,
	                  ' ',
	                  comment.User.LastName
	                ),
	                ' ',
	                comment.Comments
	              )
	            );
	          }.bind(this))
	        )
	      );
	    }
	  }]);

	  return CommentBar;
	}(React.Component);

	var styles = ReactNative.StyleSheet.create({
	  commentUser: {},
	  commentText: {
	    //numberOfLines: 2,
	    width: _feedCardwrapper.CARD_WIDTH,
	    fontSize: 13,
	    lineHeight: 16
	  },
	  commentHasMore: {
	    //numberOfLines: 2,
	    width: _feedCardwrapper.CARD_WIDTH,
	    fontSize: 13,
	    marginLeft: 5,
	    paddingBottom: 7,
	    textDecorationLine: 'underline'
	  },
	  commentWrap: {
	    flexDirection: 'row',
	    padding: 5,
	    paddingTop: 0,
	    paddingBottom: 11
	  },
	  commentBarImage: {
	    height: 11,
	    width: 11,
	    marginRight: 2,
	    marginTop: 5
	  },
	  commentBar: {
	    width: _feedCardwrapper.CARD_WIDTH,
	    flexDirection: 'row',
	    //minHeight: 30,
	    marginTop: -2,
	    padding: 5,
	    paddingTop: 0,
	    paddingLeft: 10,
	    alignItems: 'flex-start',
	    paddingBottom: 0
	  },
	  commentList: {
	    flexDirection: 'column',
	    flexWrap: 'wrap',
	    marginTop: 1
	  },
	  likeBarImage: {
	    height: 11,
	    width: 11,
	    marginRight: 7,
	    marginTop: 4
	  },
	  likeBar: {
	    marginTop: 3,
	    flexDirection: 'row',
	    //minHeight: 30,
	    padding: 5,
	    paddingLeft: 10
	  },
	  likeList: {
	    flexDirection: 'row',
	    flexWrap: 'wrap'
	  },
	  actionBar: {
	    flex: 1,
	    height: 45,
	    backgroundColor: '#eee',
	    flexDirection: 'row'
	  },
	  actionButton: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  like: {
	    height: 25,
	    width: 25
	  },
	  comment: {
	    height: 25,
	    width: 25
	  },
	  image: {
	    marginTop: 2,
	    width: _feedCardwrapper.CARD_WIDTH,
	    height: _feedCardwrapper.CARD_WIDTH,
	    resizeMode: 'cover',
	    position: 'absolute',
	    top: 0,
	    left: 0
	  },
	  headerImage: {
	    marginLeft: 10,
	    width: 40,
	    height: 40,
	    borderRadius: 20
	  },
	  headerName: {
	    fontWeight: '500',
	    fontSize: 15,
	    width: 210,
	    marginLeft: 10,
	    height: 45
	  },
	  headerTimeImage: {
	    marginTop: 5,
	    marginLeft: 2,
	    width: 10,
	    height: 10
	  },
	  headerTime: {
	    marginTop: 3,
	    fontSize: 12,
	    marginLeft: 5,
	    height: 40,
	    flex: 1
	  },
	  wrapper: {
	    width: _feedCardwrapper.CARD_WIDTH,
	    marginLeft: 27,
	    paddingTop: 1,
	    flex: 1,
	    backgroundColor: 'rgba(255,255,255,1)',
	    opacity: 1.5
	  },
	  header: {
	    paddingTop: 6,
	    flex: 1,
	    flexDirection: 'row',
	    backgroundColor: 'rgba(255,255,255,0.5)'
	  },
	  separator: {
	    height: 19,
	    backgroundColor: '#ddd'
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactNative = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactNative = __webpack_require__(2);
	//var cssVar = require('cssVar');
	var dd = {};

	var _require = __webpack_require__(2);

	var Platform = _require.Platform;


	try {
	  dd = __webpack_require__(10).DDBindings;
	} catch (e) {}

	var View = ReactNative.View;
	var Text = ReactNative.Text;
	var TouchableHighlight = ReactNative.TouchableHighlight;
	var TouchableOpacity = ReactNative.TouchableOpacity;
	var ScrollView = ReactNative.ScrollView;
	var Image = ReactNative.Image;


	function getConfig() {
	  var config = { Colors: [{ Name: "kPrimaryColor", Value: "blue" }] }; //dd.configuration;
	  //   if (Platform.OS === 'android') {
	  //     config =  JSON.parse(dd.configuration)
	  //    }
	  return config;
	}
	var primaryColor = getConfig().Colors.filter(function (c) {
	  return c.Name === "kPrimaryColor";
	})[0].Value;

	function newRandomRoute() {
	  return {
	    title: '#' + Math.ceil(Math.random() * 1000)
	  };
	}
	var DD = __webpack_require__(10).DDBindings;
	var hamburger = 'data:image/png;base64,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';
	var backAndorid = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMADA1hYn+Aw5/nblIAAAB6SURBVHja7dW7DYBADARR87Fx/xUjEVx8HJoEzRSwL9wwMzNbKBPe7054HxWynxLcR4Xs0QHvX5v77rvv/k/3d/fddx/YX4zeb3q/J/ZhoL4CtBC0ELQQU8KXI1NQUFBQUFBQmBfOYIUKqBr7qFABVs8+KlSYmZm97wbp0CIIUTEq4AAAAABJRU5ErkJggg==';
	var NavigationBarRouteMapper = {

	  LeftButton: function LeftButton(route, navigator, index, navState) {
	    // if (index === 0) {
	    //   return null;
	    // }

	    var previousRoute = index === 0 ? { title: '' } : navState.routeStack[index - 1];
	    var leftIcon = hamburger;
	    if (Platform.OS === 'android') {
	      leftIcon = backAndorid;
	    }

	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: function onPress() {
	          DD.showMenu();
	        },
	        style: styles.navBarLeftButton },
	      React.createElement(
	        View,
	        null,
	        React.createElement(Image, { source: { uri: leftIcon }, resizeMode: 'contain', style: [styles.hamburger] })
	      )
	    );
	  },

	  RightButton: function RightButton(route, navigator, index, navState) {
	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: function onPress() {
	          return navigator.push(newRandomRoute());
	        },
	        style: styles.navBarRightButton },
	      React.createElement(Text, { style: [styles.navBarText, styles.navBarButtonText] })
	    );
	  },

	  Title: function Title(route, navigator, index, navState) {
	    return React.createElement(
	      Text,
	      { style: [styles.navBarText, styles.navBarTitleText] },
	      route.title
	    );
	  }

	};

	var DDView = function (_React$Component) {
	  _inherits(DDView, _React$Component);

	  function DDView() {
	    _classCallCheck(this, DDView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DDView).apply(this, arguments));
	  }

	  _createClass(DDView, [{
	    key: '_handleButton',
	    value: function _handleButton() {
	      ModalWithNavigatorCoordinator.closeModal();
	    }
	  }, {
	    key: '_handleRowPress',
	    value: function _handleRowPress() {
	      this.refs.navigator.push({
	        title: 'Simple View',
	        component: SimpleView
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = [];
	      var child = this.props.children;
	      return React.createElement(
	        View,
	        { style: styles.container },
	        child
	      );
	    }
	  }]);

	  return DDView;
	}(React.Component);

	;

	var styles = _reactNative.StyleSheet.create({
	  hamburger: {
	    flex: 1,
	    marginVertical: 12,
	    height: 17,
	    width: 23,
	    marginLeft: 7
	  },
	  container: {
	    flex: 1,
	    backgroundColor: 'orange',
	    flexDirection: 'row',
	    alignItems: 'stretch',
	    justifyContent: 'center'
	  },
	  navBar: {
	    backgroundColor: primaryColor
	  },
	  navBarText: {
	    fontSize: 16,
	    marginVertical: 10,
	    color: '#fff'
	  },
	  navBarTitleText: {
	    color: '#fff',
	    fontWeight: '600',
	    marginVertical: 9
	  },
	  navBarLeftButton: {
	    paddingLeft: 10
	  },
	  navBarRightButton: {
	    paddingRight: 10
	  },
	  navBarButtonText: {
	    color: '#fff'
	  },
	  scene: {
	    flex: 1,
	    paddingTop: 63,
	    flexDirection: 'column'
	  }
	});

	module.exports = DDView;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  "cards": [
	  /*
	  {
	    "created": "2016-08-02T21:07:06.186Z",
	    "id": "2aee3418-e8a4-427b-9a8b-eae533992c57",
	    "template": "checkins",
	    "data": [      {
	      "IsDisabled": false,
	      "Id": "CHK-12",
	      "Type": 0,
	      "Activities": [
	        {
	          "Updated": "2016-01-11T02:57:32.397Z",
	          "Id": "CHK-12",
	          "MappingId": 12,
	          "Source": {
	            "Updated": "2016-01-08T22:21:02.026Z",
	            "Id": 75,
	            "FirstName": "Engineering",
	            "LastName": "Test",
	            "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	            "Title": "",
	            "Company": ""
	          },
	          "Type": 1,
	          "Target": null,
	          "Verb": "posted an update:",
	          "CallToAction": [
	            {
	              "Title": "Check In",
	              "Route": "tt:\/\/update\/1",
	              "HasCurrentUserPerformedAction": false
	            }
	          ],
	          "Comments": [
	            {
	              "Updated": "2016-01-11T02:59:40.185Z",
	              "Id": 2,
	              "CheckInId": 12,
	              "CommentId": 2,
	              "Comments": "Test comment with @Engineering Test and #hash",
	              "DisplayOrder": null,
	              "MetadataTags": [
	                {
	                  "Value": "hash",
	                  "Type": "Hashtag",
	                  "StartIndex": 40,
	                  "Length": 5,
	                  "Route": "dd:\/\/hashtag\/hash"
	                },
	                {
	                  "Value": 75,
	                  "Type": "Mention",
	                  "StartIndex": 18,
	                  "Length": 17,
	                  "Route": "dd:\/\/profile\/75"
	                }
	              ],
	              "User": {
	                "Updated": "0001-01-01T00:00:00.000Z",
	                "Id": 75,
	                "FirstName": "Engineering",
	                "LastName": "Test",
	                "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	                "Title": "",
	                "Company": ""
	              }
	            },
	            {
	              "Updated": "2016-01-11T02:59:50.391Z",
	              "Id": 3,
	              "CheckInId": 12,
	              "CommentId": 3,
	              "Comments": "Another comment",
	              "DisplayOrder": null,
	              "MetadataTags": [
	                
	              ],
	              "User": {
	                "Updated": "0001-01-01T00:00:00.000Z",
	                "Id": 75,
	                "FirstName": "Engineering",
	                "LastName": "Test",
	                "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	                "Title": "",
	                "Company": ""
	              }
	            },
	            {
	              "Updated": "2016-01-11T02:59:54.403Z",
	              "Id": 4,
	              "CheckInId": 12,
	              "CommentId": 4,
	              "Comments": "One more",
	              "DisplayOrder": null,
	              "MetadataTags": [
	                
	              ],
	              "User": {
	                "Updated": "0001-01-01T00:00:00.000Z",
	                "Id": 75,
	                "FirstName": "Engineering",
	                "LastName": "Test",
	                "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	                "Title": "",
	                "Company": ""
	              }
	            }
	          ],
	          "Likes": [
	            {
	              "Updated": "2016-01-11T02:59:21.842Z",
	              "Id": 1,
	              "CheckInId": 12,
	              "User": {
	                "Updated": "0001-01-01T00:00:00.000Z",
	                "Id": 75,
	                "FirstName": "Engineering",
	                "LastName": "Test",
	                "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	                "Title": "",
	                "Company": ""
	              }
	            }
	          ],
	          "Associations": [
	            
	          ],
	          "Notes": "Photo test with #hashtags and @Engineering Test ",
	          "Images": [
	            {
	              "Url": "https:\/\/d3dhqk2br2olrw.cloudfront.net\/32c825fc-af8d-45f6-93f1-ee70abc45abb-S320x480.jpg",
	              "ThumbnailUrl": "https:\/\/d3dhqk2br2olrw.cloudfront.net\/32c825fc-af8d-45f6-93f1-ee70abc45abb-S20x20.jpg",
	              "DisplayOrder": 0
	            }
	          ],
	          "CurrentUserLikeThis": true,
	          "Created": "2016-01-11T02:57:32.397Z",
	          "DisplayAfter": "2016-01-11T02:57:32.397Z",
	          "MetadataTags": [
	            {
	              "Value": 75,
	              "Type": "Mention",
	              "StartIndex": 30,
	              "Length": 17,
	              "Route": "dd:\/\/profile\/75"
	            },
	            {
	              "Value": "hashtags",
	              "Type": "Hashtag",
	              "StartIndex": 16,
	              "Length": 9,
	              "Route": "dd:\/\/hashtag\/hashtags"
	            }
	          ]
	        }
	      ],
	      "Verb": null,
	      "Updated": "2016-01-11T02:57:32.397Z"
	    },
	    {
	      "IsDisabled": false,
	      "Id": "CHK-9",
	      "Type": 0,
	      "Activities": [
	        {
	          "Updated": "2016-01-08T05:56:03.532Z",
	          "Id": "CHK-9",
	          "MappingId": 9,
	          "Source": {
	            "Updated": "2016-01-08T09:56:43.200Z",
	            "Id": 110,
	            "FirstName": "Venus",
	            "LastName": "Mcain",
	            "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	            "Title": "test title",
	            "Company": "test company"
	          },
	          "Type": 1,
	          "Target": null,
	          "Verb": "posted an update:",
	          "CallToAction": [
	            {
	              "Title": "Check In",
	              "Route": "tt:\/\/update\/1",
	              "HasCurrentUserPerformedAction": false
	            }
	          ],
	          "Comments": [
	            
	          ],
	          "Likes": [
	            {
	              "Updated": "2016-01-11T02:59:22.745Z",
	              "Id": 2,
	              "CheckInId": 9,
	              "User": {
	                "Updated": "0001-01-01T00:00:00.000Z",
	                "Id": 75,
	                "FirstName": "Engineering",
	                "LastName": "Test",
	                "ImageUrl": "https:\/\/d2ramlsbt2b9kt.cloudfront.net\/default\/noface_110.jpg",
	                "Title": "",
	                "Company": ""
	              }
	            }
	          ],
	          "Associations": [
	            
	          ],
	          "Notes": "Hi",
	          "CurrentUserLikeThis": true,
	          "Created": "2016-01-08T05:56:03.532Z",
	          "DisplayAfter": "2016-01-08T05:56:03.532Z",
	          "MetadataTags": [
	            
	          ]
	        }
	      ],
	      "Verb": null,
	      "Updated": "2016-01-08T05:56:03.532Z"
	    }]
	  },*/
	  {
	    "template": "people-recommendations-1",
	    "data": [{
	      "User": {
	        "ID": "userid1",
	        "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	        "FirstName": "Nicholas",
	        "LastName": "Clark",
	        "Title": "CTO",
	        "Company": "DoubleDutch"
	      }
	    }, {
	      "User": {
	        "ID": "userid2",
	        "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	        "FirstName": "Lucian",
	        "LastName": "Beebe",
	        "Title": "VP Product",
	        "Company": "DoubleDutch"
	      }
	    }, {
	      "User": {
	        "ID": "userid3",
	        "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	        "FirstName": "Nicholas",
	        "LastName": "Clark",
	        "Title": "CTO",
	        "Company": "DoubleDutch"
	      }
	    }, {
	      "User": {
	        "ID": "userid4",
	        "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	        "FirstName": "Nicholas",
	        "LastName": "Clark",
	        "Title": "CTO",
	        "Company": "DoubleDutch"
	      }
	    }],
	    "created": "2016-08-02T21:07:06.186Z",
	    "id": "1aee3418-e8a4-427b-9a8b-eae533992c57"
	  }, {
	    "template": "channel-recommendations-1",
	    "data": [{
	      "ID": "1",
	      "Name": "The Beginners Guide to Selecting Ideal Participants in Testing Trisomething And something else",
	      "Type": "Session Channel",
	      "UserCount": 37,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }, {
	      "ID": "2",
	      "Name": "Best Topic Channel Ever Created or Something Like That",
	      "Type": "Topic Channel",
	      "UserCount": 14,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }],
	    "created": "2016-08-02T21:07:06.186Z",
	    "id": "1aee3418-e8a4-427b-9a8b-eae533992c57"
	  }, {
	    "template": "channel-recommendations-1",
	    "data": [{
	      "ID": "1",
	      "Name": "The Beginners Guide to Selecting Ideal Participants in Testing Trisomething And something else",
	      "Type": "Session Channel",
	      "UserCount": 37,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }, {
	      "ID": "2",
	      "Name": "Best Topic Channel Ever Created or Something Like That",
	      "Type": "Topic Channel",
	      "UserCount": 14,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }],
	    "created": "2016-08-02T21:07:06.186Z",
	    "id": "1aee3418-e8a4-427b-9a8b-eae533992c57"
	  }, {
	    "template": "channel-recommendations-1",
	    "data": [{
	      "ID": "1",
	      "Name": "The Beginners Guide to Selecting Ideal Participants in Testing Trisomething And something else",
	      "Type": "Session Channel",
	      "UserCount": 37,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }, {
	      "ID": "2",
	      "Name": "Best Topic Channel Ever Created or Something Like That",
	      "Type": "Topic Channel",
	      "UserCount": 14,
	      "Users": [{
	        "User": {
	          "ID": "userid1",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid2",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Lucian",
	          "LastName": "Beebe",
	          "Title": "VP Product",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid3",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }, {
	        "User": {
	          "ID": "userid4",
	          "ImageURL": "https://d2dstwi4brf1pu.cloudfront.net/6f89f1d6-7b04-43af-8d4d-5c10fb902742-S110x110.jpg",
	          "FirstName": "Nicholas",
	          "LastName": "Clark",
	          "Title": "CTO",
	          "Company": "DoubleDutch"
	        }
	      }]
	    }],
	    "created": "2016-08-02T21:07:06.186Z",
	    "id": "1aee3418-e8a4-427b-9a8b-eae533992c57"
	  }]
	};

/***/ }
/******/ ]);