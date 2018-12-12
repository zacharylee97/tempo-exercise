import React, { Component } from 'react';
import './App.css';
import TeamList from './Components/TeamList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeamList />
      </div>
    );
  }
}

export default App;
