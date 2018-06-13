import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import Jumbo from './Components/Jumbo/Jumbo.js';
import ArtistCards from './Components/ArtistCards/ArtistCards.js';
import BandsInTown from './Components/BandsInTown/BandsInTown.js';
import JobSearch from './Components/JobSearch/JobSearchPage.js';
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
                    <NavBar />
                    <Jumbo />
                    <ArtistCards />
                    <BandsInTown />
                    <JobSearch />
                </div>
            </Router>
            <Footer />
        </div>
    );
  }
}

export default App;
