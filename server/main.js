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

const checkIfLocationExists = (obj) => {
  return (FMMA.findOne({location: obj.location}))
};

Meteor.methods({
  'FMMA.insert'(
    obj
    ) {
  if(checkIfLocationExists(obj)) {
    const location = FMMA.findOne({location: obj.location})
    FMMA.update(
      { _id: location._id },
      { $push: { gym: obj.gym[0] } }
   )
  } else {
    FMMA.insert({
      location: obj.location,
      gym: obj.gym,
    })};
  }
});