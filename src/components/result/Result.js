import React, {Component} from 'react';

export default class Result extends Component {
    render() {
        return (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.nickname}</h4>
                        <p class="card-text">{this.props.prize}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
        );
    }
}