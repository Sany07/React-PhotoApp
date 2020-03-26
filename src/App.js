import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SiteRouter from './components/SiteRouter';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <BrowserRouter>
        <Header/>
        <SiteRouter/>

      <Footer/>
      </BrowserRouter>

    </React.Fragment>
    );
  }
}

export default App;