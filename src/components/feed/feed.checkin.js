'use strict';

var React = require('react');
var ReactNative = require('react-native');

var bundleURL = 'https://localhost:8081/'

const timestampImage = bundleURL + 'assets/img/time.png'
const likeImage = bundleURL + 'assets/img/like.png'
const likedImage = bundleURL + 'assets/img/liked.png'
const commentImage = bundleURL + 'assets/img/comment.png'

var {
    Text,
    View,
    TouchableHighlight,
    ListView,
    Image,
    ScrollView
} = ReactNative;

import { FeedCardWrapper, CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH } from './feed.cardwrapper.js'
import FeedCard from './feed.card.js'

export default class CheckinsCard extends FeedCard {
    render() {
        return (
          <FeedCardWrapper title="Status Updates">
            <ScrollView
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustInsets={false}
              decelerationRate={0}
              snapToAlignment='start'
              snapToInterval={GET_CARD_WIDTH() + CARD_MARGIN*1}
              horizontal={ true } style={{ flex: 1 }}
              contentContainerStyle={styles.content}>
              { this.props.data.map((d) => {
                return (
                  <CheckinCard key={d.Id} data={d.Activities[0]} />
                )
               })}
            </ScrollView>
          </FeedCardWrapper>
        );
    }
}

class CheckinCard extends FeedCard {
    render() {
        var data = this.props.data
        var image = this.props.data.Images && this.props.data.Images.length ? <Image style={styles.image} source={{uri: this.props.data.Images[0].Url}} /> : null
        
        var headerStyle = { height: 50 }
        
        if (image) {
          headerStyle.marginBottom = GET_CARD_WIDTH()
        }
        
        var comments = []
        
        if (data.Notes.length) {
          comments.push({
            Id: 0,
            User: data.Source,
            MetadataTags: data.MetadataTags,
            Comments: data.Notes
          })
        }
        
        comments = comments.concat(data.Comments)
        
        var likeBar = data.Likes.length ? <LikeBar likes={data.Likes} /> : null
        var commentBar = data.Comments.length ? <CommentBar comments={comments} /> : null

        return (
          <View style={{ width: GET_CARD_WIDTH() }}>
            {image}
            <View style={[styles.header, headerStyle]}>
              <Image style={styles.headerImage} source={{uri: data.Source.ImageUrl}} />
              <Text style={styles.headerName}>{data.Source.FirstName} {data.Source.LastName}</Text>
              <Image style={styles.headerTimeImage} source={{uri: timestampImage}} />
              <Text style={styles.headerTime}>10m</Text>
            </View>
            {likeBar}
            {commentBar}
            <View style={styles.actionBar}>
              <TouchableHighlight style={styles.actionButton}>
                <Image style={styles.like} source={{uri: likeImage}} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.actionButton}>
                <Image style={styles.comment} source={{uri: commentImage}} />
              </TouchableHighlight>
            </View>
          </View>
        );
    }
}

class LikeBar extends React.Component {
    render() {
        var likes = this.props.likes
        return (
          <View style={styles.likeBar}>
            <Image style={styles.likeBarImage} source={{uri: likeImage}} />
            <View style={styles.likeList}>
              {likes.map(function (like, index) {
                return <Text key={like.Id}>{like.User.FirstName}</Text>
              }.bind(this))}
            </View>
          </View>
        )
    }
}

class CommentBar extends React.Component {
    render() {
        var comments = this.props.comments
        var hasMore = comments.length > 3
        var count = 0
        var commentCountText = ''
        
        if (hasMore) {
          comments = []
          comments.push(this.props.comments[0])
          for (var i = this.props.comments.length - 3; i < this.props.comments.length; i++) {
            comments.push(this.props.comments[i])
          }
          
          count = (this.props.comments.length - 3)
          commentCountText = count > 1 ? 'comments' : 'comment'
        }
        
        return (
          <View style={styles.commentBar}>
            <Image style={styles.commentBarImage} source={{uri: commentImage}} />
            <View style={styles.commentList}>
              {comments.map(function (comment, index) {
                if (hasMore && index == 1) {
                  return <Text key='more' style={styles.commentHasMore}>{count} more {commentCountText}</Text>
                }
                return <View key={comment.Id} style={styles.commentWrap}>
                  <Text style={styles.commentText} numberOfLines={2}><Text style={styles.commentUser}>{comment.User.FirstName} {comment.User.LastName}</Text> {comment.Comments}</Text>
                </View>
              }.bind(this))}
            </View>
          </View>
        )
    }
}

var styles = ReactNative.StyleSheet.create({
    commentUser: {
    },
    commentText: { 
      //numberOfLines: 2,
      width: GET_CARD_WIDTH(),
      fontSize: 13,
      lineHeight: 16
    },
    commentHasMore: { 
      //numberOfLines: 2,
      width: GET_CARD_WIDTH(),
      fontSize: 13,
      marginLeft: 5,
      paddingBottom: 7,
      textDecorationLine: 'underline',
//      textDecorationStyle: 'solid'
    },
    commentWrap : {
      flexDirection: 'row',
      padding: 5,
      paddingTop: 0,
      paddingBottom: 11
    },
    commentBarImage : {
      height: 11,
      width: 11,
      marginRight: 2,
      marginTop: 5,
    },
    commentBar : {
      width: GET_CARD_WIDTH(),
      flexDirection: 'row',
      //minHeight: 30,
      marginTop: -2,
      padding: 5,
      paddingTop: 0,
      paddingLeft: 10,
      alignItems: 'flex-start',
      paddingBottom: 0
    },
    commentList : {
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: 1,
    },
    likeBarImage : {
      height: 11,
      width: 11,
      marginRight: 7,
      marginTop: 4,
    },
    likeBar : {
      marginTop: 3,
      flexDirection: 'row',
      //minHeight: 30,
      padding: 5,
      paddingLeft: 10,
    },
    likeList : {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    actionBar : {
      flex: 1,
      height: 45,
      backgroundColor: '#eee',
      flexDirection: 'row'
    },
    actionButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    like : {
      height: 25,
      width: 25,
    },
    comment : {
      height: 25,
      width: 25,
    },
    image : {
      marginTop: 2,
      width: GET_CARD_WIDTH(),
      height: GET_CARD_WIDTH(),
      resizeMode: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    },
    headerImage : {
      marginLeft: 10,
      width: 40,
      height: 40,
      borderRadius: 20
    },
    headerName : {
      fontWeight: '500',
      fontSize: 15,
      width: 210,
      marginLeft: 10,
      height: 45,
    },
    headerTimeImage : {
      marginTop: 5,
      marginLeft: 2,
      width: 10,
      height: 10,
    },
    headerTime : {
      marginTop: 3,
      fontSize: 12,
      marginLeft: 5,
      height: 40,
      flex: 1,
    },
    wrapper :{
      width: GET_CARD_WIDTH(),
      marginLeft: 27,
      paddingTop: 1,
      flex: 1,
      backgroundColor: 'rgba(255,255,255,1)',
      opacity: 1.5
    },
    header : {
      paddingTop: 6,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(255,255,255,0.5)',
    },
    separator: {
        height: 19,
        backgroundColor: '#ddd'
    },
});
