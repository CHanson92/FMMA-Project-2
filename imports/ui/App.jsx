import React from 'react';
import Tabs from './Tabs';

const App = () => (
  <section className="main">
  <header className="mainheader">
    <h1>Welcome to FMMA!</h1>
    <section>
    <p>Find a Martial Arts Gym is here to find your local martial arts gym, whether you are a <br />
       seasoned martial artist, traveller or beginner alike!
    </p>
    </section>
  </header>
  <section className="body">
    <section className="tabs"> 
    <Tabs />
    </section>
  </section>
  <footer>Designed by Chris Hanson</footer>
  </section>
);

export default App;
