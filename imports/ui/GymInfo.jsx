import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js';
import Gym from '../api/gyms';
import Location from '../api/location';
import SessionTimes from '../api/sessiontimes';
import TypeOfMartialArt from '../api/typeofmartialart';


class GymInfo extends Component {
    constructor(props) {
        super(props);
        this.initSearch = this.initSearch.bind(this);
        this.search = this.search.bind(this);
        this.state = {results: []}
    }
    componentDidMount() {
        this.initSearch();
        if (this.props.searched) {
            this.search(this.props.searchTerm)
            this.props.toggleSearch();
        }    
    }
    componentDidUpdate() {
        this.initSearch();
        if (this.props.searched) {
            this.search(this.props.searchTerm)
            this.props.toggleSearch();
        }

    }
    initSearch() {
        var options = {
            shouldSort: true,
            tokenize: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
            "name",
            "country"
            ]
        };
        this.fuse = new Fuse(this.props.locations, options); // "list" is the item array
    }
    search(searchTerm) {
        console.log('searching for: ', searchTerm);
        console.log('results: ', this.fuse.search(searchTerm));
        this.setState({ results: this.fuse.search(searchTerm)});
    }
    render() {
        const results = this.state.results.map((result, i) => {
            return (
                <div>
                <p key={i}>{result.name}, {result.country}</p>
                </div>
            )
        });
        const gyms = this.props.all_gyms.map((gym, i) => {
            return (
                <li key={i}>{gym.description}</li>
            )
        });
        const locations = this.props.locations.map((location, i) => {
            return (
                <li key={i}>{location.name}</li>
            )
        });

        const sessions = this.props.sessions.map((sessions, i) => {
            return (
                <div key={i}>
                <li>{sessions.Day}</li>
                <li>{sessions.StartTime}</li>
                <li>{sessions.EndTime}</li>
                </div>
            )
        });
        const martialart = this.props.martialart.map((martialart, i) => {
            return (
                <li key={i}>{martialart.MartialArt}</li>
            )
        });
        return (
            <div>
                <ul>{results}</ul>
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