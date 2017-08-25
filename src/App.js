import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import api from './api.js';
import './App.css';

class App extends Component {

  componentDidMount() {
    return axios.get(api.key)
    .then(res => console.log(res))
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
