import React, {Component} from 'react';
import ResultsList from "../results-list/ResultsList";

export default class Tournament extends Component {
    render() {
        return (
            <div className="mb-4">
                <h2 className="mb-1">{this.props.tournamentName}</h2>
                <p class="font-weight-light">
                    <span className="mr-1">
                        {this.props.date}
                    </span>
                    {this.props.video &&
                        <a target="_blank" className="ec ec-tv mr-1 no-underline" href={this.props.video}></a>
                    }
                    {this.props.bracket &&
                        <a target="_blank" className="ec ec-trophy no-underline" href={this.props.bracket}></a>
                    }
                </p>
                <ResultsList {...this.props}/>
            </div>
        );
    }
}