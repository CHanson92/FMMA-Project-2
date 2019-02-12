import { Meteor } from 'meteor/meteor';
import FMMA from '../imports/api/fmma';
import Gyms from '../imports/api/gyms';
import Location from '../imports/api/location';
import SessionTimes from '../imports/api/sessiontimes';
import TypeOfMartialArt from '../imports/api/typeofmartialart';

Meteor.startup(() => {
  // If the collections are empty, add some data.

  if (Gyms.find().count() === 0) {
    insertGyms("name", "location", "description");
  }
  if (Location.find().count() === 0) {
    insertLocation("name");
  }
  if (SessionTimes.find().count() === 0) {
    insertSessionTimes("StartTime", "EndTime");
  }
  if (TypeOfMartialArt.find().count() === 0) {
    insertTypeOfMartialArt("MartialArt");
  }
  if (FMMA.find().count() === 0) {
    let newData = {
      "location": "London",
      "gym": [
        {
          "name": "Murat's Gyms",
          "address": "123 London Street",
          "martialArtClass": [
            {
              "name": "Judo", 
              "session": [
                {"day": "Monday", "startTime": "12:00", "endTime": "17:00"},
                {"day": "Wednesday", "startTime": "12:00", "endTime": "17:00"}
              ]
            }]
        }
      ]
    }
    Meteor.call('FMMA.insertFMMA', (incomingData))
  }
})