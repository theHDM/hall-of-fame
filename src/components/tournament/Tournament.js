import React, {Component} from 'react';
import ResultsList from "../results-list/ResultsList";

export default class Tournament extends Component {
    render() {
        return (
            <div className="mb-4">
                <h2 className="mb-1">{this.props.tournamentName}</h2>
                <p className="font-weight-light">
                    <span className="mr-1">
                        {this.props.date}
                    </span>
                    {this.props.video &&
                        <a target="_blank" className="mr-1 no-underline" href={this.props.video}>
                            <span className="ec ec-tv"></span>
                        </a>
                    }
                    {this.props.bracket &&
                        <a target="_blank" className="mr-1 no-underline" href={this.props.bracket}>
                            <span className="ec ec-trophy"></span>
                        </a>
                    }
                </p>
                <ResultsList {...this.props}/>
            </div>
        );
    }
}