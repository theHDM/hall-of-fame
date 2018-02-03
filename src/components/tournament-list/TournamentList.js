import React, {Component} from 'react';
import Tournament from "../tournament/Tournament";
import SearchInput from '../search-input/SearchInput'
import data from './data.json';

export default class TournamentList extends Component {
  state = {
    tournaments: []
  };
  componentDidMount() {
    this.setState({
      tournaments: data
    });
  }
  filterByNickName = evt => {
    console.log(evt.target.value);
    const filteredTournaments = data.filter(tournament => {
      const searchedNickname = evt.target.value.toLowerCase();
      return tournament.results.some(result =>
        result.nickname.toLowerCase().indexOf(searchedNickname) >= 0
      );
    });
    this.setState({
      tournaments: filteredTournaments
    })
  };
  render() {
    const tournamentItems = this.state.tournaments.map((tournament, i) =>
      <Tournament key={`tournament_${i}`} {...tournament}
                  renderMode={this.props.renderMode}
      />
    );

    return (
      <div className="container">
        <h1 className="display-3 text-center mb-5 mt-2">Carnage League Hall Of&nbsp;Fame</h1>
        <SearchInput handleChange={this.filterByNickName}/>
        {tournamentItems}
      </div>
    );
  }
}