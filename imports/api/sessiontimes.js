import { Mongo } from 'meteor/mongo';

let SessionTimes = new Mongo.Collection('SessionTimes');
function insertSessionTimes(Day, StartTime, EndTime) {
    SessionTimes.insert({ Day, StartTime, EndTime });
}

SessionTimes.schema = new SimpleSchema({
    Day: {type: String},
    StartTime: {type: String},
    EndTime: {type: String}
  })

Meteor.methods({
    'SessionTimes.insertSessionTimes'(Day, StartTime, EndTime) {
        let incomingData = {
            Day,
            StartTime,
            EndTime
        }
        if (SessionTimes.schema.validate(incomingData)) {
            insertSessionTimes(Day, StartTime, EndTime)
        } else {
            console.log("Validation Error")
        }
    }
})

export default SessionTimes;