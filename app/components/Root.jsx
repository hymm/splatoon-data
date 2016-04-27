import React from 'react';
import Blaster from './Blaster';
import FiringRange from './FiringRange';
import rawData from './splatoon-main-weapons-raw-data.json';

var blasterNames = ['Luna Blaster', 'Blaster', 'Range Blaster', 'Rapid Blaster', 'Rapid Blaster Pro'];

export default class Root extends React.Component {
  getBlaster(name) {
    return rawData.find(function(weapon) {
      return weapon.en_name === name;
    });
  }

  getBlastersJsx() {
    var blasters = rawData.filter(function(weapon) {
      return weapon.class === 'blaster';
    });

    blasters.sort(function(a, b) {
      return b.mCollisionRadiusFar - a.mCollisionRadiusFar;
    });

    return blasters.map(function(data, index) {
      return <Blaster data={data} ox={60+index*90} oy={200} />;
    }.bind(this));
  }

  render() {
    var width = 500;
    return (<div>
      <svg svg width={width} height="500"
          viewBox={"0 0 500 " + width}
          xmlns="http://www.w3.org/2000/svg">
        <FiringRange width={width} height={200} oy={200} />
        {this.getBlastersJsx()}
      </svg>
    </div>);
  }
}
