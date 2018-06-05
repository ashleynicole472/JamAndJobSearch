import React, { Component } from 'react';
import classes from './Jobsearch.css';

class JobSearch extends Component {
    render(){
        return(
            <div className="classes">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>
                        Looking for more responsibility?
                        </h1>
                        <h2>
                        Looking for an awesome new company to grow your career with?
                        </h2>
                        <h3>
                        Youve come to the right place!
                        </h3>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-lg" for="inputLarge">Search for your next new career!</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Search Jobs" id="inputLarge" />
                            <input className="form-control form-control-lg" type="text" placeholder="Search Location" id="inputLarge" />
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
                    <div className="row">
                        <div className="col-sm-12">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobSearch;
