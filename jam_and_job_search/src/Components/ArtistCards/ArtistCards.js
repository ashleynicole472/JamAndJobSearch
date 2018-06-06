import React, { Component } from 'react';
import './ArtistCards.css';
import AUX from '../../hoc/AUX';
import ASAP from './images/A$AP.jpg';
import Bruno from './images/bruno.jpg';
import BTS from './images/BTS.jpg';
import Camila from './images/camilaCabello.jpg';

class ArtistCards extends Component {

    render(){
        return(
            <AUX>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Featured Artists</h1>
                        <hr />
                    </div>
                </div>
                <div className="row cards-center">
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={ASAP} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={Bruno} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={BTS} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={Camila} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        )
    }
}

export default ArtistCards;
