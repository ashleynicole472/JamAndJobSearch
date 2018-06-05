import React, { Component } from 'react';
import NavBar from './Components/NavBar'
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
        <div className="row cards-center">
            <div className="col-sm-3">
                <div className="card border-info mb-3">
                    <div className="card-header">
                        Header
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Warning card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card border-info mb-3">
                    <div className="card-header">
                        Header
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Warning card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card border-info mb-3">
                    <div className="card-header">
                        Header
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Warning card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.
        </div>
      </div>
    );
  }
}

export default App;
