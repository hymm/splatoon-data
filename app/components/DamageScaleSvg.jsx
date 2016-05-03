import React from 'react';
import scale from './DamageScale';

export default class DamageScale extends React.Component {
  constructor(props) {
    super(props);

    this.width = 30;
  }
  getStops() {
    const numStops=10;
    var stops = [];
    let max = scale.getMax();
    let min = scale.getMin();

    for (let i=0; i<10 + 1; i++) {
      let offset = i / numStops * 100;
      let colorVal = (max - min) * i / numStops + min;
      stops.push(<stop key={colorVal} offset={offset.toFixed(0) + "%"} stopColor={scale.getColor(colorVal)} />)
    }

    return stops;
  }

  getMarks() {
    let ranges = scale.getRange();
    var max = scale.getMax();

    var marks = ranges.map(function(val) {
      let y = this.props.height * (1 - val / max) + this.props.y;
      return (
        <g key={y}>
          <line x1={this.props.x+this.width} y1={y} x2={this.props.x+this.width+5} y2={y} style={{stroke: '#000', strokeWidth: 1}} />
          <text className='MarkerText' x={this.props.x+this.width+6} y={y} style={{dominantBaseline: 'middle'}}>{(val*100).toFixed(2)}</text>
        </g>
      )
    }.bind(this));

    return marks;
  }

  render() {
    return (
      <g id="damage-scale">
        <linearGradient id="damage-gradient" x1="0" x2="0" y1="1" y2="0">
          {this.getStops()}
        </linearGradient>
        <rect x={this.props.x} y={this.props.y} height={this.props.height} width={this.width} fill='url(#damage-gradient)' />
        {this.getMarks()}
      </g>
    );
  }
}
