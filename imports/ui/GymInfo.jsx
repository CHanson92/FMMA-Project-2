import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gym from '../api/gyms';
import Location from '../api/location';
import SessionTimes from '../api/sessiontimes';
import TypeOfMartialArt from '../api/typeofmartialart';

class GymInfo extends Component {
    render() {
        const gyms = this.props.all_gyms.map((gym) => {
            return (
                <li>{gym.description}</li>
            )
        });
        const locations = this.props.locations.map((location) => {
            return (
                <li>{location.name}</li>
            )
        });
        return (
            <div>
                <h1>Hello</h1>
                <ul>{gyms}</ul>
                <ul>{locations}</ul>
            </div>
        )
    }
}

export default GymContainer = withTracker(() => {
    return {
      all_gyms: Gym.find().fetch(),
      locations: Location.find().fetch(),
      sessions: SessionTimes.find().fetch(),
      martialart: TypeOfMartialArt.find().fetch()
    };
  })(GymInfo);