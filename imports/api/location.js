import { Mongo } from 'meteor/mongo';

let Location = new Mongo.Collection('Location');
function insertLocation(name) {
    Location.insert({ name });
}

Location.schema = new SimpleSchema({
    name: {type: String}
});

Meteor.methods({
    'Location.insertLocation'(name) {
        let incomingData = {
            name,
        }
        if (Location.schema.validate(incomingData)) {
            insertLocation(name)
        } else {
            console.log("Validation Error")
        }
    }
})

export default Location;