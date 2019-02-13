import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

let FMMA = new Mongo.Collection('FMMA');

let sessionTypes = new SimpleSchema({
    day: {type: String},
    startTime: {type: String},
    endTime: {type: String}
});
let martialArtClass = new SimpleSchema({
    martialArt: {type: String},
    session: Array,
    "session.$": sessionTypes,
})
let gym = new SimpleSchema({
    name: {type: String},
    address: {type: String},
    description: {type: String},
    martialArtClass: Array,
    "martialArtClass.$": martialArtClass
})
FMMA.schema = new SimpleSchema({
    location: {type: String},
    gym: Array,
    "gym.$": gym
});

function insertFMMA(incomingData) {
    FMMA.insert({
        incomingData
    })
}

Meteor.methods({
    'FMMA.insertFMMA'(incomingData) {
        if (FMMA.schema.validate(incomingData)) {
            insertFMMA(incomingData)
        } else {
            console.log("Validation Errors")
        }
    }
})

export default FMMA;