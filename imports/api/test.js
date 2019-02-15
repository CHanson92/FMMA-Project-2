import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  mailingAddress: Object,
  'mailingAddress.street': String,
  'mailingAddress.city': String,
});

import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  addresses: {
    type: Array,
    minCount: 1,
    maxCount: 4
  },
  'addresses.$': Object,
  'addresses.$.street': String,
  'addresses.$.city': String,
});

const schema = new SimpleSchema({
    location: String,
    gym: {
        Type: Array, blackbox: true,
        minCount: 4
    },
    'gym.$': Object,
    'gym.$.name': String,
    'gym.$.description': String,
    'gym.$.martialArtClass': Array, blackbox: true,
        martialArtClass: {
            Type: Array,
            minCount: 2
        },
        'gym.$.martialArtClass.$.martialArt': String,
        'gym.$.martialArtClass.$.session': Array, blackbox: true,
            session: {
                Type: Array,
                minCount: 3
            },
        'gym.$.martialArtClass.session.day': String,
        'gym.$.martialArtClass.session.startTime': String,
        'gym.$.martialArtClass.session.endTime': String,
});

FMMA = new Mongo.Collection("FMMA");
var Schemas = {};
Schemas.FMMA = new SimpleSchema(
    {
        "location": {
            type: String
        },
        "gym": {
            type: [Object]
        },
        "gym.$.name": {
            type: String
        },
        "gym.$.description": {
            type: String
        },
        // martialArtsClass
        "gym.$.martialArtsClass": {
            type: [Object]
        },
        "gym.$.martialArtsClass.$.martialArt": {
            type: String
        },
        // sessions
        "gym.$.martialArtsClass.$.session": {
            type: [Object]
        },
        "gym.$.martialArtsClass.$.session.$.day": {
            type: String
        },
        "gym.$.martialArtsClass.$.session.$.startTime": {
            type: String
        },
        "gym.$.martialArtsClass.$.session.$.Endtime": {
            type: String
        },
    },
gym.attachSchema(Schemas.gym));