import React, { Component } from 'react';
import './App.css';
import TournamentList from "./components/tournament-list/TournamentList";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import VideoGrid from './components/video-grid/VideoGrid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from './data.json';
const queryString = require('query-string');

class App extends Component {
  getRenderMode() {
    const parsed = queryString.parse(window.location.search);
    return parsed.renderMode;
  }
  render() {
    const renderMode = this.getRenderMode();

    return (
      <Router basename="/hall-of-fame">
        <div>
            <Navbar />

            <Route exact path="/"
                   render={props => (
                       <TournamentList
                           tournaments={data}
                           renderMode={renderMode}
                           {...props} />
                   )} />
            <Route path="/video" render={props => (
                <VideoGrid
                    tournaments={data}
                    {...props} />
            )} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
