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