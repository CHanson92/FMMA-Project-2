import { Mongo } from 'meteor/mongo';

let SessionTimes = new Mongo.Collection('SessionTimes');
function insertSessionTimes(StartTime, EndTime) {
    SessionTimes.insert({ StartTime, EndTime });
}

SessionTimes.schema = new SimpleSchema({
    StartTime: {type: String},
    EndTime: {type: String}
  })

Meteor.methods({
    'SessionTimes.insertSessionTimes'(StartTime, EndTime) {
        let incomingData = {
            StartTime,
            EndTime
        }
        if (SessionTimes.schema.validate(incomingData)) {
            insertSessionTimes(StartTime, EndTime)
        } else {
            console.log("Validation Error")
        }
    }
})

export default SessionTimes;