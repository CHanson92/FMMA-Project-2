import React, { Component } from 'react';
import AddGymForm from './AddGymForm';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h3>Want to add your martial arts gym? Add it below!</h3>
        <AddGymForm />
      </div>
    )
  }
}

export default Form;