import React, {Component} from 'react';
const medalClassNames = {
    1: 'ec-1st-place-medal',
    2: 'ec-2nd-place-medal',
    3: 'ec-3rd-place-medal'
};

export default class Result extends Component {
    render() {
        return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <span className={`ec ${medalClassNames[this.props.placement] } mr-1`}></span>
                            {this.props.nickname}
                            <span className={`border ml-2 flag-icon flag-icon-${ this.props.country.toLowerCase() }`}></span>
                        </h4>
                        <p className="card-text">{this.props.prize}</p>
                    </div>
                </div>
        );
    }
}