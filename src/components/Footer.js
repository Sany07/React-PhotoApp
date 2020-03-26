import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container pt-5 mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <h3>sanybd007@gmail.com</h3>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Youtube</a></li>
                                    <li><a href="/">Linkedin</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">Lorem ipsum dolor sit.</div>
                        </div>
                    </div>
         
            </footer>
        );
    }
}

export default Footer;