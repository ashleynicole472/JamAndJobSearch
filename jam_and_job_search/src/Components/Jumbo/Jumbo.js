import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="jumbotron classes">
                        <br />
                        <br />
                        <h3 className="display-3">Jam & Search!</h3>
                        <h2 className="display-5">Designed to help you enjoy job searching</h2>
                        <hr className="my-4" />
                        <h6 className="lead">Here you can get in the zone by listening to your favorite artists while looking for your next new carrer.<br />
                        Designed to be a one stop shop for those who cant just search without some amazing music in the background.</h6>
                        <p></p>
                        <p className="lead">
                        <a className="btn btn-info btn-lg" href="#" role="button">Happy searching!</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbo;
