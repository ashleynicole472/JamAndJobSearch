import React, { Component } from 'react';
import Spotify from './Spotify'
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
            <tr className="table-light" key={element.id}>
                <td>{element.lineup}</td>
                <td>{element.venue.city}</td>
                <td>{element.venue.name}</td>
                <td>{moment(element.datetime).format('llll')}</td>
                <td>
                    <a href={element.url}
                        type="button"
                        className="btn btn-primary btn-sm"
                        target="#">Buy Tickets
                    </a>
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
            console.log("Somethings wrong");
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
                                            <tr className="table-light">
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
                    <Spotify />
                </div>
            </div>
        )
    }
}

export default BandsInTown;
