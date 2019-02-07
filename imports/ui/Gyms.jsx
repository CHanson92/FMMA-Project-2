import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gym from '../api/gyms';
import Location from '../api/location';


class Gyms extends Component {
    render() {
        let display_list_of_gyms = this.props.all_gyms.map(gym => (<p>{gym.name}, {gym.location}</p>))
        return (
            <section className="gyms">
                {display_list_of_gyms}
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