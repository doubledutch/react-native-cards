import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
'use strict';

var React = require('react');
var ReactNative = require('react-native');
import { FeedCardWrapper, CARD_PREVIEW_WIDTH, CARD_MARGIN, CARD_WIDTH } from './feed.cardwrapper.js'
import FeedCard from './feed.card.js'

export default class ChannelRecommendations1 extends FeedCard {
    render() {
        return (
          <FeedCardWrapper title="Recommended Channels">
            <ScrollView
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustInsets={false}
              decelerationRate={0}
              snapToAlignment='start'
              snapToInterval={CARD_WIDTH + CARD_MARGIN*1}
              horizontal={ true } style={{ flex: 1 }}
              contentContainerStyle={styles.content}>
              { this.props.data.map((d) => {
                return (
                  <View key={d.ID} style={ styles.personCard }>
                    <TouchableHighlight style={styles.dismissButton}>
                      <Text style={styles.dismissButtonText}>×</Text>
                    </TouchableHighlight>
                    <View style={styles.profile}>
                      <View style={{ marginLeft: 0 }}>
                        <Text style={styles.profileTitle}>{d.Type}</Text>
                        <Text style={styles.profileName} numberOfLines={2} lineBreakMode="tail">{d.Name}</Text>
                      </View>
                    </View>
                    <View style={styles.actionBar}>
                      <TouchableHighlight style={{ marginRight: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                          { d.Users.map((u, idx) => {
                            var style = {  }
                            return (
                              <Image key={u.User.ID} source={{ uri: u.User.ImageURL }} style={[style, styles.profileImage]} />
                            )
                          })}
                          <Text style={styles.profileCount}>+37 others</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Message</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                )
               })}
            </ScrollView>
          </FeedCardWrapper>
        );
    }
}

var styles = ReactNative.StyleSheet.create({
    profile: {
      flex: 1,
      height: 52,
      flexDirection: 'row',
      marginBottom: 8,
      marginTop: 4,
      marginLeft: 4,
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
      width: CARD_WIDTH - 20,
    },
    profileCount: {
      marginLeft: 24,
      lineHeight: 32,
    },
    profileImage: {
      resizeMode: 'contain',
      height: 36,
      width: 36,
      marginTop: 8,
      borderRadius: 18,
      borderWidth: 3,
      borderColor: 'green',
      marginRight: -20,
    },
    dismissButton: {
      height: 24,
      width: 24,
      right: 0,
      top: 0,
      position: 'absolute',
      alignItems: 'center',
    },
    dismissButtonText: {
      lineHeight: 24,
      fontSize: 24,
      color: '#888',
      fontWeight: '400',
    },
    personCard: {
      width: CARD_WIDTH,
      borderRadius: 5,
      borderColor: '#ccc',
      borderWidth: 1,
      marginRight: CARD_MARGIN,
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
      backgroundColor: 'blue',
    },
    cardButtonText : {
      color: 'white'
    },
    actionBar : {
      flex: 1,
      height: 50,
      marginLeft: 4,
      flexDirection: 'row'
    },
});