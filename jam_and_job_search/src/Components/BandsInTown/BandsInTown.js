//Key --> a09529b6105fb78af7eb531c1616a814
import React, { Component } from 'react';
import moment from 'moment';
import { Button } from '../../bootstrap.min.css';
import'./BandsInTown.css';

class BandsInTown extends Component {
    constructor(props){
        super(props);
        this.state={
            artistSearch: '',
            artistSearchResults: [],
            musicSearch: '',
            isDownloaded: false
        }
        this.artistSearchInputHandlerChange = this.artistSearchInputHandlerChange.bind(this);
        this.bandsInTown = this.bandsInTown.bind(this);
    }

    artistSearchInputHandlerChange = (event) => {
        console.log("In artist seach");
        this.setState({
            artistSearch: event.target.value
        })
    }

    bandsInTown = () => {
        let { artistSearch } = this.state
        let URL = `https://rest.bandsintown.com/artists/${this.state.artistSearch}/events?app_id=boo`

        console.log("In bands in town button click");

        fetch(URL)
        .then((response) => {
            return(
                response.json()
            )
        })
        .then((data) => {
            console.log(data);
            const artistInfo = data.map((element) =>
            <tr className="table-primary" key={element.id}>
                <td>{element.lineup}</td>
                <td>{element.venue.city}</td>
                <td>{element.venue.name}</td>
                <td>{moment(element.datetime).format('llll')}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        href={element.offers.url} target="#">Buy Tickets
                    </button>
                </td>
            </tr>
        )
            this.setState({
                artistSearchResults: artistInfo,
                isDownloaded: true
            })
        })
        .catch((error) => {
            console.log(error);
            console.log("Sometin wong");
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="bandsintown">Search Artist with Bands In Town<i className="far fa-hand-rock"></i></h2>
                    <div className="form-group">
                        <label className="col-form-label col-form-label-lg" for="inputLarge">Find when theyll be in your area!</label>
                        <input
                            onChange={this.artistSearchInputHandlerChange}
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Search Artist Name"
                            id="inputLarge" />
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button
                                onClick={this.bandsInTown}
                                type="button"
                                className="btn btn-info btn-md btn-block">Search
                            </button>
                            <div className="bands">
                            {this.state.isDownloaded ?
                                <table>
                                    <tbody>
                                        <tr className="table-primary">
                                        <th scope="row">Artist</th>
                                        <th scope="row">City</th>
                                        <th scope="row">Venue</th>
                                        <th scope="row">Date and Time</th>
                                        <th scope="row">Tickets</th>
                                        </tr>
                                        {this.state.artistSearchResults}
                                    </tbody>
                                </table> : null}
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-md-6">
                        <h2 className="spotify">Search for music on Spotify <i className="fab fa-spotify"></i></h2>
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
                </div>
            </div>
        )
    }
}

export default BandsInTown;
