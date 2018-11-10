import React, { Component } from 'react';
import './App.css';
import { initializeAlert } from './Helpers/Alert';
import Routes from './Helpers/Routes';
import Store from './Store/Store';

class App extends Component {
  componentDidMount() {
    initializeAlert();
   setTimeout(() => {
    console.log("Store",Store.getState())
   }, 5000);
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
