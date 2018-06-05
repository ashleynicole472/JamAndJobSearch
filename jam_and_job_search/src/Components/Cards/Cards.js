import React, { Component } from 'react';
import './Cards.css';
import AUX from '../../hoc/AUX'

class Cards extends Component {
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
            </AUX>
        )
    }
}

export default Cards;
