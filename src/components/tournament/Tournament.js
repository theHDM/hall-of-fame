import React, { Component } from 'react';
import ResultsList from "../results-list/ResultsList";

export default class Tournament extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-2">{this.props.tournamentName}</h2>
        <ResultsList {...this.props}/>
      </div>
    );
  }
}