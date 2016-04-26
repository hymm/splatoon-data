import React from 'react';

export default class BlasterSvg extends React.Component {
  render() {
    var straigthLength = this.props.data.mInitVel * this.props.data.mStraightFrame;

    return (
      <g>
        <circle cx={this.props.ox} cy={this.props.oy - straigthLength} r={this.props.data.mCollisionRadiusFar} style={{fill: '#5599FF'}} />
        <circle cx={this.props.ox} cy={this.props.oy - straigthLength} r={this.props.data.mCollisionRadiusMiddle} style={{fill: '#FF0000'}} />
        <circle cx={this.props.ox} cy={this.props.oy - straigthLength} r={this.props.data.mCollisionRadiusNear} style={{fill: '#FFFF00'}} />
        <rect
          x={this.props.ox - this.props.data.mColRadius/2}
          y={this.props.oy - straigthLength}
          width={this.props.data.mColRadius}
          height={straigthLength}
          style={{fill: '#000000'}}
        />
      </g>
    )
  }
}
