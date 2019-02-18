import React, { Component } from 'react';
import AddGymForm from './AddGymForm';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>Want to add your martial arts gym? Add it below!</h2>
        <AddGymForm />
      </div>
    )
  }
}

export default Form;