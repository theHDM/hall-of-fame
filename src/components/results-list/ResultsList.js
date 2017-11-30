import React, { Component } from 'react';
import Result from "../result/Result";

export default class ResultsList extends Component {
  render() {
    const results = [
      {
        nickname: 'Starfall',
        placement: 2,
        prize: '500 RUR'
      },
      {
        nickname: 'Jewel',
        placement: 1,
        prize: '1500 RUR'
      },
      {
        nickname: 'Big Boy',
        placement: 3,
      }
    ];
    const resultItems = results.sort((a, b) => a.placement - b.placement).map((result, i) => <Result key={`result_${i}`} {...result}/>);

    return (
      <div className="container">
        <h1 className="text-center">Hall Of Fame</h1>
        <div className="row">
          {resultItems}
        </div>
      </div>
    );
  }
}