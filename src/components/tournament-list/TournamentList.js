import React, {Component} from 'react';
import Tournament from "../tournament/Tournament";
import data from './data.json';

export default class TournamentList extends Component {
    render() {

        const tournamentItems = data.map((tournament, i) => <Tournament key={`tournament_${i}`} {...tournament}/>);

        return (
            <div className="container">
                <h1 className="display-3 text-center mb-5 mt-2">Carnage League Hall Of&nbsp;Fame</h1>
                {tournamentItems}
            </div>
        );
    }
}