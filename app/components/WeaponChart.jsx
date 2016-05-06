import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class WeaponChart extends React.Component {
  render() {
    return (
      <div>
      <BootstrapTable data={this.props.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="en_name" isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="mStraightFrame" dataAlign="center" dataSort={true}>Straight Frame</TableHeaderColumn>
        <TableHeaderColumn dataField="mInitVel" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(2)}</div>}} dataSort={true}>Initial Velocity</TableHeaderColumn>
        <TableHeaderColumn dataField="mRepeatFrame" dataAlign="center" dataSort={true}>Repeat Frame</TableHeaderColumn>
        <TableHeaderColumn dataField="mMoveSpeed" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(2)}</div>}} dataSort={true}>Move Speed</TableHeaderColumn>
        <TableHeaderColumn dataField="mPreDelayFrm_HumanMain" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(0)}</div>}} dataSort={true}>Preshot Delay from Kid</TableHeaderColumn>
        <TableHeaderColumn dataField="mPreDelayFrm_SquidMain" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(0)}</div>}} dataSort={true}>Preshot Delay from Squid</TableHeaderColumn>
        <TableHeaderColumn dataField="mPostDelayFrm_Main" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(0)}</div>}} dataSort={true}>Post Delay</TableHeaderColumn>
      </BootstrapTable>
      <BootstrapTable data={this.props.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="en_name" isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="mDamageMax" dataAlign="center" dataFormat={(cell) => {return <div>{(cell*100).toFixed(1)}</div>}} dataSort={true}>Direct Damage</TableHeaderColumn>
        <TableHeaderColumn dataField="mDamageNear" dataAlign="center" dataFormat={(cell) => {return <div>{(cell*100).toFixed(1)}</div>}} dataSort={true}>Near Damage</TableHeaderColumn>
        <TableHeaderColumn dataField="mDamageMiddle" dataAlign="center" dataFormat={(cell) => {return <div>{(cell*100).toFixed(1)}</div>}} dataSort={true}>Middle Damage</TableHeaderColumn>
        <TableHeaderColumn dataField="mDamageFar" dataAlign="center" dataFormat={(cell) => {return <div>{(cell*100).toFixed(1)}</div>}} dataSort={true}>Far Damage</TableHeaderColumn>
        <TableHeaderColumn dataField="mCollisionRadiusNear" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Near Radius</TableHeaderColumn>
        <TableHeaderColumn dataField="mCollisionRadiusMiddle" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Middle Radius</TableHeaderColumn>
        <TableHeaderColumn dataField="mCollisionRadiusFar" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Far Radius</TableHeaderColumn>
      </BootstrapTable>
      <BootstrapTable data={this.props.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="en_name" isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkKidDirectMinRange" dataAlign="center" dataSort={true}>Direct from Kid Form, Point Blank</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkSquidDirectMinRange" dataAlign="center" dataSort={true}>Direct from Squid Form, Point Blank</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkKidDirectMaxRange" dataAlign="center" dataSort={true}>Direct from Kid Form, Max Range</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkSquidDirectMaxRange" dataAlign="center" dataSort={true}>Direct from Squid From, Max Range</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkNear" dataAlign="center" dataSort={true}>Near</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkMiddle" dataAlign="center" dataSort={true}>Middle</TableHeaderColumn>
        <TableHeaderColumn dataField="ttkFar" dataAlign="center" dataSort={true}>Far</TableHeaderColumn>
      </BootstrapTable>
      <BootstrapTable data={this.props.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="en_name" isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeStraight" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Straight Frame Range</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeNear" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Max Near Range</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeMiddle" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Max Middle Range</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeFar" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Max Far Range</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeSplashMin" dataAlign="center" dataFormat={(cell) => {return <div>{cell.toFixed(1)}</div>}} dataSort={true}>Min Splash Range</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
