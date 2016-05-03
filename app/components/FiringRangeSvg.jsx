import React from 'react';

export default class FiringRange extends React.Component {
  getLines() {
    var lines = [];
    for (let y=0; y<=this.props.height; y+=50) {
      lines.push(<line key={y} strokeDasharray="10, 5" x1="0" y1={this.props.oy-y} x2={this.props.width} y2={this.props.oy-y} style={{stroke: '#EEEEEE', strokeWidth: 2}}/>);
    }
    return lines;
  }

  render() {
    return (
      <g>
        <filter id='n'>
          <feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='10' stitchTiles='noStitch'/>
        </filter>
        <rect x={0} y={this.props.oy - this.props.height} height={this.props.height} width={this.props.width} fill='#777'/>
        <rect x={0} y={this.props.oy - this.props.height} height={this.props.height} width={this.props.width} filter='url(#n)' opacity='0.0'/>
        {this.getLines()};
      </g>
    )
  }
}
