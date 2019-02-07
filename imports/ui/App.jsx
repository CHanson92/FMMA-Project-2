import React from 'react';
import Gyms from './Gyms';
import Form from './Form';

const App = () => (
  <section className="main">
  <header><h1>Welcome to FMMA!</h1></header>
  <section className="body">
    <section className="intro">     
    <h3>Find a Martial Arts Gym is here to find your local martial arts gym, whether you are a
       seasoned martial artist, traveller or beginner alike!
    </h3>
    </section>
    <Gyms />
    <Form />
  </section>
  <footer>Designed by Chris Hanson</footer>
  </section>
);

export default App;
