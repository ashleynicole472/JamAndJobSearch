import React, { Component } from 'react';

//spotify id=  9b2150a20ffc49d79ec19dcc4d8cf14d

class Spotify extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className="col-md-6">
                <h2 className="spotify">Search for music on Spotify <i className="fab fa-spotify"></i></h2>
                <button
                    type="button"
                    className="btn btn-info btn-md btn-block spotify-button">Log in with Spotify <i className="fab fa-spotify"></i>
                </button>
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

                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-info btn-md btn-block">Search
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Spotify;
