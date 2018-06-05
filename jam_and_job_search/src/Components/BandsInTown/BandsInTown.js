//Key --> a09529b6105fb78af7eb531c1616a814
import React, { Component } from 'react';
import'./BandsInTown.css';

class BandsInTown extends Component {
    constructor(props){
        super(props);
        this.state={
            artistSearch: '',
            musicSearch: ''
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Search Artist with Bands In Town</h2>
                    <div className="form-group">
                        <label className="col-form-label col-form-label-lg" for="inputLarge">Find when theyll be in your area!</label>
                        <input
                            onChange={this.jobSearchHandlerChange}
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Search Artist Name"
                            id="inputLarge" />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <button
                                type="button"
                                className="btn btn-info btn-md btn-block">Search
                            </button>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
                    <div className="col-md-6">
                        <h2>Search for music on Spotify</h2>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-lg" for="inputLarge">Enjoy listening to your fav music while job searching!</label>
                            <input
                                onChange={this.jobSearchHandlerChange}
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Search music"
                                id="inputLarge" />
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <button
                                    type="button"
                                    className="btn btn-info btn-md btn-block">Search
                                </button>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BandsInTown;
