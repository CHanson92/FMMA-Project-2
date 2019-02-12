import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js';
import FMMA from '../api/fmma';


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
            "location"
            ]
        };
        this.fuse = new Fuse(this.props.all, options);
    }
    search(searchTerm) {
        this.setState({ results: this.fuse.search(searchTerm)});
    }


    displayGyms(gyms) {
        let displayGym = gyms.map((gym) =>
            <div>
                <h2>{gym.name}</h2>
                <p>{gym.address}</p>
                {this.displayMartialArtClasses(gym.martialArtClass)}
            </div>
        );

        return displayGym
    }

    displayMartialArtClasses(martialArtClasses) {
        let martialArtClassDisplay = martialArtClasses.map((martialArtClass) => ( 
            <div>
                <p>{martialArtClass.name}</p>
                {this.displaySessionTimes(martialArtClass.session)}
            </div>
        ))
        return martialArtClassDisplay
    }

    displaySessionTimes(sessionTimes) {
        let sessionTimesDisplay = sessionTimes.map((session) =>
            <div>{session.day} from {session.startTime}-{session.endTime}</div>
        );

        return sessionTimesDisplay
    }

    render() {
        const results = this.state.results.map((result, i) => {
            return (
                <div>
                    <h1 key={i}>{result.location}</h1>
                    {this.displayGyms(result.gym)}
                </div>
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
      all: FMMA.find().fetch()
    };
  })(GymInfo);