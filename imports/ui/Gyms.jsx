import React, { Component } from 'react';
import Gym from '../api/gyms';
import Location from '../api/location';
import SearchBar from './SearchBar';


class Gyms extends Component {
    render() {
        return (
            <section className="gyms">
            <SearchBar />
            </section>
        )
    }
}

export default (Gyms);