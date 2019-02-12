import React, { Component } from 'react';
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