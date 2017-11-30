import React, { Component } from 'react';

export default class Result extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div>{this.props.nickname}</div>
        <div>{this.props.placement}</div>
        <div>{this.props.prize}</div>
      </div>
    );
  }
}