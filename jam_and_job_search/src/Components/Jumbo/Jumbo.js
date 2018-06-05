import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="jumbotron classes">
                        <h1 className="display-3">Hello and Welcome!</h1>
                        <p className="lead">Here you can get in the zone by listening to your favorite artists while looking for your next new carrer.</p>
                        <p className="lead">Scroll down to find new jobs in your area or anywhere youre wanting to work next. </p>
                        <p className="lead">Below you are able to explore featured artist, when artist will be in your area, and listen to your favorite station on Spotify. </p>
                        <hr className="my-4" />
                        <p className="lead">
                        <a className="btn btn-info btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbo;
