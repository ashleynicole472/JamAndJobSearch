import React, { Component } from 'react';
import BandsInTown from '../BandsInTown/BandsInTown';
import JobSearch from '../JobSearch/JobSearchPage';
import { Route, Link } from 'react-router-dom';
import './NavBar.css';

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Jobsearch = () => (
  <div>
    <h2> JobSearch </h2>
  </div>
);

const Jam = () => (
  <div>
    <h2> Jam </h2>
  </div>
);

class NavBar extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <nav className="navbar navBar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">Jam
                            & Job Search</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link
                                    className="nav-link"
                                    to="/">Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/Jobsearch">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/BandsInTown">Jam</Link>
                            </li>
                          </ul>
                        <Route path="/" component={Home}/>
                        <Route path="/JobSearch" component={JobSearch}/>
                        <Route path="/BandsInTown" component={BandsInTown}/>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar;
