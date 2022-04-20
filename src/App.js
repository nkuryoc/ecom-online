import React, { Component } from 'react';

import HomePage from './homepage/homepage.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      students: [],
      searchField: ''
    }
  }

  render(){
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }

}

export default App;
