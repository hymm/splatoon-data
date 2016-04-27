import React from 'react';

export default class FiringRange extends React.Component {
  getLines() {
    var lines = [];
    for (let y=0; y<=this.props.height; y+=50) {
    }
    return lines;
  }
  render() {
    return (
      <g>
        {this.getLines()};
      </g>
    )
  }
}
