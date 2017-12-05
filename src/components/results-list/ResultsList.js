import React, { Component } from 'react';
import Result from "../result/Result";

export default class ResultsList extends Component {
  render() {
    const resultItems = this.props.results.sort((a, b) => a.placement - b.placement).map((result, i) => <Result key={`result_${i}`} {...result}/>);

    return (
      <div className="container">
        <div className="row justify-content-center">
          {resultItems}
        </div>
      </div>
    );
  }
}