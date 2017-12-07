import React, { Component } from 'react';
import ResultsList from "../results-list/ResultsList";

export default class Tournament extends Component {
  render() {
    return (
      <div className="mb-4">
        <h2 className="mb-1">{this.props.tournamentName}</h2>
        <p class="font-weight-light">{this.props.date}</p>
        <ResultsList {...this.props}/>
      </div>
    );
  }
}