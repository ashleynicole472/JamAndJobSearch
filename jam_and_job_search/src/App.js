import React, { Component } from 'react';
import NavBar from './Components/NavBar.js';
import Jumbo from './Components/Jumbo.js';
import JobSearch from './Components/JobSearch/JobSearchPage.js';
import Cards from './Components/Cards.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbo />
        <Cards />
        <JobSearch />
        <Footer />
      </div>
    );
  }
}

export default App;
