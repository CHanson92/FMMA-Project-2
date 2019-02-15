import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

let FMMA = new Mongo.Collection('FMMA');

var Schemas = {};
Schemas.FMMA = new SimpleSchema(
    {
        "location": {
            type: String
        },
        "gym": {
            type: Object,
        },
        "gym.$": {
            type: Object,
        },
        "gym.$.name": {
            type: String
        },
        "gym.$.description": {
            type: String
        },
        // martialArtsClass
        "gym.$.martialArtClass": {
            type: Object
        },
        "gym.$.martialArtClass.$": {
            type: Object
        },
        "gym.$.martialArtClass.$.martialArt": {
            type: String
        },
        // sessions
        "gym.$.martialArtClass.$.session": {
            type: Object
        },
        "gym.$.martialArtClass.$.session.$": {
            type: Object
        },
        "gym.$.martialArtClass.$.session.$.day": {
            type: String
        },
        "gym.$.martialArtClass.$.session.$.startTime": {
            type: String
        },
        "gym.$.martialArtClass.$.session.$.endTime": {
            type: String
        },
}),

// let session = new SimpleSchema({
//     day: {type: String},
//     startTime: {type: String},
//     endTime: {type: String}
// });
// let martialArtClass = new SimpleSchema({
//     martialArt: {type: String},
//     session: Object,
//     "session.$": session,
// })
// let gym = new SimpleSchema({
//     name: {type: String},
//     address: {type: String},
//     description: {type: String},
//     martialArtClass: Object,
//     "martialArtClass.$": martialArtClass
// })
// FMMA.schema = new SimpleSchema({
//     location: {type: String},
//     gym: Array,
//     "gym.$": gym
// });

function insertFMMA(incomingData) {
    FMMA.insert({
        incomingData
    })
},

Meteor.methods({
    'FMMA.insertFMMA'(incomingData) {
        if (FMMA.schema.validate(incomingData)) {
            insertFMMA(incomingData)
        } else {
            console.log("Validation Errors")
        }
    }
});

export default FMMA;