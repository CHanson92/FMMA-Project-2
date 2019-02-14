import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
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
                {"day": '', "startTime": '', "endTime": ''}
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
    location,
    gym, 
    name, 
    address, 
    description, 
    martialArtClass,
    martialArt, 
    session,
    day, 
    startTime, 
    endTime
    ) {
    check(location, String);
    check(gym, Array);
    check(name, String);
    check(address, String);
    check(description, String);
    check(martialArtClass, Array);
    check(martialArt, String);
    check(session, Array);
    check(day, String);
    check(startTime, String);
    check(endTime, String);
 
    FMMA.insert({
      location: location,
      gym: [],
      name: gym.name,
      address: gym.address,
      description: gym.description,
      martialArtClass: [],
      martialArt: gym.martialArtClass.martialArt,
      session: [],
      day: gym.martialArtClass.session.day,
      startTime: gym.martialArtClass.session.startTime,
      endTime: gym.martialArtClass.session.endTime
    });
  }
});