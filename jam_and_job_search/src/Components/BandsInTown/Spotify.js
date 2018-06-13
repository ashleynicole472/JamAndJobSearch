import React, { Component } from 'react';

class Spotify extends Component {
    constructor(props){
        super(props)
        const params = this.getHashParams();
        this.state={
            loggedIn: params.access_token ? true : false,
            recentlyPlayed: []
        }
        this.getHashParams = this.getHashParams.bind(this);
    }
    getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    render(){
        return(
            <div className="col-md-6">
                <h2 className="spotify">Search for music on Spotify <i className="fab fa-spotify"></i></h2>
                <a href="http://localhost:8888"
                    type="button"
                    className="btn btn-info btn-md btn-block spotify-button">Log in with Spotify <i className="fab fa-spotify"></i>
                </a>
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
