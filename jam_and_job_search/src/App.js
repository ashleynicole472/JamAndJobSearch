import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import Jumbo from './Components/Jumbo/Jumbo.js';
import Cards from './Components/Cards/Cards.js';
import BandsInTown from './Components/BandsInTown/BandsInTown.js';
import JobSearch from './Components/JobSearch/JobSearchPage.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbo />
        <Cards />
        <BandsInTown />
        <JobSearch />
        <Footer />
      </div>
    );
  }
}

export default App;
