import React from 'react';
import chroma from 'chroma-js';

export default class BlasterSvg extends React.Component {

  //split the ranges into 3 colors and return the correct color
  getColor(weaponDamage) {
    const colors = ['#ffffe0','#e0e8d6','#d5cebe','#d0b1a2','#cb9484','#c57666','#be5647','#b5302a','#9a1817','#77130e','#521208','#2d0f02','#000000'];
    const ranges = [0, 0.3333, 0.50, 1.00, 1.50];

    var bezInterpolator = chroma.bezier(['LightYellow', 'PaleTurquoise', 'FireBrick', 'Maroon', 'Black']);
    var scale = chroma.scale(bezInterpolator).domain(ranges).correctLightness();

    //find which range value is in
    /*var index = ranges.findIndex(function(rangeValue) {
      return weaponDamage < rangeValue;
    });

    //if weapon damage is greater than last range, return last color
    if (index < 0) {
      return colors[colors.length - 1];
    }

    var rangeSize = ranges[index] - ranges[index - 1];
    var colorIndex = Math.floor(3*(weaponDamage - ranges[index-1])/rangeSize) + 3*(index-1);
    */
    return scale(weaponDamage).hex();
  }

  render() {
    var straigthLength = this.props.data.mInitVel * this.props.data.mStraightFrame;

    return (
      <g>
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusFar}
          style={{fill: this.getColor(this.props.data.mDamageFar)}} />
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusMiddle}
          style={{fill: this.getColor(this.props.data.mDamageMiddle)}} />
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusNear}
          style={{fill: this.getColor(this.props.data.mDamageNear)}} />
        <rect
          x={this.props.ox - this.props.data.mColRadius/2}
          y={this.props.oy - straigthLength}
          width={this.props.data.mColRadius}
          height={straigthLength}
          style={{fill: this.getColor(this.props.data.mDamageMax)}} />
      </g>
    )
  }
}
