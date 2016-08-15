'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _feedCardwrapper = require('./feed.cardwrapper.js');

var _feedCard = require('./feed.card.js');

var _feedCard2 = _interopRequireDefault(_feedCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactNative = require('react-native');

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
            snapToInterval: (0, _feedCardwrapper.GET_CARD_WIDTH)() + _feedCardwrapper.CARD_MARGIN * 1,
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
        headerStyle.marginBottom = (0, _feedCardwrapper.GET_CARD_WIDTH)();
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
        { style: { width: (0, _feedCardwrapper.GET_CARD_WIDTH)() } },
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
    width: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
    fontSize: 13,
    lineHeight: 16
  },
  commentHasMore: {
    //numberOfLines: 2,
    width: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
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
    width: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
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
    width: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
    height: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
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
    width: (0, _feedCardwrapper.GET_CARD_WIDTH)(),
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