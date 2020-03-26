import React, { Component } from 'react';
import About from './pages/About';
import Home from './pages/Home.js';
import Photo from './pages/Photo';
import Disclaimer from './pages/Disclaimer.js';
import { Route } from 'react-router-dom';



class SiteRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/disclaimer" component={Disclaimer} />
                <Route path="/photo" component={Photo} />
            </div>
        );
    }
}

export default SiteRouter;