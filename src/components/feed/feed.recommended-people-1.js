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
import { FeedCardWrapper, CARD_PREVIEW_WIDTH, CARD_MARGIN, GET_CARD_WIDTH } from './feed.cardwrapper.js'
import FeedCard from './feed.card.js'

class PeopleRecommendations1 extends FeedCard {
    render() {
        return (
          <FeedCardWrapper title="Recommended People">
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
                  <View key={d.User.ID} style={[ styles.personCard, { width: GET_CARD_WIDTH() }] }>
                    <TouchableHighlight style={styles.dismissButton}>
                      <Text style={styles.dismissButtonText}>×</Text>
                    </TouchableHighlight>
                    <View style={styles.profile}>
                      <Image source={{ uri: d.User.ImageURL }} style={styles.profileImage} />
                      <View style={{ marginLeft: 5 }}>
                        <Text style={styles.profileName}>{d.User.FirstName}</Text>
                        <Text style={styles.profileTitle}>{d.User.Title + ' @ ' + d.User.Company}</Text>
                      </View>
                    </View>
                    <View style={styles.actionBar}>
                      <TouchableHighlight style={styles.cardButton} underlayColor="green">
                        <Text>Follow</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={styles.cardButton} underlayColor={"blue"}>
                        <Text>Message</Text>
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
      height: 44,
      flexDirection: 'row',
      marginBottom: 8,
      marginTop: 4,
      marginLeft: 4,
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
      alignItems: 'center',
    },
    dismissButtonText: {
      lineHeight: 24,
      fontSize: 24,
      color: '#888',
      fontWeight: '400',
    },
    personCard: {
      //width: CARD_WIDTH,
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
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
    },
    actionBar : {
      flex: 1,
      height: 50,
      flexDirection: 'row'
    },
});

export default PeopleRecommendations1;
