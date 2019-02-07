import { Mongo } from 'meteor/mongo';

let Gyms = new Mongo.Collection('Gyms');
Gyms.schema = new SimpleSchema({
    name: {type: String},
    location: {type: String},
    description: {type: String}
});

function insertGyms(name, location, description) {
    Gyms.insert({ name, location, description });
}

Meteor.methods({
    'Gyms.insertGym'(name, location, description) {
        let incomingData = {
            name,
            location, 
            description
        }
        if (Gyms.schema.validate(incomingData)) {
            insertGyms(name, location, description)
        } else {
            console.log("Validation Error")
        }

    }
})

export default Gyms 