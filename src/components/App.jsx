import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './reset.css';
import './App.css';

require('../fonts/signerica.css');

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div id="app-container">
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <Header />
        <Navbar />
        {this.props.children && React.cloneElement(this.props.children, {
        state: this.state })}
        <Footer />
      </div>
    );
  }
}

export default App;

