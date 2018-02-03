import React, {Component} from 'react';

export default class SearchInput extends Component {
  render() {
    return (
      <input type="text"
             className="form-control mb-4"
             aria-describedby="Search by nickname"
             placeholder="Search by nickname"
             onChange={this.props.handleChange}
      />
    )

  }
}