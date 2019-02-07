import { Meteor } from 'meteor/meteor';
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
});