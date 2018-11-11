import React, { Component } from 'react';
import './App.css';
import { initializeAlert } from './Helpers/Alert';
import Routes from './Helpers/Routes';

class App extends Component {
  componentDidMount() {
    initializeAlert();

  }
  
  render() {
    return (
      <div className="App">
        <Routes/>
        <div id="alert"></div>
      </div>
    );
  }
}


export default App;
