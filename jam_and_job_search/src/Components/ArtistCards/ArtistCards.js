import React, { Component } from 'react';
import './ArtistCards.css';
import AUX from '../../hoc/AUX';

import ASAP  from './images/A$AP.jpg'
import Bruno from './images/bruno.jpg'
import BTS from './images/BTS.jpg'
import Camila from './images/camilaCabello.jpg'
import CardiB from './images/Cardi_B.jpg'
import Childish from './images/childish.jpg'
import Drake from './images/drake.jpg'
import Dua from './images/duaLipa.jpg'
import Ed from './images/edSheeran.jpg'
import Imagin from './images/imaginDragons.jpg'
import Jcole from './images/jcole.jpg'
import Kendrick from './images/kendrickLamar.jpg'
import Maroon from './images/MAROON5.jpg'
import PostM from './images/post_malone.jpg'
import Taylor from './images/taylorSwift.jpg'
import Weekend from './images/weekend.jpg'

class ArtistCards extends Component {
    constructor(props){
        super(props);

        this.randomPicture = this.randomPicture.bind(this);
    }
    randomPicture = () => {
        console.log("in random");
        var randomPictureArray = [
            ASAP,
            Bruno,
            BTS,
            Camila,
            CardiB,
            Childish,
            Drake,
            Dua,
            Ed,
            Imagin,
            Jcole,
            Kendrick,
            Maroon,
            PostM,
            Taylor,
            Weekend
        ]
        let randomIndex = Math.floor(Math.random() * randomPictureArray.length)
        return(
            randomPictureArray[randomIndex]
        )
    }
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
                                    href="http://www.bandsintown.com"
                                    src={this.randomPicture()} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={this.randomPicture()} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={this.randomPicture()} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-body">
                                <img
                                    className="image"
                                    src={this.randomPicture()} />
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        )
    }
}

export default ArtistCards;
