import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Location from '../api/location';
import SearchBar from './SearchBar';
import GymInfo from './GymInfo';

class GetSearchInput extends Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);

    this.state = {input: '', searched: false}
    console.log(this.props)
    }

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    toggleSearch(e) {
        const value = !this.state.searched;
        this.setState({searched: value})
    }

    render() {
        return (
            <div>
            <SearchBar 
                value={this.state.input}
                onChange={this.handleChange}
                toggleSearch={this.toggleSearch}/>
            <GymInfo searchTerm={this.state.input} searched={this.state.searched} toggleSearch={this.toggleSearch}/>
            </div>
        )
    }
}

export default GetSearchInput;

// class Search extends Component {
//     constructor(props){
//         super(props);
//         var options = {
//             shouldSort: true,
//             tokenize: true,
//             threshold: 0.6,
//             location: 0,
//             distance: 100,
//             maxPatternLength: 32,
//             minMatchCharLength: 1,
//             keys: [
//             "name",
//             "country"
//             ]
//         };
//         this.fuse = new Fuse(this.props.locations, options); // "list" is the item array
//     }
//     render() {
//         this.result = this.fuse.search("london");
//         console.log(this.result);

//         const locations = this.result.map((location) => {
//             return (
//                 <li>{location.name}</li>
//             )
//         });
//         return (
//             <div>
//                 <ul>{locations}</ul>
//             </div>
//         )
//     }
// }

// export default LocationSearch = withTracker(() => {
//     return {
//       locations: Location.find().fetch(),
//     };
//   })(Search);