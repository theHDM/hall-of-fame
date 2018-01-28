import React, { Component } from 'react';
import './App.css';
import TournamentList from "./components/tournament-list/TournamentList";
const queryString = require('query-string');

class App extends Component {
  getRenderMode() {
    const parsed = queryString.parse(window.location.search);
    return parsed.renderMode;
  }
  render() {
    const renderMode = this.getRenderMode();

    return (
      <TournamentList renderMode={renderMode}/>
    );
  }
}

export default App;
