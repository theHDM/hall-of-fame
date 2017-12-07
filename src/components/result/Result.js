import React, {Component} from 'react';

export default class Result extends Component {
    render() {
        return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <span className={`border mr-1 flag-icon flag-icon-${ this.props.country.toLowerCase() }`}></span>
                            {this.props.nickname}
                        </h4>
                        <p className="card-text">{this.props.prize}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
        );
    }
}