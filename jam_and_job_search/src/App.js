import React, { Component } from 'react';
import NavBar from './Components/NavBar.js';
import JobSearch from './Components/JobSearch/JobSearchPage.js';
import Cards from './Components/Cards.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
            <div className="col-lg-12 col-sm-12">
                <div className="jumbotron">
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
        <Cards />
        <JobSearch />
        <div className="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.
        </div>
      </div>
    );
  }
}

export default App;
