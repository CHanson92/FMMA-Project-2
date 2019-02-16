import { Meteor } from 'meteor/meteor';
import FMMA from '../imports/api/fmma';

Meteor.startup(() => {
  // If the collections are empty, add some data.
  if (FMMA.find().count() === 0) {
    let incomingData = {
      "location": '',
      "gym": [
        {
          "name": '',
          "address": '',
          "description": '',
          "martialArtClass": [
            {
              "martialArt": '', 
              "session": [
                {"day": '', "startTime": '', "endTime": ''},
              ]
            }]
        }
      ]
    }
    Meteor.call('FMMA.insert', (incomingData))
  }
})

Meteor.methods({
  'checkIfLocationExists': function (location) {
      return (Meteor.location.findOne({location: location})) ? true : false;
  }
});

Meteor.methods({
  'FMMA.insert'(
    obj
    ) {
 
    FMMA.insert({
      location: obj.location,
      gym: obj.gym,
      
    });
  }
});