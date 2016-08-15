'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactNative = require('react-native');
//var cssVar = require('cssVar');
var dd = {};

var _require = require('react-native');

var Platform = _require.Platform;


try {
  dd = require('dd-nativemodules').DDBindings;
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
var DD = require('dd-nativemodules').DDBindings;
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
      return React.createElement(_reactNative.Navigator, {
        initialRoute: { name: 'My First Scene', index: 1, title: this.props.title },
        renderScene: function renderScene(route, navigator) {
          return React.createElement(
            View,
            { style: styles.scene },
            child
          );
        },
        navigationBar: React.createElement(_reactNative.Navigator.NavigationBar, {
          routeMapper: NavigationBarRouteMapper,
          style: styles.navBar
        })
      });
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
    backgroundColor: 'orange'
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