import React, { Component } from 'react';
import Tournament from "../tournament/Tournament";
import data from './data.json';

export default class TournamentList extends Component {
  render() {

    const tournamentItems = data.map((tournament, i) => <Tournament key={`tournament_${i}`} {...tournament}/>);

    return (
      <div className="container">
        https://v4-alpha.getbootstrap.com/components/card/
        <h1 className="text-center">Carnage League Hall Of Fame</h1>
          {tournamentItems}
      </div>
    );
  }
}