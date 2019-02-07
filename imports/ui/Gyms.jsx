import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gym from '../api/gyms';
import Location from '../api/location';


class Gyms extends Component {
    render() {
        return (
            <section className="gyms">
            </section>
        )
    }
}

export default GymsContainer = withTracker(() => {
    return {
      all_gyms: Gym.find().fetch(),
      locations: Location.find().fetch()
    };
  })(Gyms);