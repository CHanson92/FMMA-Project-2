import { Mongo } from 'meteor/mongo';

let TypeOfMartialArt = new Mongo.Collection('TypeOfMartialArt');
function insertTypeOfMartialArt(MartialArt) {
    TypeOfMartialArt.insert({ MartialArt });
  }
  
  TypeOfMartialArt.schema = new SimpleSchema({
    MartialArt: {type: String}
})

Meteor.methods({
    'TypeOfMartialArt.insertTypeOfMartialArt'(MartialArt) {
        let incomingData = {
            MartialArt
        }
        if (TypeOfMartialArt.schema.validate(incomingData)) {
            insertTypeOfMartialArt(MartialArt)
        } else {
            console.log("Validation Error")
        }
    }
})

export default TypeOfMartialArt;