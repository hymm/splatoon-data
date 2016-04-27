import React from 'react';

export default class FiringRange extends React.Component {
  getLines() {
    var lines = [];
    for (let y=0; y<=this.props.height; y+=50) {
      lines.push(<line strokeDasharray="10, 5" x1="0" y1={this.props.oy-y} x2={this.props.width} y2={this.props.oy-y} style={{stroke: '#EEEEEE', strokeWidth: 2}}/>);
    }
    return lines;
  }
  render() {
    return (
      <g>
        <rect x={0} y={0} height={this.props.height} width={this.props.width} style={{fill: '#999999'}} />
        {this.getLines()};
      </g>
    )
  }
}
