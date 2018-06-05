import React, { Component } from 'react';
import footer from './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <p>This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong></p>
                <a href="http://www.instagram.com" target="#"><i className="fab fa-instagram"></i></a><a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a><a href="http://www.faceboo.com"><i className="fab fa-facebook-square"></i></a><a href="http://www.github.com"><i className="fab fa-github"></i></a>
            </div>
        )
    }
}

export default Footer;
