import React from 'react';
import Tabs from './Tabs';

const App = () => (
  <section className="main">
  <header>
    <h1>Welcome to FMMA!</h1>
    <p>Find a Martial Arts Gym is here to find your local martial arts gym, whether you are a
       seasoned martial artist, traveller or beginner alike!
    </p>
  </header>
  <section className="body">
    <section className="intro"> 
    <Tabs />
    </section>
  </section>
  <footer>Designed by Chris Hanson</footer>
  </section>
);

export default App;
