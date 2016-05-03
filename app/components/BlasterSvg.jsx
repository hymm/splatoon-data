import React from 'react';
import scale from './DamageScale';

export default class BlasterSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var straigthLength = this.props.data.mInitVel * this.props.data.mStraightFrame;

    return (
      <g>
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusFar}
          style={{fill: scale.getColor(this.props.data.mDamageFar)}} />
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusMiddle}
          style={{fill: scale.getColor(this.props.data.mDamageMiddle)}} />
        <circle
          cx={this.props.ox}
          cy={this.props.oy - straigthLength}
          r={this.props.data.mCollisionRadiusNear}
          style={{fill: scale.getColor(this.props.data.mDamageNear)}} />
        <rect
          x={this.props.ox - this.props.data.mColRadius/2}
          y={this.props.oy - straigthLength}
          width={this.props.data.mColRadius}
          height={straigthLength}
          style={{fill: scale.getColor(this.props.data.mDamageMax)}} />
      </g>
    )
  }
}
